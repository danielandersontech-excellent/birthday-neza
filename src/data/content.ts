// ============================================
// BIRTHDAY WEBSITE CONTENT - EDIT THIS FILE
// ============================================

export interface WishSlide {
  id: number;
  title: string;
  content: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt?: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'normal';
}

// ============================================
// HERO SECTION
// ============================================
export const heroContent = {
  greeting: "Happy Birthday",
  name: "Haifa Neza Tama",
  tagline: "Hari ini dunia merayakan kehadiran seseorang yang istimewa",
  date: "22 Januari 2026",
  mainImage: "/image/neza-8.jpg",
  mainImageAlt: "Birthday Girl"
};

// ============================================
// OPENING INVITATION
// ============================================
export const openingContent = {
  subtitle: "You're Invited to Celebrate",
  title: "Neza's Special Day",
  buttonText: "Open Invitation ✨",
  loadingText: "Preparing something special..."
};

// ============================================
// WISHES SLIDER - MAIN FEATURE (10 SLIDES)
// ============================================
export const wishesSlides: WishSlide[] = [
  {
    id: 1,
    title: "Hey, Kamuuu 🌸",
    content: "Sebelum kamu scroll lebih jauh, aku mau kamu tahu satu hal: ini bukan sekadar website. Ini adalah cara aku merangkai semua hal yang mungkin susah kuucapkan secara langsung. Jadi, pelan-pelan aja bacanya ya? Anggap ini seperti surat yang dikemas berbeda.",
    mediaType: 'image',
    mediaSrc: "/image/neza-1.jpg",
    mediaAlt: "Opening"
  },
  {
    id: 2,
    title: "22 Januari",
    content: "Ada yang spesial dari tanggal ini. Bukan cuma karena ini hari ulang tahunmu, tapi karena di tanggal inilah dunia kedatangan seseorang yang—tanpa dia sadari—punya kemampuan untuk membuat hari-hari orang lain terasa lebih berwarna. Termasuk hariku.",
    mediaType: 'image',
    mediaSrc: "/image/neza-2.jpg",
    mediaAlt: "Grateful"
  },
  {
    id: 3,
    title: "Yang Jarang Orang Tahu",
    content: "Banyak orang mungkin cuma lihat sisi ceriamu. Tapi aku? Aku memperhatikan lebih dari itu. Aku lihat bagaimana kamu tetap tersenyum meski sedang lelah. Bagaimana kamu selalu mendahulukan orang lain. Dan itu... membuatku diam-diam mengagumimu lebih dalam dari yang kamu kira.",
    mediaType: 'image',
    mediaSrc: "/image/neza-3.jpg",
    mediaAlt: "Proud"
  },
  {
    id: 4,
    title: "A Little Throwback 🎬",
    content: "Kalau ditanya apa yang paling aku suka dari mengenalmu, jawabannya mungkin ada di video ini. Momen-momen kecil yang kelihatan biasa, tapi entah kenapa selalu berhasil bikin aku tersenyum sendiri kalau mengingatnya.",
    mediaType: 'video',
    mediaSrc: "/image/vid-neza.mp4",
    mediaAlt: "Video Memory"
  },
  {
    id: 5,
    title: "Untuk Kamu yang Sering Overthinking",
    content: "Aku tahu otakmu sering jadi musuh terberatmu sendiri. Suka mikirin hal-hal yang belum tentu terjadi, khawatir sama sesuatu yang belum pasti. Tapi coba sesekali kasih dirimu jeda. Napas dulu. Kamu sudah melakukan yang terbaik dengan apa yang kamu punya.",
    mediaType: 'image',
    mediaSrc: "/image/neza-4.jpg",
    mediaAlt: "Reassurance"
  },
  {
    id: 6,
    title: "Reminder Kecil",
    content: "Kamu tidak perlu jadi versi yang \"lebih baik\" untuk diapresiasi. Kamu tidak perlu mencapai ini-itu dulu untuk merasa layak. Hari ini, di umurmu yang baru, aku harap kamu mulai belajar untuk memeluk dirimu sendiri—dengan semua chaos dan keindahannya.",
    mediaType: 'image',
    mediaSrc: "/image/neza-5.jpg",
    mediaAlt: "Enough"
  },
  {
    id: 7,
    title: "Soal Mimpi-Mimpimu 🎓",
    content: "Beasiswa itu? Kamu akan mendapatkannya. Bukan karena aku sok tahu, tapi karena aku lihat sendiri bagaimana kamu berjuang. Orang yang berusaha sekeras kamu tidak mungkin pulang dengan tangan kosong. Tinggal tunggu waktunya.",
    mediaType: 'image',
    mediaSrc: "/image/neza-6.jpg",
    mediaAlt: "Scholarship"
  },
  {
    id: 8,
    title: "The Future Baker 🧁",
    content: "Suatu hari nanti, aku yakin akan ada toko kecil dengan aroma butter dan vanilla yang menguar dari dalamnya. Dan di balik counter-nya, ada kamu—dengan apron dan senyum lebar, menyapa setiap orang yang datang. Itu bukan mimpi kosong. Itu coming soon.",
    mediaType: 'image',
    mediaSrc: "/image/neza-7.jpg",
    mediaAlt: "Dreams"
  },
  {
    id: 9,
    title: "Kalau Suatu Hari Kamu Butuh Seseorang",
    content: "Aku nggak bisa janji banyak hal. Tapi satu yang pasti: aku akan selalu jadi tempat yang aman buatmu. Entah untuk cerita, untuk diam bareng, atau sekadar untuk tahu bahwa ada orang yang genuinely peduli. Tanpa syarat. Tanpa ekspektasi.",
    mediaType: 'image',
    mediaSrc: "/image/neza-9.jpg",
    mediaAlt: "Support"
  },
  {
    id: 10,
    title: "Happy Birthday, Neza 🎂",
    content: "Di umurmu yang baru ini, aku doakan kamu menemukan lebih banyak alasan untuk bahagia. Lebih banyak keberanian untuk bermimpi. Dan lebih banyak momen di mana kamu bisa bilang ke diri sendiri, \"Aku bangga jadi aku.\" Selamat ulang tahun. Terima kasih sudah hadir di dunia ini. 💕",
    mediaType: 'image',
    mediaSrc: "/image/neza-10.jpg",
    mediaAlt: "Closing"
  }
];

