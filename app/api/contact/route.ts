import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                  
                  <!-- Header with gradient -->
                  <tr>
                    <td style="padding: 0; border-radius: 16px 16px 0 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 40px 40px 35px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                              📬 New Message Received
                            </h1>
                            <p style="margin: 10px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                              Someone just reached out through your portfolio
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <!-- Sender Info Card -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
                        <tr>
                          <td style="padding: 24px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                              <tr>
                                <td style="padding-bottom: 16px;">
                                  <span style="display: inline-block; background-color: #667eea; color: #ffffff; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 6px 12px; border-radius: 6px;">Sender Details</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                      <td style="width: 80px; color: #6b7280; font-size: 14px; font-weight: 500;">Name</td>
                                      <td style="color: #111827; font-size: 15px; font-weight: 600;">${name}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 12px 0;">
                                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                    <tr>
                                      <td style="width: 80px; color: #6b7280; font-size: 14px; font-weight: 500;">Email</td>
                                      <td>
                                        <a href="mailto:${email}" style="color: #667eea; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Content -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span style="display: inline-block; background-color: #10b981; color: #ffffff; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 6px 12px; border-radius: 6px;">Message Content</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; padding: 24px;">
                            <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">${message.replace(
                              /\n/g,
                              "<br>"
                            )}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Quick Reply Button -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 32px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);">
                              Reply to ${name.split(" ")[0]}
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 16px 16px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 13px; text-align: center; line-height: 1.6;">
                        This email was sent from your portfolio contact form<br>
                        <span style="color: #d1d5db;">•</span> ${new Date().toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      replyTo: email, // Memudahkan untuk reply langsung ke pengirim
    };

    // Email konfirmasi untuk pengirim (optional)
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for reaching out! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message Received</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f5;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);">
                  
                  <!-- Header with gradient -->
                  <tr>
                    <td style="padding: 0; border-radius: 16px 16px 0 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 50px 40px; text-align: center;">
                            <div style="font-size: 64px; margin-bottom: 16px;">✨</div>
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                              Thank You, ${name}!
                            </h1>
                            <p style="margin: 12px 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; font-weight: 400;">
                              Your message has been successfully received
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      
                      <!-- Success Message -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.7;">
                              Hi <strong>${name}</strong>,
                            </p>
                            <p style="margin: 0 0 20px; color: #374151; font-size: 16px; line-height: 1.7;">
                              Thanks for reaching out! I've received your message and will get back to you as soon as possible. I typically respond within 24-48 hours.
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Message Summary -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <span style="display: inline-block; background-color: #667eea; color: #ffffff; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; padding: 6px 12px; border-radius: 6px;">Your Message</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="background-color: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; padding: 24px;">
                            <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap; word-wrap: break-word;">${message.replace(
                              /\n/g,
                              "<br>"
                            )}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- Contact Info -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #eff6ff; border-radius: 12px; border: 1px solid #bfdbfe; padding: 24px; margin-bottom: 30px;">
                        <tr>
                          <td>
                            <p style="margin: 0 0 12px; color: #1e40af; font-size: 14px; font-weight: 600;">
                              📧 Reply Email
                            </p>
                            <p style="margin: 0; color: #1e3a8a; font-size: 15px; font-weight: 500;">
                              ${email}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Social Links (Optional - customize as needed) -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                          <td style="padding-bottom: 16px;">
                            <p style="margin: 0; color: #6b7280; font-size: 14px; text-align: center;">
                              Meanwhile, feel free to connect with me on:
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td align="center">
                            <table role="presentation" style="display: inline-block; border-collapse: collapse;">
                              <tr>
                                <td style="padding: 0 8px;">
                                  <a href="https://github.com/raihanoza" style="display: inline-block; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">
                                    GitHub
                                  </a>
                                </td>
                                <td style="padding: 0 8px; color: #d1d5db;">•</td>
                                <td style="padding: 0 8px;">
                                  <a href="https://linkedin.com/in/raihanoza" style="display: inline-block; color: #667eea; text-decoration: none; font-size: 14px; font-weight: 500;">
                                    LinkedIn
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Closing -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td>
                            <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.7;">
                              Best regards,<br>
                              <strong style="color: #667eea; font-size: 18px;">Raihan Oza</strong>
                            </p>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 16px 16px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 8px; color: #9ca3af; font-size: 13px; text-align: center; line-height: 1.6;">
                        This is an automated confirmation email
                      </p>
                      <p style="margin: 0; color: #d1d5db; font-size: 12px; text-align: center;">
                        © ${new Date().getFullYear()} Raihan Oza. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Kirim email ke owner
    await transporter.sendMail(mailOptionsToOwner);

    // Kirim email konfirmasi ke sender
    await transporter.sendMail(mailOptionsToSender);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
