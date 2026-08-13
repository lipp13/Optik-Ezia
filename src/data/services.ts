export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  equipmentTag: string;
  detailPoints: string[];
}

export const SERVICES_PROCESS: ServiceProcessStep[] = [
  {
    stepNumber: "01",
    title: "Pemetaan Kornea & Refraksi Wavefront",
    subtitle: "Pemeriksaan Awal Anatomi Mata",
    description:
      "Pengukuran topografi kornea dan aberasi gelombang mata menggunakan instrumen wavefront Jerman hingga sub-mikron.",
    equipmentTag: "ZEISS i.Profiler Plus",
    detailPoints: [
      "Pemetaan 1.500 titik kornea",
      "Analisis pupil pada kondisi terang & gelap",
      "Deteksi aberasi penglihatan malam",
    ],
  },
  {
    stepNumber: "02",
    title: "Pemeriksaan Visus 3D Sub-Mikron",
    subtitle: "Evaluasi Ketajaman Penglihatan",
    description:
      "Pengujian ketajaman visual binokular dan koordinasi otot mata untuk kenyamanan membaca dan fokus layar digital.",
    equipmentTag: "ZEISS VISUSCREEN 500",
    detailPoints: [
      "Uji penglihatan binokular 3D stereo",
      "Evaluasi akomodasi penglihatan jarak dekat & jauh",
      "Pemeriksaan kelelahan mata digital",
    ],
  },
  {
    stepNumber: "03",
    title: "Konsultasi Gaya Hidup & Pilihan Lensa",
    subtitle: "Rekomendasi Spesifikasi Lensa",
    description:
      "Rekomendasi opsi lapisan lensa anti-radiasi blue light, anti-silau night drive, atau photochromic adaptive.",
    equipmentTag: "ZEISS SmartLife & BlueGuard",
    detailPoints: [
      "Pilihan filter blue light & sinar UV",
      "Penyesuaian kebutuhan kerja & berkendara",
      "Rekomendasi indeks ketebalan lensa",
    ],
  },
  {
    stepNumber: "04",
    title: "Centration Digital 3D Centri-Fit",
    subtitle: "Presisi Posisi Pupil & Bingkai",
    description:
      "Pengukuran titik pupil, jarak mata (PD), sudut kemiringan bingkai (pantoscopic tilt), dan pantulan vertex secara digital 3D.",
    equipmentTag: "ZEISS VISUFIT 1000 3D",
    detailPoints: [
      "Rekonstruksi avatar 3D wajah 180 derajat",
      "Akurasi jarak pupil hingga 0,1 milimeter",
      "Penyelarasan pusat optik lensa tanpa kesalahan",
    ],
  },
  {
    stepNumber: "05",
    title: "Penyesuaian Ergonomis & Penyetelan Bingkai",
    subtitle: "Pemasangan Akhir & Garansi Presisi",
    description:
      "Penyetelan bingkai titanium kustom oleh optometris berpengalaman agar pas di hidung dan belakang telinga.",
    equipmentTag: "Anatomical Fitting Kit",
    detailPoints: [
      "Penyetelan bantalan hidung & gagang bingkai",
      "Uji kenyamanan gerak & posisi kacamata",
      "Garansi adaptasi penglihatan 30 hari",
    ],
  },
];

export const LENS_COATINGS = [
  {
    id: "platinum",
    name: "ZEISS DuraVision Platinum",
    tag: "Ultra-Jernih Anti-Refleksi",
    description: "Lapisan anti-refleksi ion ultra-keras yang 9x lebih tahan gores.",
    benefits: ["99.4% Kejernihan Transmitansi", "Sangat Mudah Dibersihkan", "Anti-Debu & Hidrofobik"],
  },
  {
    id: "blueguard",
    name: "ZEISS BlueGuard Shield",
    tag: "Perlindungan Sinar Biru Digital",
    description: "Memblokir radiasi sinar biru digital (400-455nm) tanpa efek pantulan biru pekat.",
    benefits: ["Mengurangi Kelelahan Mata", "Menjaga Sirkadian Tidur", "Tampilan Lensa Alami"],
  },
  {
    id: "photofusion",
    name: "ZEISS PhotoFusion X",
    tag: "Adaptif Photochromic Otomatis",
    description: "Lensa yang berubah gelap otomatis saat terkena sinar matahari UV dalam hitungan detik.",
    benefits: ["Transisi Cepat Outdoor-Indoor", "100% Proteksi UV400", "Pilihan Warna Kustom"],
  },
];