// ============================================
// MEMORIES GALLERY (15 PHOTOS)
// ============================================
export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/image/neza-1.jpg", alt: "Memory 1", span: 'tall' },
  { id: 2, src: "/image/neza-2.jpg", alt: "Memory 2", span: 'normal' },
  { id: 3, src: "/image/neza-3.jpg", alt: "Memory 3", span: 'normal' },
  { id: 4, src: "/image/neza-4.jpg", alt: "Memory 4", span: 'wide' },
  { id: 5, src: "/image/neza-5.jpg", alt: "Memory 5", span: 'tall' },
  { id: 6, src: "/image/neza-6.jpg", alt: "Memory 6", span: 'normal' },
  { id: 7, src: "/image/neza-7.jpg", alt: "Memory 7", span: 'wide' },
  { id: 9, src: "/image/neza-9.jpg", alt: "Memory 9", span: 'tall' },
  { id: 10, src: "/image/neza-10.jpg", alt: "Memory 10", span: 'normal' },
  { id: 11, src: "/image/neza-11.jpg", alt: "Memory 11", span: 'normal' },
  { id: 12, src: "/image/neza-12.jpg", alt: "Memory 12", span: 'normal' },
  { id: 13, src: "/image/neza-13.jpg", alt: "Memory 13", span: 'tall' },
  { id: 14, src: "/image/neza-14.jpg", alt: "Memory 14", span: 'tall' },
  { id: 15, src: "/image/neza-15.jpg", alt: "Memory 15", span: 'wide' },
];

// ============================================
// MAKE A WISH SECTION
// ============================================
export const wishSectionContent = {
  title: "Make a Wish",
  subtitle: "Pejamkan mata, tarik napas, bisikkan harapanmu...",
  blowButtonText: "Tiup Lilin ✨",
  afterWishTitle: "Happy Birthday, Neza! 🎂",
  afterWishMessage: "Apapun yang baru saja kamu harapkan, aku ikut mengaminkannya dari sini. Semoga tahun ini menjadi babak terbaik dalam hidupmu. 💕",
  candleCount: 5
};

// ============================================
// FOOTER / CLOSING
// ============================================
export const closingContent = {
  signature: "From someone who cares,",
  senderName: "Daniel",
  year: "2026"
};

// ============================================
// MUSIC
// ============================================
export const musicConfig = {
  src: "/music/birthday-song.mp3",
  autoPlay: true,
  loop: true
};