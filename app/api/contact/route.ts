import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    // Konfigurasi transporter menggunakan Gmail
    // PENTING: Anda perlu membuat App Password di Google Account
    // https://myaccount.google.com/apppasswords
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email Anda
        pass: process.env.EMAIL_PASSWORD, // App Password dari Google
      },
    });

    // Email untuk Anda (pemilik website)
    const mailOptionsToOwner = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Email Anda yang akan menerima pesan
      subject: `Pesan Baru dari ${name} - Portfolio Contact Form`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Pesan Baru dari Portfolio Contact Form</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Email ini dikirim dari form contact di portfolio Anda.
          </p>
        </div>
      `,
      replyTo: email, // Memudahkan untuk reply langsung ke pengirim
    };

    // Email konfirmasi untuk pengirim (optional)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Terima kasih telah menghubungi saya!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Terima kasih, ${name}! 🎉</h2>
          <p>Saya telah menerima pesan Anda dan akan segera meresponsnya.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Pesan Anda:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p>Saya akan menghubungi Anda kembali secepatnya melalui email: <strong>${email}</strong></p>
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Best regards,<br>
            Raihan Oza
          </p>
        </div>
      `,
    };

    // Kirim email ke owner
    await transporter.sendMail(mailOptionsToOwner);

    // Kirim email konfirmasi ke sender
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email berhasil dikirim!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error mengirim email:", error);
    return NextResponse.json(
      { error: "Gagal mengirim email. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
