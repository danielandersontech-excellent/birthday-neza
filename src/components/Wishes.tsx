'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wishesSlides } from '@/data/content';
import Image from 'next/image';

export default function Wishes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const totalSlides = wishesSlides.length;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = totalSlides - 1;
      if (next >= totalSlides) next = 0;
      return next;
    });
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
    setIsDragging(false);
  };

  const currentWish = wishesSlides[currentSlide];

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
          ✦ The Journey ✦
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold gradient-text mt-3">
          Words From My Heart
        </h2>
        <p className="text-[--color-text-secondary] mt-3 text-sm">
          Geser atau tap untuk membaca setiap ucapan
        </p>
      </motion.div>

      {/* Slider Container */}
      <div className="relative" ref={constraintsRef}>
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {wishesSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[--color-rose-dark] w-6'
                  : 'bg-[--color-blush] hover:bg-[--color-rose]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slides Wrapper */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              className="romantic-card overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* Media Section */}
              <div className="relative w-full aspect-video overflow-hidden">
                {currentWish.mediaType === 'video' ? (
                  <video
                    src={currentWish.mediaSrc}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={currentWish.mediaSrc}
                    alt={currentWish.mediaAlt || ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Slide Number */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-[--color-text-primary]">
                    {currentSlide + 1} / {totalSlides}
                  </span>
                </div>

                {/* Media Type Badge */}
                {currentWish.mediaType === 'video' && (
                  <div className="absolute top-4 left-4 bg-[--color-rose-dark]/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className="text-xs font-medium text-white">Video</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="font-display text-2xl font-semibold text-[--color-text-primary] mb-4"
                >
                  {currentWish.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-[--color-text-secondary] leading-relaxed text-base"
                >
                  {currentWish.content}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-6 flex items-center justify-center"
                >
                  <div className="w-8 h-px bg-[--color-rose]"></div>
                  <span className="mx-3 text-[--color-rose]">♥</span>
                  <div className="w-8 h-px bg-[--color-rose]"></div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-6 px-2">
          <button
            onClick={() => paginate(-1)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-[--color-blush] text-[--color-text-secondary] hover:bg-white hover:text-[--color-rose-dark] transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Prev</span>
          </button>

          <button
            onClick={() => paginate(1)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[--color-rose-dark] rounded-full text-white hover:bg-[--color-rose] transition-all duration-300 group shadow-lg shadow-rose-200"
            aria-label="Next slide"
          >
            <span className="text-sm font-medium">Next</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Swipe Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center text-xs text-[--color-text-muted] mt-4"
        >
          👆 Swipe left or right to navigate
        </motion.p>
      </div>
    </section>
  );
}
