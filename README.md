# 👓 OPTIK EZIA — Contemporary Digital Eyewear Editorial

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14_App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/Three.js-WebGL_60fps-black?style=for-the-badge&logo=threedotjs&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.0-blueviolet?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/License-MIT-gold?style=for-the-badge" alt="MIT License" />
</p>

> **"Terangkan matamu seperti air 💧"** — Official Optik Ezia Tagline

A **production-quality, high-fashion digital eyewear editorial experience** built for **Optik Ezia** (Indonesia's premier optical architecture brand). 

Combining German 3D wavefront vision diagnostics with handcrafted Japanese Beta-Titanium frames, presented through an unconventional editorial narrative, numbered technical identity (`01`–`08`), smooth Lenis physics scrolling, and an ultra-lightweight WebGL 3D spectacle background.

Designed & Developed by **[Alif Alfathar](https://github.com/lipp13)**.

---

## 🌟 Key Features

- **📖 Editorial Narrative Architecture**:
  - Unconventional asymmetric grid layout with massive fluid serif typography (`Cormorant Garamond`).
  - High-contrast technical microcopy tags (`OPTIK EZIA / 001`, `font-mono tracking-[0.35em]`).
  - Zero generic ecommerce cards — replaced with fashion magazine compositions, 1px hairline dividers, and desaturated warm ivory color tones (`#FBFBF9`).

- **🔢 Numbered Technical Identity System**:
  - `01 / SISTEM PENGLIHATAN` (*KAMI TIDAK HANYA MELIHAT. KAMI MERASAKAN.*)
  - `02 / BINGKAI KACAMATA` (*Objek Desain Kacamata — BAHAN, BENTUK, FIT, KARAKTER*)
  - `03 / LENSA DIGITAL` (*Refraksi & Lapisan Digital — JERNIH, KENYAMANAN, PERLINDUNGAN, PRESISI*)
  - `04 / KESEHATAN MATA` (*Mata Anda Layak Mendapatkan Perhatian — 5 Tahapan Periksa*)
  - `05 / KATALOG PILIHAN` (*Katalog Kacamata Pilihan*)
  - `06 / LOKASI GERAI` (*Temukan Gerai Ezia Terdekat — Jakarta, Surabaya, Bandung, Bali, Yogyakarta*)
  - `07 / DUNIA SOSIAL` (*Ikuti Kolase Optik Ezia*)
  - `08 / PERNYATAAN AKHIR` (*LIHAT APA YANG SELANJUTNYA.*)

- **🕶️ Full-Bleed Ultra-Lightweight 3D Stage**:
  - Powered by Three.js & React Three Fiber.
  - Native WebGL shaders (`meshStandardMaterial`) with fixed 1x DPR and zero supersampling penalty.
  - Full-bleed background integration without clunky card borders, ensuring 60fps scrolling on both desktop & mobile.

- **🎬 Cinematic Editorial Preloader**:
  - Monospace numerical counter (`00%` → `100%`) with an expanding optical aperture ring.
  - Smooth vertical slide-up curtain exit transition (`y: "-100%"`).

- **🇮🇩 100% Bahasa Indonesia Localization**:
  - Fully translated content adapted for Indonesian optical patients, complete with official [Linktree @optikezia](https://linktr.ee/optikezia) data, store locations, and WhatsApp concierge integration.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 14 App Router](https://nextjs.org/)
- **Language**: TypeScript 5.4
- **3D Graphics & WebGL**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation Engine**: [Framer Motion](https://www.framer.com/motion/) + [Lenis Smooth Scroll](https://lenis.darkroom.engineering/)
- **Styling & Tokens**: [Tailwind CSS 3.4](https://tailwindcss.com/) + Custom Hairline Utilities
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm / pnpm / yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lipp13/Optik-Ezia.git
   cd Optik-Ezia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or next available port) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
Optik-Ezia/
├── src/
│   ├── app/                    # Next.js 14 App Router routes
│   │   ├── about/              # Brand story & craftsmanship
│   │   ├── collection/         # Full optical & sunglasses catalogue
│   │   ├── services/           # 5-stage vision care protocol
│   │   ├── stores/             # Flagship store locator
│   │   ├── globals.css         # Design tokens & fluid clamp typography
│   │   ├── layout.tsx          # Root layout with preloader & smooth scroll
│   │   └── page.tsx            # Main editorial homepage entry
│   ├── components/
│   │   ├── 3d/                 # Three.js 3D canvas & spectacles geometry
│   │   ├── home/               # Numbered editorial narrative sections (01-08)
│   │   ├── layout/             # Navbar, Footer, and Fullscreen Mobile Menu
│   │   └── ui/                 # Preloader, Custom Cursor, Animated Text
│   └── data/                   # Centralized Indonesian data models
│       ├── products.ts         # Eyewear catalogue
│       ├── services.ts         # Diagnostic process steps
│       └── stores.ts           # Flagship boutique branch details
├── LICENSE                     # Official MIT License (Alif Alfathar)
├── README.md                   # Project documentation
└── tailwind.config.ts          # Color tokens & typography scale
```

---

## 👨‍💻 Developer & Attribution

This website was designed and engineered with meticulous craftsmanship by:

**Alif Alfathar**
- GitHub: [@lipp13](https://github.com/lipp13)
- Project Repository: [https://github.com/lipp13/Optik-Ezia](https://github.com/lipp13/Optik-Ezia)

### Reference & Social Links:
- **Official Optik Ezia Linktree**: [https://linktr.ee/optikezia](https://linktr.ee/optikezia)
- **Official Instagram**: [@optikezia](https://www.instagram.com/optikezia/)

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.
Copyright (c) 2026 **Alif Alfathar**.
