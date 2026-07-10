# 🚀 Portfolio CV — [NAMA LENGKAP]

> **Fullstack Developer | System Analyst | Information Systems Graduate**

Website portfolio/CV pribadi modern yang dibangun menggunakan HTML5, CSS3, Vanilla JavaScript (ES6), GSAP, AOS, Font Awesome, dan Google Fonts (Inter).

---

## 📁 Struktur Folder

```
portfolio-cv/
│
├── index.html                  ← Halaman utama
├── README.md                   ← Dokumentasi ini
│
└── assets/
    ├── css/
    │   └── style.css           ← Stylesheet utama
    │
    ├── js/
    │   └── main.js             ← JavaScript utama
    │
    ├── images/
    │   ├── profile.jpg         ← Foto profil
    │   ├── project-seragam.png ← Thumbnail project 1
    │   └── project-finance-bot.png ← Thumbnail project 2
    │
    └── files/
        └── cv.pdf              ← File CV untuk download
```

---

## ▶️ Cara Menjalankan Project

### Lokal (tanpa server)
1. Clone atau download repository ini
2. Buka file `index.html` langsung di browser
   ```bash
   # Atau gunakan Live Server di VS Code
   # Klik kanan index.html → "Open with Live Server"
   ```

### Dengan Live Server (Rekomendasi)
```bash
# Install Live Server secara global
npm install -g live-server

# Jalankan dari folder portfolio-cv
live-server
```

### Dengan Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Lalu buka: http://localhost:8000
```

---

## ✏️ Cara Mengganti Data Pribadi

> **Cari komentar `<!-- GANTI DATA DIRI DI SINI -->` di dalam `index.html`**
> **dan `// GANTI DATA DIRI DI SINI:` di dalam `assets/js/main.js`**

### 1. Data Utama (index.html)

| Data | Lokasi | Ganti Dengan |
|------|--------|--------------|
| Nama Lengkap | Semua `[NAMA LENGKAP]` | Nama Anda |
| Tempat, Tanggal Lahir | `[TEMPAT, TANGGAL LAHIR]` | Contoh: Yogyakarta, 1 Januari 2002 |
| Jenis Kelamin | `[JENIS KELAMIN]` | Laki-laki / Perempuan |
| Status | `[STATUS]` | Lajang / Menikah |
| Alamat | `[ALAMAT]` | Alamat lengkap Anda |
| Nomor Telepon | `[NOMOR TELEPON]` | Contoh: +62 812 3456 7890 |
| Email | `[EMAIL ANDA]` | email@example.com |
| GitHub | `[LINK GITHUB ANDA]` | https://github.com/username |
| LinkedIn | `[LINK LINKEDIN ANDA]` | https://linkedin.com/in/username |
| Instagram | `[LINK INSTAGRAM ANDA]` | https://instagram.com/username |
| WhatsApp | `[NOMOR WA ANDA]` | Format: `628123456789` (tanpa + dan spasi) |

### 2. Data Pendidikan

Cari dan ganti di section `EDUCATION`:
- `[NAMA SMA/SMK]` — Nama sekolah SMA/SMK
- `[NAMA SMP]` — Nama sekolah SMP
- `[TAHUN MASUK]` dan `[TAHUN LULUS]` — Periode sekolah
- `[JURUSAN]` — Jurusan SMA/SMK

### 3. Data Pengalaman & Organisasi

Cari dan ganti di section `EXPERIENCE`:
- `[Bulan Tahun] – [Bulan Tahun]` — Periode kerja/organisasi
- Deskripsi di dalam `<p>[Deskripsi ...]</p>`
- Nama organisasi, perusahaan, jabatan

### 4. Logo / Inisial

Di navbar, footer, dan loading screen, ganti teks `DEV` dengan inisial/nama singkat Anda:
```html
<span class="logo-name">DEV</span>  ← Ganti "DEV"
```

---

## 🖼️ Cara Mengganti Foto Profil

1. Siapkan foto dengan rasio **1:1** (persegi), ukuran minimal **400×400px**
2. Ganti file `assets/images/profile.jpg` dengan foto Anda
3. Pastikan nama file tetap `profile.jpg` (atau ubah path di HTML jika nama berbeda)

```html
<!-- Di index.html, cari baris ini dan sesuaikan jika nama file berbeda -->
<img src="assets/images/profile.jpg" alt="Profile Photo" ...>
```

---

## 📄 Cara Mengganti File CV PDF

1. Ekspor CV Anda ke format PDF
2. Ganti file `assets/files/cv.pdf` dengan CV Anda
3. Pastikan nama file tetap `cv.pdf` (atau ubah semua referensi di HTML)

```html
<!-- Pastikan href ini benar -->
<a href="assets/files/cv.pdf" ... download>Download CV</a>
```

---

## 💼 Cara Mengganti / Menambah Proyek

### Mengganti Project yang Ada

Di `index.html`, cari `<!-- PROJECT 1 -->` dan `<!-- PROJECT 2 -->`:

```html
<!-- Ganti judul proyek -->
<h3 class="project-title">Nama Proyek Anda</h3>

<!-- Ganti deskripsi -->
<p class="project-description">Deskripsi proyek...</p>

<!-- Ganti link GitHub dan Live Demo -->
<a href="https://github.com/username/repo" ...>GitHub</a>
<a href="https://namadomain.com" ...>Live Demo</a>

<!-- Ganti tech stack -->
<div class="project-tech">
  <span>Laravel</span>
  <span>MySQL</span>
</div>

<!-- Ganti fitur -->
<span class="feature-tag"><i class="fas fa-check"></i> Fitur Anda</span>
```

