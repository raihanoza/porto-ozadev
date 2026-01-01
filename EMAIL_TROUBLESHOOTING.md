# EMAIL SERVICE TROUBLESHOOTING

## Masalah Umum Error 500 di Production

### 1. Environment Variables Tidak Terset
**Gejala**: Error "Email service not configured"
**Solusi**:
```bash
# Pastikan di platform hosting (Vercel/Netlify) sudah set:
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password
```

### 2. App Password Google Belum Dibuat
**Gejala**: "Email service authentication failed"
**Solusi**:
1. Buka https://myaccount.google.com/security
2. Aktifkan 2-Factor Authentication
3. Buka https://myaccount.google.com/apppasswords
4. Generate App Password untuk "Mail"
5. Gunakan password 16-digit (contoh: `abcd efgh ijkl mnop`)
6. Set di environment: `EMAIL_PASSWORD=abcdefghijklmnop` (tanpa spasi)

### 3. Gmail Security Settings
**Gejala**: Connection refused atau authentication failed
**Solusi**:
1. Pastikan 2FA aktif di Gmail
2. Gunakan App Password, BUKAN password akun
3. Cek di https://myaccount.google.com/lesssecureapps (harus OFF)

### 4. Platform Hosting Issues

#### Vercel
```bash
# Set environment di Vercel Dashboard:
vercel env add EMAIL_USER
vercel env add EMAIL_PASSWORD

# Atau via CLI:
vercel env add EMAIL_USER production
vercel env add EMAIL_PASSWORD production
```

#### Netlify
```bash
# Di Netlify Dashboard > Site Settings > Environment Variables
EMAIL_USER = your-email@gmail.com
EMAIL_PASSWORD = your-16-digit-app-password
```

### 5. Network/Firewall Issues
**Gejala**: Timeout errors
**Solusi**:
- Beberapa hosting provider memblok port SMTP
- Coba gunakan alternative email service (SendGrid, Resend, etc.)

## Testing Email di Development

```bash
# 1. Buat file .env.local
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# 2. Test API endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "message": "Test message"
  }'
```

## Alternative Email Services

### 1. Resend (Recommended)
```typescript
// Install: npm install resend
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your-email@gmail.com',
  subject: 'New Contact Form',
  html: emailHtml,
});
```

### 2. SendGrid
```typescript
// Install: npm install @sendgrid/mail
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
await sgMail.send(mailOptions);
```

## Production Deployment Checklist

- [ ] Environment variables terset di hosting platform
- [ ] Gmail App Password dibuat dan valid
- [ ] 2FA aktif di Gmail account
- [ ] Test email berfungsi di development
- [ ] Cek logs di production untuk error details
- [ ] Verify SMTP ports tidak diblok hosting