export interface EyewearProduct {
  id: string;
  name: string;
  category: "optical" | "sunglasses" | "contact" | "kids";
  series: string;
  price: string;
  material: string;
  colorway: string[];
  description: string;
  dimensions: string;
  tag?: string;
  visualBg?: string;
  isNewArrival?: boolean;
}

export const PRODUCTS_DATA: EyewearProduct[] = [
  {
    id: "aura-titanium-01",
    name: "Aura Panthos 01",
    category: "optical",
    series: "Series Japanese Beta-Titanium",
    price: "Rp 3.850.000",
    material: "Beta-Titanium Murni & Asetat Mazzucchelli",
    colorway: ["Champagne Gold", "Raw Silver", "Matte Obsidian", "Rose Gold"],
    description:
      "Bingkai kacamata panthos arsitektural berbobot di bawah 12 gram dengan permukaan titanium yang dipoles secara presisi.",
    dimensions: "50-20-145 mm",
    tag: "Koleksi Utama Titanium",
    visualBg: "from-amber-950/30 to-black",
    isNewArrival: true,
  },
  {
    id: "solaris-monolith-02",
    name: "Solaris Aviator 02",
    category: "sunglasses",
    series: "Koleksi Sun Monolith",
    price: "Rp 4.250.000",
    material: "Titanium Kelas Kedokteran & Lensa ZEISS Tinted",
    colorway: ["Deep Obsidian", "Titanium Raw", "Bronze Warm"],
    description:
      "Kacamata hitam aviator geometris modern yang dilengkapi lensa polarized ZEISS perlindungan UV400 penuh.",
    dimensions: "54-18-148 mm",
    tag: "Sun Series Polished",
    visualBg: "from-zinc-950/30 to-black",
    isNewArrival: true,
  },
  {
    id: "lumina-minimalist-03",
    name: "Lumina Round 03",
    category: "optical",
    series: "Signature Minimalist",
    price: "Rp 3.450.000",
    material: "Ultra-Light Beta-Titanium Wire",
    colorway: ["Raw Silver", "Champagne Gold", "Gunmetal Matte"],
    description:
      "Siluet lingkaran bundar minimalis dengan engsel titanium tanpa sekrup dan bantalan hidung silikon transparan.",
    dimensions: "48-21-142 mm",
    tag: "Minimalist Wire Frame",
    visualBg: "from-teal-950/30 to-black",
  },
  {
    id: "zeiss-smartlife-lens",
    name: "ZEISS SmartLife Digital",
    category: "contact",
    series: "Lensa Digital Jerman",
    price: "Mulai Rp 2.200.000",
    material: "Polimer Refraksi Tinggi & DuraVision Platinum",
    colorway: ["Optic Clear", "BlueGuard Armor", "PhotoFusion X"],
    description:
      "Lensa presisi surfacing 3D Jerman yang disesuaikan secara khusus untuk gaya hidup digital dan anatomi mata Anda.",
    dimensions: "Ukuran Kustom Wavetop",
    tag: "Digital Refraction Optic",
    visualBg: "from-blue-950/30 to-black",
  },
  {
    id: "ezia-junior-05",
    name: "Ezia Junior Apex",
    category: "kids",
    series: "Koleksi Anak Presisi",
    price: "Rp 2.100.000",
    material: "Asetat Bio Fleksibel & Engsel Pegas",
    colorway: ["Ocean Blue", "Soft Amber", "Matte Charcoal"],
    description:
      "Bingkai kacamata anak tahan benturan yang dirancang ergonomis untuk pertumbuhan penglihatan anak.",
    dimensions: "45-16-130 mm",
    tag: "Junior Ergonomic",
    visualBg: "from-slate-950/30 to-black",
  },
];
