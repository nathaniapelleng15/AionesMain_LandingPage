export const SERVICE_URLS = {
  care: "https://aionescare.aiones.com",
  content: "https://aionescontent.aiones.com",
  docu: "https://aionesdocu.aiones.com",
  board: "https://aionesboard.aiones.com",
} as const;

export interface ServiceItem {
  id: "care" | "content" | "docu" | "board";
  num: string;
  categoryLabel: string;
  brandPrefix: string;
  brandName: string;
  url: string;
  navDescription: string;
  description: string;
  features: string[];
  targetAudience: string;
  buttonText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "care",
    num: "01",
    categoryLabel: "01 / LAYANAN PELANGGAN",
    brandPrefix: "Aiones",
    brandName: "Care",
    url: SERVICE_URLS.care,
    navDescription: "Customer service AI multi-kanal",
    description:
      "Customer service multi-platform berbasis AI dan RAG. Menjawab pelanggan dari dokumen dan basis pengetahuan resmi perusahaan Anda, di semua kanal sekaligus.",
    features: [
      "Satu kotak masuk untuk semua kanal pelanggan",
      "Jawaban berdasar sumber resmi (RAG), bukan tebakan",
      "Alih ke petugas saat percakapan butuh manusia",
    ],
    targetAudience: "Tim Layanan Pelanggan",
    buttonText: "Kunjungi AionesCare",
  },
  {
    id: "content",
    num: "02",
    categoryLabel: "02 / KONTEN KREATIF",
    brandPrefix: "Aiones",
    brandName: "Content",
    url: SERVICE_URLS.content,
    navDescription: "Agen konten kreatif",
    description:
      "Agen AI untuk konten kreatif. Dari jadwal unggahan sampai naskah dan visual, tim humas dan pemasaran bekerja dari satu tempat.",
    features: [
      "Penjadwalan konten dan copywriting",
      "Pembuatan gambar dan draf skenario video",
      "Analisis performa konten",
    ],
    targetAudience: "Humas & Pemasaran",
    buttonText: "Kunjungi AionesContent",
  },
  {
    id: "docu",
    num: "03",
    categoryLabel: "03 / PENGOLAHAN DOKUMEN",
    brandPrefix: "Aiones",
    brandName: "Docu",
    url: SERVICE_URLS.docu,
    navDescription: "Pengolahan dokumen cerdas",
    description:
      "Memproses dokumen menjadi dokumen. Ubah arsip, notulen, dan data mentah menjadi laporan, slide presentasi, atau jawaban lewat chat.",
    features: [
      "Susun draf laporan dari banyak dokumen sumber",
      "Ubah laporan menjadi slide siap presentasi",
      "Tanya isi dokumen lewat chat",
    ],
    targetAudience: "Administrasi & Sekretariat",
    buttonText: "Kunjungi AionesDocu",
  },
  {
    id: "board",
    num: "04",
    categoryLabel: "04 / DASHBOARD DIREKSI",
    brandPrefix: "Aiones",
    brandName: "Board",
    url: SERVICE_URLS.board,
    navDescription: "Dashboard untuk direksi",
    description:
      "Mengubah dokumen dan data laporan menjadi dashboard untuk Board of Directors. Direksi melihat kondisi usaha tanpa menunggu rekap manual.",
    features: [
      "Tarik angka langsung dari dokumen laporan",
      "Indikator kinerja dalam satu layar",
      "Ringkasan naratif untuk rapat direksi",
    ],
    targetAudience: "Direksi (BOD)",
    buttonText: "Kunjungi AionesBoard",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "1",
    title: "Hubungkan sumber",
    description:
      "Unggah dokumen resmi, SOP, dan laporan; sambungkan kanal pelanggan dan akun media sosial.",
  },
  {
    number: "2",
    title: "AI bekerja dari sumber itu",
    description:
      "Model AI dengan RAG menjawab, menulis, dan merangkum berdasarkan data Anda sendiri.",
  },
  {
    number: "3",
    title: "Hasil siap pakai",
    description:
      "Pelanggan terlayani, konten terjadwal, laporan tersusun, dan direksi melihat ringkasannya di dashboard.",
  },
];

export const SECURITY_ITEMS = [
  {
    title: "Akses per peran",
    description: "Atur siapa yang dapat membuka dokumen dan dashboard tertentu.",
    icon: "ShieldCheck",
  },
  {
    title: "Jawaban bersumber",
    description: "Setiap jawaban AI dapat ditelusuri ke dokumen asalnya.",
    icon: "FileSearch",
  },
  {
    title: "Jejak aktivitas",
    description: "Riwayat penggunaan tercatat untuk kebutuhan audit internal.",
    icon: "History",
  },
  {
    title: "Opsi penempatan",
    description: "[DETAIL HOSTING: cloud / on-premise — konfirmasi tim teknis]",
    icon: "Server",
  },
];

export const CONTACT_INFO = {
  email: "[EMAIL KONTAK]",
  phone: "[NOMOR TELEPON]",
  waUrl: "#",
  address: "[ALAMAT KANTOR]",
  hours: "[JAM OPERASIONAL]",
};

export const PARTNERS_PLACEHOLDERS = [
  "[LOGO MITRA 1]",
  "[LOGO MITRA 2]",
  "[LOGO MITRA 3]",
  "[LOGO MITRA 4]",
];
