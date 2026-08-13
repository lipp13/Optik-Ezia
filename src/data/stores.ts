export interface StoreBranch {
  id: string;
  name: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  services?: string[];
  isFlagship?: boolean;
  googleMapsUrl: string;
}

export const STORES_DATA: StoreBranch[] = [
  {
    id: "plaza-senayan-jakarta",
    name: "Optik Ezia — Plaza Senayan",
    city: "Jakarta",
    district: "Jakarta Selatan",
    address: "Plaza Senayan Lantai 2 Unit 240, Jl. Asia Afrika No. 8, Gelora, Jakarta Selatan 10270",
    phone: "+62 21 572 5101",
    whatsapp: "+62 811 9882 101",
    openingHours: "Senin – Minggu: 10:00 – 22:00 WIB",
    services: ["Refraksi 3D Wavefront", "Fitting Titanium Kustom", "Konsultasi Lensa ZEISS"],
    isFlagship: true,
    googleMapsUrl: "https://maps.google.com/?q=Plaza+Senayan+Jakarta",
  },
  {
    id: "pik-avenue-jakarta",
    name: "Optik Ezia — PIK Avenue",
    city: "Jakarta",
    district: "Jakarta Utara",
    address: "PIK Avenue Ground Floor Unit GF-12, Pantai Indah Kapuk, Jakarta Utara 14470",
    phone: "+62 21 2257 0899",
    whatsapp: "+62 811 9882 102",
    openingHours: "Senin – Minggu: 10:00 – 22:00 WIB",
    services: ["Pemeriksaan Visus 3D", "Lensa BlueGuard", "Koleksi Sun Monolith"],
    isFlagship: true,
    googleMapsUrl: "https://maps.google.com/?q=PIK+Avenue+Jakarta",
  },
  {
    id: "pakuwon-mall-surabaya",
    name: "Optik Ezia — Pakuwon Mall",
    city: "Surabaya",
    district: "Surabaya Barat",
    address: "Pakuwon Mall Lantai 1 Unit L1-35, Jl. Puncak Indah Lontar No. 2, Surabaya 60123",
    phone: "+62 31 739 0211",
    whatsapp: "+62 811 9882 103",
    openingHours: "Senin – Minggu: 10:00 – 21:30 WIB",
    services: ["Pemeriksaan Visus 3D", "Fitting Titanium", "VIP Concierge"],
    isFlagship: true,
    googleMapsUrl: "https://maps.google.com/?q=Pakuwon+Mall+Surabaya",
  },
  {
    id: "dago-sanctuary-bandung",
    name: "Optik Ezia — Boutique Dago",
    city: "Bandung",
    district: "Bandung Coblong",
    address: "Jl. Ir. H. Juanda No. 118 (Dago), Lebakgede, Coblong, Kota Bandung 40132",
    phone: "+62 22 250 8891",
    whatsapp: "+62 811 9882 104",
    openingHours: "Senin – Minggu: 09:00 – 21:00 WIB",
    services: ["Pemeriksaan Visus 3D", "Penyetelan Bingkai Kustom"],
    googleMapsUrl: "https://maps.google.com/?q=Dago+Bandung",
  },
  {
    id: "seminyak-bali",
    name: "Optik Ezia — Seminyak Sanctuary",
    city: "Bali",
    district: "Seminyak Badung",
    address: "Jl. Kayu Aya No. 48, Seminyak, Kuta Utara, Kabupaten Badung, Bali 80361",
    phone: "+62 361 738 902",
    whatsapp: "+62 811 9882 105",
    openingHours: "Senin – Minggu: 10:00 – 22:00 WITA",
    services: ["Sunglasses Polarized", "VIP Express Service"],
    googleMapsUrl: "https://maps.google.com/?q=Seminyak+Bali",
  },
  {
    id: "ambarrukmo-yogyakarta",
    name: "Optik Ezia — Plaza Ambarrukmo",
    city: "Yogyakarta",
    district: "Sleman",
    address: "Plaza Ambarrukmo Lantai 1 Unit 82, Jl. Laksda Adisucipto No. 80, Yogyakarta 55281",
    phone: "+62 274 433 1102",
    whatsapp: "+62 811 9882 106",
    openingHours: "Senin – Minggu: 10:00 – 21:30 WIB",
    services: ["Pemeriksaan Visus 3D", "Konsultasi Lensa ZEISS"],
    googleMapsUrl: "https://maps.google.com/?q=Plaza+Ambarrukmo+Yogyakarta",
  },
];
