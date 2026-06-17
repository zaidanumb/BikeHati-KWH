# BikeHati Project - Update Documentation

## 📋 File yang Perlu di Upload & Update

### 🆕 Folder Baru:
- `BisnisPedia/` (berisi `BusinessPlan.html`)

### 📝 File yang Di-Update (Replace):
- `index.html`
- `home-style.css`
- `home-script.js`

---

## 📝 Detail Perubahan

### 1. **index.html** (Root Directory)
   - **Perubahan:** Ditambah button "BisnisPedia" di navbar dengan modal popup
   - **Lokasi:** Di bagian navbar, sebelah kanan link "Kontak"
   - **Isi modal:** Link ke halaman Business Plan

### 2. **home-style.css** (Root Directory)
   - **Perubahan 1:** Styling untuk navbar button "BisnisPedia"
   - **Perubahan 2:** Styling untuk modal popup BisnisPedia
   - **Perubahan 3:** Animasi floating untuk:
     - Logo sepeda di navbar (floatingBike animation)
     - Kartu statistik di hero section (floatingCard animation)

### 3. **home-script.js** (Root Directory)
   - **Perubahan:** Ditambah JavaScript untuk membuka/menutup modal BisnisPedia
   - **Fungsi:** Event listener untuk button dan modal close functionality

---

## 📁 STRUKTUR FOLDER YANG SUDAH ADA (Pastikan Tetap Ada)

```
Project Sewa Sepeda/
├── index.html ⭐ (UPDATED)
├── home-style.css ⭐ (UPDATED)
├── home-script.js ⭐ (UPDATED)
├── BisnisPedia/ ⭐ (NEW FOLDER)
│   └── BusinessPlan.html ⭐ (NEW FILE)
├── sewa/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── listSepeda/
│   ├── BMX/
│   │   ├── Pacific.png
│   │   ├── United.png
│   │   └── Wimcycle.png
│   ├── sepedaGunung/
│   │   ├── Polygon.png
│   │   ├── United.png
│   │   └── Wimcycle.png
│   ├── sepedaLipat/
│   │   ├── Element.png
│   │   ├── Polygon.png
│   │   └── United.png
│   └── sepedaListrik/
│       ├── Polygon.png
│       ├── Selis.png
│       └── United.png
└── paymentMethod/
    ├── dana.png
    ├── gopay.png
    ├── ovo.png
    └── qris.png
```

---

## 🎯 PANDUAN UPLOAD MANUAL

### Step 1: Upload Folder Baru
Upload folder **BisnisPedia** ke GitHub:
```
BisnisPedia/
└── BusinessPlan.html
```

### Step 2: Upload File yang Di-Update
Replace file-file berikut di GitHub:
1. `index.html` (di root, sudah ada tapi di-update)
2. `home-style.css` (di root, sudah ada tapi di-update)
3. `home-script.js` (di root, sudah ada tapi di-update)

### Step 3: Verify
Pastikan struktur folder di GitHub match dengan struktur di atas.

---

## ✨ FITUR YANG DITAMBAHKAN

### 1. **Button BisnisPedia di Navbar**
   - Warna hijau (background: #2ecc71)
   - Terletak di sebelah kanan link "Kontak"
   - Dengan icon briefcase (font-awesome)

### 2. **Modal Popup BisnisPedia**
   - Muncul saat button diklik
   - Berisi link ke "Business Plan"
   - Bisa di-close dengan X button atau click outside modal

### 3. **Halaman Business Plan**
   - File: `BisnisPedia/BusinessPlan.html`
   - Konten lengkap mencakup:
     - Executive Summary
     - Target Market (4 segmen)
     - Produk & Layanan (4 kategori sepeda)
     - Model Revenue
     - Marketing Strategy
     - Operational Plan
     - Financial Projection (3 tahun)
     - Competitive Advantage
     - Risk Analysis
     - Implementation Timeline
   - Navbar dengan tombol Back ke halaman awal
   - Design responsive dan professional

### 4. **Animasi Floating**
   - **Logo Sepeda di Navbar:** Bergerak naik-turun dengan slight rotation (2.5s)
   - **Kartu Statistik di Hero:** Bergerak floating dengan staggered delay (3s)

---

## 📊 Changelog Summary

| Item | Jenis | Status |
|------|------|--------|
| Folder `BisnisPedia/` | Baru | ✅ Buat |
| File `BisnisPedia/BusinessPlan.html` | Baru | ✅ Buat |
| File `index.html` | Update | ✅ Perbarui |
| File `home-style.css` | Update | ✅ Perbarui |
| File `home-script.js` | Update | ✅ Perbarui |

---

## 🚀 Tips Upload

**Opsi A: Via GitHub Web Interface**
- Buka repo: https://github.com/zaidanumb/BikeHati-KWH
- Drag & drop folder BisnisPedia
- Upload/replace ketiga file (index.html, home-style.css, home-script.js)
- Commit dengan message: "Add BisnisPedia section with Business Plan page and animations"

**Opsi B: Via GitHub Desktop**
- Buka GitHub Desktop
- Refresh repository untuk see all changes
- Add ke commit
- Commit dan push

**Opsi C: Via Terminal (Jika Credentials Sudah Fixed)**
- `git add .`
- `git commit -m "Add BisnisPedia section with Business Plan page and animations"`
- `git push origin master`

---

## ℹ️ Informasi Penting

- File HTML di BisnisPedia/BusinessPlan.html sudah self-contained (HTML + CSS + JS dalam 1 file)
- Tidak ada file tambahan yang dibutuhkan untuk halaman Business Plan
- Semua styling dan functionality sudah included dalam file tersebut
- Navbar di Business Plan page sama seperti di halaman utama untuk konsistensi UI

---

**Created:** April 22, 2026  
**Project:** BikeHati - Sewa Sepeda Platform  
**Student:** Zaidan Arrasyid Suwondo (AF-10)
