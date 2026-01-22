'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { openingContent } from '@/data/content';

interface OpeningProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Opening({ isOpen, onOpen }: OpeningProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="page-overlay"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating decorative elements */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              >
                {['💕', '✨', '🌸', '💝', '🌷', '💐'][i % 6]}
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 text-center px-8"
          >
            {/* Decorative Top */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <span className="text-5xl">💌</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm uppercase tracking-[0.25em] text-[--color-rose-dark] font-medium mb-4"
            >
              {openingContent.subtitle}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-display text-4xl md:text-5xl font-semibold gradient-text mb-8 leading-tight"
            >
              {openingContent.title}
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="w-32 h-px mx-auto mb-10 bg-gradient-to-r from-transparent via-[--color-rose] to-transparent"
            />

            {/* Open Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpen}
              className="glow-button text-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
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
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                  <path d="M13 13l6 6" />
                </svg>
                {openingContent.buttonText}
              </span>
            </motion.button>

            {/* Bottom Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-xs text-[--color-text-muted] mt-8"
            >
              Tap to reveal your surprise ✨
            </motion.p>
          </motion.div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8">
            <motion.div
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 0.3, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-16 border-l-2 border-t-2 border-[--color-rose]"
            />
          </div>
          <div className="absolute bottom-8 right-8">
            <motion.div
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 0.3, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-16 border-r-2 border-b-2 border-[--color-rose]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
