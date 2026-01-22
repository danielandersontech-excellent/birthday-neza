'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/data/content';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: -2,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        <motion.div
          className="absolute top-20 left-8 text-3xl opacity-30"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          💕
        </motion.div>
        <motion.div
          className="absolute top-40 right-6 text-2xl opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-12 text-2xl opacity-25"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🌸
        </motion.div>
        <motion.div
          className="absolute bottom-48 right-10 text-3xl opacity-20"
          animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          💝
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center w-full max-w-sm"
      >
        {/* Date Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-sm font-medium text-[--color-text-secondary] border border-[--color-blush]">
            {heroContent.date}
          </span>
        </motion.div>

        {/* Polaroid Photo Frame */}
        <motion.div
          variants={imageVariants}
          className="relative mx-auto mb-8"
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="polaroid-frame inline-block">
            <div className="relative w-64 h-72 overflow-hidden rounded-sm">
              <Image
                src={heroContent.mainImage}
                alt={heroContent.mainImageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>
            {/* Polaroid Caption Area */}
            <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center justify-center">
              <span className="font-display italic text-sm text-[--color-text-secondary]">
                forever & always
              </span>
            </div>
          </div>
          
          {/* Decorative tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-[--color-champagne]/80 rotate-[-5deg] opacity-70"></div>
        </motion.div>

        {/* Greeting Text */}
        <motion.div variants={itemVariants} className="mb-3">
          <span className="text-sm uppercase tracking-[0.3em] text-[--color-rose-dark] font-medium">
            ✦ Special Day ✦
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl md:text-5xl font-semibold gradient-text mb-4 leading-tight"
        >
          {heroContent.greeting}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="font-accent text-2xl md:text-3xl text-[--color-text-primary] mb-6 italic"
        >
          {heroContent.name}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base text-[--color-text-secondary] max-w-xs mx-auto leading-relaxed"
        >
          {heroContent.tagline}
        </motion.p>

        {/* Decorative Divider */}
        <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[--color-rose]"></div>
          <span className="text-[--color-gold-dark] text-xl heart-beat">♥</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[--color-rose]"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2 text-[--color-text-muted]">
            <span className="text-xs tracking-wider uppercase"></span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
