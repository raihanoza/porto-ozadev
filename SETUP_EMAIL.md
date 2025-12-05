# Setup Email Contact Form

Fitur contact form telah ditambahkan untuk mengirim email ke email Anda.

## 📧 Cara Setup

### 1. Buat App Password di Google Account

1. Buka [Google Account Security](https://myaccount.google.com/security)
2. Pastikan **2-Step Verification** sudah aktif
3. Buka [App Passwords](https://myaccount.google.com/apppasswords)
4. Pilih:
   - **App**: Mail
   - **Device**: Other (Custom name) → Ketik "Portfolio Contact Form"
5. Klik **Generate**
6. Copy 16-digit password yang muncul (contoh: `xxxx xxxx xxxx xxxx`)

### 2. Konfigurasi Environment Variables

1. Copy file `.env.example` menjadi `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` dan isi dengan data Anda:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-digit-app-password
   ```

   **Contoh:**
   ```env
   EMAIL_USER=raihanoza18@gmail.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   ```

### 3. Restart Development Server

```bash
npm run dev
```

## ✨ Fitur yang Ditambahkan

### 1. **API Route** (`/app/api/contact/route.ts`)
   - Handle POST request dari form
   - Validasi input (name, email, message)
   - Kirim email ke owner (Anda)
   - Kirim email konfirmasi ke sender

### 2. **Contact Component** (`/components/ui/Contact.tsx`)
   - Form dengan state management
   - Validasi required fields
   - Loading state saat mengirim
   - Success/Error notification
   - Auto-reset form setelah sukses
   - Disabled button saat loading

### 3. **Email Templates**
   - **Email untuk Anda**: Berisi detail pengirim dan pesan
   - **Email untuk Sender**: Konfirmasi bahwa pesan telah diterima

## 🧪 Testing

1. Buka halaman portfolio Anda
2. Scroll ke bagian Contact Form
3. Isi form dengan data test:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Klik tombol **SHOOT**
5. Anda akan menerima 2 email:
   - Email ke inbox Anda (owner)
   - Email konfirmasi ke sender (test@example.com)

## 🛡️ Security Notes

- ✅ `.env.local` sudah ada di `.gitignore` (tidak akan ter-commit)
- ✅ Menggunakan App Password (bukan password utama Gmail)
- ✅ Email validation di backend
- ✅ Rate limiting bisa ditambahkan jika perlu

## 📝 Customization

### Mengubah Email Template

Edit file `/app/api/contact/route.ts` pada bagian `mailOptionsToOwner` dan `mailOptionsToSender` untuk mengubah template email.

### Menambahkan Field Baru

1. Tambahkan field di state `formData` di `Contact.tsx`
2. Tambahkan input field di form
3. Update API route untuk menerima field baru

## 🚨 Troubleshooting

### Email tidak terkirim?

1. **Cek App Password**: Pastikan sudah benar dan tidak ada spasi
2. **2-Step Verification**: Harus aktif di Google Account
3. **Less Secure Apps**: Tidak perlu diaktifkan jika menggunakan App Password
4. **Console Log**: Cek error di terminal/console browser

### "Invalid login" error?

- Pastikan `EMAIL_USER` dan `EMAIL_PASSWORD` benar di `.env.local`
- Restart development server setelah mengubah `.env.local`

### Email masuk ke Spam?

- Normal untuk pertama kali, mark as "Not Spam"
- Setelah beberapa kali, Gmail akan otomatis pindah ke inbox

## 📦 Package yang Digunakan

- `nodemailer`: ^6.9.x - Library untuk mengirim email
- `@types/nodemailer`: Type definitions untuk TypeScript

## 🎯 Next Steps (Optional)

- [ ] Tambahkan reCAPTCHA untuk anti-spam
- [ ] Rate limiting dengan Redis
- [ ] Email queue dengan background job
- [ ] Notifikasi ke Slack/Discord
- [ ] Save messages to database

---

Dibuat dengan ❤️ oleh Raihan Oza
