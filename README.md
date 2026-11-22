# TUT.Company — Website Company Profile

Website *company profile* statis dan interaktif untuk **TUT.Company** (*PT Tech Up Teknologi Indonesia*), sebuah perusahaan teknologi yang bergerak di bidang pengembangan **Artificial Intelligence (AI), Pemrograman/Software, Aplikasi & Web, serta IoT/Robotik**.

Website ini dirancang dengan gaya visual **Modern Tech Clean** (berbahasa Inggris pada antarmuka) untuk memperkenalkan ekosistem terpadu TUT yang menaungi tiga unit bisnis utama:
* **TUT.EDU** — Platform pembelajaran IT *online* yang fleksibel untuk tingkat pemula hingga profesional.
* **TUT.Academy** — Pusat pelatihan IT *offline*, *bootcamp* intensif, serta laboratorium praktik perangkat keras IoT dan robotik.
* **TUT.Entertainment** — Penyelenggara acara IT, kompetisi teknologi (*hackathon* & lomba robotik), serta pameran (*tech expo*) yang memamerkan karya inovasi dari TUT.Company.

---

## Halaman & Fitur Utama

Website terdiri dari **6 halaman utama** yang saling terhubung dengan data terpusat dan animasi interaktif:

| Halaman | File | Fitur & Konten Utama |
| :--- | :--- | :--- |
| **Home** | `index.html` | *Hero showcase slider* otomatis & manual, animasi *counter* pencapaian, blok *Core Technology*, kartu ekosistem asimetris dengan *quick modal*, *parallax* CTA, dan *footer* ber-*watermark*. |
| **About Us** | `about.html` | Profil perusahaan induk, visi & misi, diagram sinergi ekosistem (*The TUT Flywheel: Build – Educate – Showcase*), dan profil tim *leadership*. |
| **Solutions & Projects** | `solutions.html` | Penjelasan 4 divisi inti teknologi, **filter kategori proyek dinamis** (*All, AI, Software, App & Web, IoT & Robotics*), serta **modal detail studi kasus**. |
| **Our Ecosystem** | `ecosystem.html` | **Interactive Tab Switcher** untuk berpindah antar unit (*TUT.EDU, TUT.Academy, TUT.Entertainment*) dengan dukungan *deep-link* (`#edu`, `#academy`, `#entertainment`) dan tabel perbandingan program. |
| **Events & News** | `events.html` | **Live Countdown Timer** menuju *TUT Tech Expo 2026*, filter kategori acara & berita, serta **modal detail & form pendaftaran (RSVP)** interaktif. |
| **Contact** | `contact.html` | Direktori kontak per unit bisnis, informasi kantor pusat, **form *Business Inquiry*** dengan notifikasi *toast*, serta **FAQ Accordion** buka-tutup. |

**Fitur Global di Seluruh Halaman:**
* *Scroll progress indicator* di bagian atas layar.
* *Sticky glassmorphism navbar* dan menu navigasi *responsive* untuk perangkat *mobile*.
* Animasi *scroll reveal* berbasis `IntersectionObserver`.
* Validasi form *newsletter* dan notifikasi *toast* dinamis.

---

## Teknologi yang Digunakan

Project ini dibangun sepenuhnya di sisi *frontend* (tanpa *backend* maupun *database*):

* **HTML5** — Struktur semantik untuk 6 halaman web.
* **Tailwind CSS (via CDN)** — *Utility-first CSS framework* untuk tata letak responsif dan konsistensi warna (`#1E45FB` Electric Blue, `#CDF22B` Lime, `#0A0B0F` Deep Dark).
* **CSS3 Custom (`style.css`)** — *Architectural dashed grid*, transisi modal, *floating animations*, dan *scroll reveal*.
* **Vanilla JavaScript (ES6+)** — Pengelolaan data terpusat (`data.js`), *DOM manipulation*, filter katalog, *tab switcher*, *countdown timer*, *slider*, *parallax*, dan *accordion* (`main.js`).
* **Lucide Icons (via CDN)** — Ikon antarmuka vektor yang ringan dan seragam.
* **Google Fonts** — Tipografi *Space Grotesk* (judul) dan *Plus Jakarta Sans* (teks isi).

---

## Struktur Direktori

```text
tut-company/
├── index.html          # Halaman 1: Home
├── about.html          # Halaman 2: About Us
├── solutions.html      # Halaman 3: Solutions & Projects
├── ecosystem.html      # Halaman 4: Our Ecosystem
├── events.html         # Halaman 5: Events & News
├── contact.html        # Halaman 6: Contact
├── README.md           # Dokumentasi project
└── assets/
    ├── css/
    │   └── style.css   # Custom styling, grid background & animasi
    └── js/
        ├── data.js     # Data terpusat (Hero, Core Tech, Ecosystem, Projects, Events)
        └── main.js     # Logika interaktif global (Navbar, Reveal, Counter, Slider, Modal)
```

---

## Cara Menjalankan Project

### Prasyarat
* Browser modern (Google Chrome, Microsoft Edge, Firefox, atau Safari).
* **Koneksi internet aktif** saat membuka halaman agar CDN Tailwind CSS, Lucide Icons, Google Fonts, dan aset gambar dapat dimuat dengan sempurna.

### Langkah Menjalankan

1. **Unduh atau Clone Repository**
   ```bash
   git clone [https://github.com/Ekuivalen07/TUT.Company-ekuivalen-nim.git]
   ```
   *(Atau ekstrak file `.zip` project ke folder lokal komputer Anda).*

2. **Pilih Salah Satu Cara Membuka Website:**

   * **Cara 1 — Langsung via Browser (Paling Cepat)**
     Buka folder `tut-company`, lalu klik dua kali pada file `index.html` untuk membukanya langsung di browser.

   * **Cara 2 — Menggunakan Live Server di VS Code (Direkomendasikan)**
     1. Buka folder `tut-company` di **Visual Studio Code**.
     2. Pastikan ekstensi **Live Server** sudah terpasang.
     3. Klik kanan pada `index.html` lalu pilih **Open with Live Server**.
     4. Website otomatis terbuka di `http://127.0.0.1:5500`.

   * **Cara 3 — Local Server via Terminal (Opsional)**
     Jika memiliki Python atau Node.js, jalankan salah satu perintah berikut di dalam folder `tut-company`:
     ```bash
     # Menggunakan Python
     python -m http.server 8000

     # Atau menggunakan Node.js
     npx serve .
     ```
     Lalu buka `http://localhost:8000` di browser.

---

## Author

**Ekuivalen Muhammad Firdaus**
* GitHub: [@Ekuivalen07](https://github.com/Ekuivalen07)
* Program Studi: Teknologi Rekayasa Perangkat Lunak — Politeknik IDN Bogor