### Menambahkan Project Baru

Duplikasi blok `<div class="project-card ...">...</div>` di dalam `projects-grid` dan sesuaikan isinya.

### Mengganti Thumbnail Proyek

Ganti file gambar di `assets/images/`:
- `project-seragam.png` — untuk Project 1
- `project-finance-bot.png` — untuk Project 2

---

## 🌐 Cara Deploy ke GitHub Pages

1. **Buat repository baru** di GitHub (misalnya: `portfolio`)

2. **Push semua file** ke repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**:
   - Buka repository di GitHub
   - Klik **Settings** → **Pages**
   - Di **Source**, pilih branch `main` dan folder `/ (root)`
   - Klik **Save**

4. Website akan tersedia di:
   ```
   https://username.github.io/portfolio/
   ```

> **Catatan:** Pastikan `index.html` ada di root repository, bukan di dalam folder lain.

---

## 🔷 Cara Deploy ke Netlify

### Cara 1 — Drag & Drop (Termudah)

1. Buka [app.netlify.com](https://app.netlify.com)
2. Login dengan akun Anda
3. Klik **"Sites"** → **"Add new site"** → **"Deploy manually"**
4. Drag & drop **folder `portfolio-cv`** ke area yang disediakan
5. Tunggu deploy selesai — website siap!

### Cara 2 — Via Git

1. Push ke GitHub terlebih dahulu (lihat langkah GitHub Pages di atas)
2. Di Netlify: **Add new site** → **Import from Git**
3. Pilih repository dan branch `main`
4. Build command: **(kosongkan)**
5. Publish directory: `.` atau `portfolio-cv/`
6. Klik **Deploy site**

---

## ▲ Cara Deploy ke Vercel

### Cara 1 — Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Dari dalam folder portfolio-cv
vercel

# Ikuti instruksi di terminal
# Pilih "No" untuk framework detection
```

### Cara 2 — Via Dashboard

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"**
3. Import dari GitHub repository Anda
4. Vercel akan otomatis mendeteksi sebagai static site
5. Klik **Deploy**

---

## 🔧 Konfigurasi Form Kontak

Form kontak menggunakan simulasi pengiriman. Untuk integrasi nyata, pilih salah satu:

### Opsi 1 — Formspree (Gratis, Mudah)

1. Daftar di [formspree.io](https://formspree.io)
2. Buat form baru dan salin endpoint URL
3. Di `assets/js/main.js`, cari komentar `// GANTI DATA DIRI DI SINI: Untuk mengirim form`
4. Ganti kode simulasi dengan:

```javascript
fetch('https://formspree.io/f/YOUR-FORM-ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
.then(res => res.json())
.then(data => {
  showFormMessage('Pesan berhasil dikirim! ✅', 'success');
  form.reset();
})
.catch(() => {
  showFormMessage('Terjadi kesalahan. Coba lagi.', 'error');
});
```

### Opsi 2 — EmailJS (Tanpa Backend)

1. Daftar di [emailjs.com](https://emailjs.com)
2. Tambahkan script EmailJS sebelum `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
3. Gunakan `emailjs.sendForm()` di dalam event handler form

---

## 🎨 Kustomisasi Warna

Semua warna diatur melalui CSS Variables di `assets/css/style.css` bagian `:root`:

```css
:root {
  --clr-accent: #6c63ff;      /* Warna utama (ungu) */
  --clr-accent-2: #a855f7;    /* Warna sekunder (violet) */
  --clr-accent-3: #06b6d4;    /* Warna tersier (cyan) */
  --clr-bg-primary: #050811;  /* Background utama */
  --clr-bg-secondary: #0a0f1e; /* Background sekunder */
}
```

---

## 📦 Dependensi (CDN)

| Library | Versi | Kegunaan |
|---------|-------|----------|
| GSAP | 3.12.5 | Animasi lanjutan |
| ScrollTrigger | 3.12.5 | Animasi berbasis scroll |
| AOS | 2.3.4 | Animate On Scroll |
| Font Awesome | 6.5.1 | Icon |
| Google Fonts Inter | Latest | Tipografi |

Semua library dimuat via CDN, tidak memerlukan instalasi npm.

---

## ✅ Checklist Sebelum Deploy

- [ ] Ganti semua `[NAMA LENGKAP]` dengan nama Anda
- [ ] Ganti semua `[EMAIL ANDA]` dengan email Anda
- [ ] Ganti semua `[LINK GITHUB ANDA]`, `[LINK LINKEDIN ANDA]`, dll.
- [ ] Ganti `[NOMOR WA ANDA]` dengan nomor WhatsApp (format: `628xxx`)
- [ ] Tambahkan foto profil di `assets/images/profile.jpg`
- [ ] Tambahkan file CV di `assets/files/cv.pdf`
- [ ] Isi data SMA, SMP, pengalaman, dan organisasi
- [ ] Ganti link GitHub dan Live Demo di setiap proyek
- [ ] Ganti teks `DEV` di navbar/footer dengan inisial Anda
- [ ] Test di berbagai ukuran layar (desktop, tablet, mobile)
- [ ] Test semua link dan tombol berfungsi

---

## 🤝 Lisensi

Proyek ini bebas digunakan dan dimodifikasi untuk keperluan personal.

---

**Made with ❤️ — [NAMA LENGKAP]**
