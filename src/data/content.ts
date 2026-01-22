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
  name: "Haifa Neza Tama", // Nama diperbarui
  tagline: "May your day be as beautiful as your smile",
  date: "January 22, 2026",
  mainImage: "/image/neza-1.jpg", // Foto Utama (File Lokal)
  mainImageAlt: "Birthday Girl"
};

// ============================================
// OPENING INVITATION
// ============================================
export const openingContent = {
  subtitle: "You're Invited to Celebrate",
  title: "Neza's Special Day",
  buttonText: "Open Invitation",
  loadingText: "Preparing something special..."
};

// ============================================
// WISHES SLIDER - MAIN FEATURE
// ============================================
export const wishesSlides: WishSlide[] = [
  {
    id: 1,
    title: "To The One I Love",
    content: "Dari pertama kali kita bertemu, aku tahu hidupku akan berubah selamanya. Setiap momen bersamamu adalah hadiah yang tak ternilai. Terima kasih telah menjadi cahaya dalam hidupku.",
    mediaType: 'image',
    mediaSrc: "/image/neza-1.jpg", // Foto Lokal 1
    mediaAlt: "Beautiful moment"
  },
  {
    id: 2,
    title: "Our Beautiful Journey",
    content: "Setiap langkah yang kita ambil bersama, setiap tawa yang kita bagikan, setiap air mata yang kita usap bersama - semuanya membentuk cerita cinta yang indah. Ini adalah chapter terbaikku.",
    mediaType: 'image',
    mediaSrc: "/image/neza-2.jpg", // Foto Lokal 2
    mediaAlt: "Couple memories"
  },
  {
    id: 3,
    title: "My Favorite Video of You",
    content: "Melihat senyum dan tawamu di video ini selalu membuat hariku lebih cerah. Kamu adalah definisi kebahagiaan bagiku.",
    mediaType: 'video', 
    mediaSrc: "/image/vid-neza.mp4", // VIDEO LOKAL (Pastikan file ada di public/video/)
    mediaAlt: "Special video memory"
  },
  {
    id: 4,
    title: "Dreams Together",
    content: "Di hari spesialmu ini, aku ingin berjanji untuk terus bermimpi bersamamu. Untuk membangun masa depan yang penuh cinta, tawa, dan kebahagiaan. Bersama, kita bisa melewati segalanya.",
    mediaType: 'image',
    mediaSrc: "/image/neza-3.jpg", // Foto Lokal 3
    mediaAlt: "Dreaming together"
  },
  {
    id: 5,
    title: "Forever Grateful",
    content: "Terima kasih telah memilihku. Terima kasih telah mencintaiku dengan segala kekuranganku. Terima kasih telah menjadi partnerku dalam petualangan hidup ini.",
    mediaType: 'image',
    mediaSrc: "/image/neza-4.jpg", // Foto Lokal 4
    mediaAlt: "Sweet memories"
  },
  {
    id: 6,
    title: "Happy Birthday, My Love",
    content: "Selamat ulang tahun, sayangku. Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, dan cinta untukmu. Aku akan selalu di sini, mencintaimu hari ini, besok, dan selamanya. 💕",
    mediaType: 'image',
    // Menggunakan foto hero lagi untuk penutup, atau bisa ganti link Unsplash
    mediaSrc: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop", 
    mediaAlt: "Celebration"
  }
];

// ============================================
// MEMORIES GALLERY
// Saya campur Foto Lokal & Unsplash agar Grid terlihat penuh & bagus
// ============================================
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/image/neza-1.jpg", // Foto Lokal
    alt: "Memory 1",
    span: 'tall'
  },
  {
    id: 2,
    src: "/image/neza-2.jpg", // Foto Lokal
    alt: "Memory 2",
    span: 'normal'
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop&q=80", // Unsplash Filler
    alt: "Aesthetic Filler",
    span: 'normal'
  },
  {
    id: 4,
    src: "/image/neza-3.jpg", // Foto Lokal
    alt: "Memory 3",
    span: 'wide'
  },
  {
    id: 5,
    src: "/image/neza-4.jpg", // Foto Lokal
    alt: "Memory 4",
    span: 'tall'
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&q=80", // Unsplash Filler
    alt: "Party Vibes",
    span: 'normal'
  },
];

// ============================================
// MAKE A WISH SECTION
// ============================================
export const wishSectionContent = {
  title: "Make a Wish",
  subtitle: "Pejamkan matamu, dan ucapkan harapan dalam hati...",
  blowButtonText: "Tiup Lilin ✨",
  afterWishTitle: "Happy Birthday Neza!",
  afterWishMessage: "Semoga semua impianmu menjadi kenyataan. Aku akan selalu ada untuk mendukungmu. Dengan cinta yang tak terhingga... 💕",
  candleCount: 5
};

// ============================================
// FOOTER / CLOSING
// ============================================
export const closingContent = {
  signature: "With all my love,",
  senderName: "Daniel", // Nama Kamu
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