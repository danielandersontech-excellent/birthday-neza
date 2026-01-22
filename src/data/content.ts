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
  tagline: "May your day be as beautiful as your smile",
  date: "January 22, 2026",
  mainImage: "/image/neza-8.jpg", // Foto Utama (Cover)
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
    mediaSrc: "/image/neza-2.jpg", // Foto
    mediaAlt: "Beautiful moment"
  },
  {
    id: 2,
    title: "Our Beautiful Journey",
    content: "Setiap langkah yang kita ambil bersama, setiap tawa yang kita bagikan, setiap air mata yang kita usap bersama - semuanya membentuk cerita cinta yang indah. Ini adalah chapter terbaikku.",
    mediaType: 'image',
    mediaSrc: "/image/neza-3.jpg", // Foto
    mediaAlt: "Couple memories"
  },
  {
    id: 3,
    title: "My Favorite Video of You",
    content: "Melihat senyum dan tawamu di video ini selalu membuat hariku lebih cerah. Kamu adalah definisi kebahagiaan bagiku.",
    mediaType: 'video', 
    mediaSrc: "/image/vid-neza.mp4", // VIDEO
    mediaAlt: "Special video memory"
  },
  {
    id: 4,
    title: "Dreams Together",
    content: "Di hari spesialmu ini, aku ingin berjanji untuk terus bermimpi bersamamu. Untuk membangun masa depan yang penuh cinta, tawa, dan kebahagiaan. Bersama, kita bisa melewati segalanya.",
    mediaType: 'image',
    mediaSrc: "/image/neza-4.jpg", // Foto
    mediaAlt: "Dreaming together"
  },
  {
    id: 5,
    title: "Forever Grateful",
    content: "Terima kasih telah memilihku. Terima kasih telah mencintaiku dengan segala kekuranganku. Terima kasih telah menjadi partnerku dalam petualangan hidup ini.",
    mediaType: 'image',
    mediaSrc: "/image/neza-5.jpg", // Foto
    mediaAlt: "Sweet memories"
  },
  {
    id: 6,
    title: "Happy Birthday, My Love",
    content: "Selamat ulang tahun, sayangku. Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, dan cinta untukmu. Aku akan selalu di sini, mencintaimu hari ini, besok, dan selamanya. 💕",
    mediaType: 'image',
    mediaSrc: "/image/neza-6.jpg", // Foto
    mediaAlt: "Celebration"
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
  { id: 8, src: "/image/neza-13.jpg", alt: "Memory 8", span: 'normal' },
  { id: 9, src: "/image/neza-9.jpg", alt: "Memory 9", span: 'tall' },
  { id: 10, src: "/image/neza-10.jpg", alt: "Memory 10", span: 'normal' },
  { id: 11, src: "/image/neza-11.jpg", alt: "Memory 11", span: 'wide' },
  { id: 14, src: "/image/neza-14.jpg", alt: "Memory 14", span: 'normal' },
  { id: 15, src: "/image/neza-15.jpg", alt: "Memory 15", span: 'wide' },
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