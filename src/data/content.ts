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
  name: "My Dearest Love",
  tagline: "May your day be as beautiful as your smile",
  date: "January 22, 2026",
  mainImage: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=800&fit=crop&q=80",
  mainImageAlt: "Birthday celebration"
};

// ============================================
// OPENING INVITATION
// ============================================
export const openingContent = {
  subtitle: "You're Invited to Celebrate",
  title: "A Special Day",
  buttonText: "Open Invitation",
  loadingText: "Preparing something special..."
};

// ============================================
// WISHES SLIDER - MAIN FEATURE
// Edit each slide with your personal messages
// mediaType: 'image' or 'video'
// ============================================
export const wishesSlides: WishSlide[] = [
  {
    id: 1,
    title: "To The One I Love",
    content: "Dari pertama kali kita bertemu, aku tahu hidupku akan berubah selamanya. Setiap momen bersamamu adalah hadiah yang tak ternilai. Terima kasih telah menjadi cahaya dalam hidupku.",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop&q=80",
    mediaAlt: "Romantic couple moment"
  },
  {
    id: 2,
    title: "Our Beautiful Journey",
    content: "Setiap langkah yang kita ambil bersama, setiap tawa yang kita bagikan, setiap air mata yang kita usap bersama - semuanya membentuk cerita cinta yang indah. Ini adalah chapter terbaikku.",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop&q=80",
    mediaAlt: "Couple walking together"
  },
  {
    id: 3,
    title: "My Favorite Person",
    content: "Kamu adalah orang pertama yang ingin kuceritakan saat ada berita baik, dan orang pertama yang ingin kutemui saat sedih. Kamu adalah rumahku, di mana pun kamu berada.",
    mediaType: 'video',
    mediaSrc: "https://videos.pexels.com/video-files/3015482/3015482-hd_1920_1080_24fps.mp4",
    mediaAlt: "Happy moments video"
  },
  {
    id: 4,
    title: "Dreams Together",
    content: "Di hari spesialmu ini, aku ingin berjanji untuk terus bermimpi bersamamu. Untuk membangun masa depan yang penuh cinta, tawa, dan kebahagiaan. Bersama, kita bisa melewati segalanya.",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop&q=80",
    mediaAlt: "Couple dreaming together"
  },
  {
    id: 5,
    title: "Forever Grateful",
    content: "Terima kasih telah memilihku. Terima kasih telah mencintaiku dengan segala kekuranganku. Terima kasih telah menjadi partnerku dalam petualangan hidup ini. Aku mencintaimu, selamanya.",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&h=400&fit=crop&q=80",
    mediaAlt: "Hearts and love"
  },
  {
    id: 6,
    title: "Happy Birthday, My Love",
    content: "Selamat ulang tahun, sayangku. Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, dan cinta untukmu. Aku akan selalu di sini, mencintaimu hari ini, besok, dan selamanya. 💕",
    mediaType: 'image',
    mediaSrc: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&q=80",
    mediaAlt: "Birthday celebration"
  }
];

// ============================================
// MEMORIES GALLERY
// Replace with your actual photos
// span options: 'tall', 'wide', 'normal'
// ============================================
export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop&q=80",
    alt: "Memory 1",
    span: 'tall'
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=400&h=300&fit=crop&q=80",
    alt: "Memory 2",
    span: 'normal'
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop&q=80",
    alt: "Memory 3",
    span: 'normal'
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=300&fit=crop&q=80",
    alt: "Memory 4",
    span: 'wide'
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=500&fit=crop&q=80",
    alt: "Memory 5",
    span: 'tall'
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&q=80",
    alt: "Memory 6",
    span: 'normal'
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=300&fit=crop&q=80",
    alt: "Memory 7",
    span: 'normal'
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=300&fit=crop&q=80",
    alt: "Memory 8",
    span: 'wide'
  }
];

// ============================================
// MAKE A WISH SECTION
// ============================================
export const wishSectionContent = {
  title: "Make a Wish",
  subtitle: "Close your eyes, take a breath...",
  blowButtonText: "Tiup Lilin ✨",
  afterWishTitle: "Happy Birthday!",
  afterWishMessage: "Semoga semua impianmu menjadi kenyataan. Aku akan selalu ada untuk mendukungmu. Dengan cinta yang tak terhingga... 💕",
  candleCount: 5
};

// ============================================
// FOOTER / CLOSING
// ============================================
export const closingContent = {
  signature: "With all my love,",
  senderName: "Your Forever Person",
  year: "2026"
};

// ============================================
// MUSIC (Background Audio)
// Replace with your preferred romantic song
// ============================================
export const musicConfig = {
  // Use a royalty-free romantic music or your own
  src: "/music/birthday-song.mp3",
  autoPlay: true,
  loop: true
};
