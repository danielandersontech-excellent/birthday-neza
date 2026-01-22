'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/data/content';
import Image from 'next/image';

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-[--color-rose-dark] font-medium">
          ✦ Our Memories ✦
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold gradient-text mt-3">
          Moments We Cherish
        </h2>
        <p className="text-[--color-text-secondary] mt-3 text-sm max-w-xs mx-auto">
          Every picture holds a story worth remembering
        </p>
      </motion.div>

      {/* Masonry Gallery */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="masonry-grid"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className={`relative overflow-hidden rounded-xl group ${
              image.span === 'tall'
                ? 'masonry-item-tall'
                : image.span === 'wide'
                ? 'masonry-item-wide'
                : ''
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`relative w-full ${
                image.span === 'tall'
                  ? 'h-72'
                  : image.span === 'wide'
                  ? 'h-40'
                  : 'h-36'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 250px"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Heart Icon on hover */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-[--color-rose-dark] text-sm">♥</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-[--color-text-muted] italic">
          ...and many more beautiful moments to come 💕
        </p>
      </motion.div>
    </section>
  );
}
