'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '@/data/content'; // Saya sesuaikan import data agar tidak error

// --- PERBAIKAN: Menggunakan 'any' untuk menghindari error build TypeScript ---
// Library canvas-confetti kadang bermasalah dengan tipe data strict saat dynamic import
let confettiLib: any = null;

export default function MakeWish() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  // Load confetti library on client side
  useEffect(() => {
    import('canvas-confetti').then((module) => {
      // PERBAIKAN: Handle jika module.default ada atau langsung module
      confettiLib = module.default || module;
    });
  }, []);

  const triggerConfetti = useCallback(() => {
    if (!confettiLib) return;

    // Create a confetti burst
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Confetti from left
      confettiLib({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#fda4af', '#fde047', '#fb7185', '#fecdd3', '#facc15'],
      });

      // Confetti from right
      confettiLib({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#fda4af', '#fde047', '#fb7185', '#fecdd3', '#facc15'],
      });
    }, 250);

    // Heart shaped confetti
    confettiLib({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      shapes: ['circle'], // Ubah ke circle jika shape heart error di beberapa browser
      colors: ['#fda4af', '#fb7185', '#f43f5e'],
      scalar: 1.2,
    });
  }, []);

  const handleBlowCandles = () => {
    if (!candlesLit) return;

    setIsBlowing(true);

    // Simulate blowing animation
    setTimeout(() => {
      setCandlesLit(false);
      setIsBlowing(false);

      // Trigger confetti
      triggerConfetti();

      // Show message after a short delay
      setTimeout(() => {
        setShowMessage(true);
      }, 800);
    }, 1000);
  };

  const Candle = ({ index, delay = 0 }: { index: number; delay?: number }) => (
    <div className="relative flex flex-col items-center">
      {/* Flame */}
      <AnimatePresence>
        {candlesLit && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className="relative mb-0.5"
          >
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-yellow-400/30 rounded-full blur-md flame-glow" />
            {/* Inner flame */}
            <div className="candle-flame relative">
              <svg width="16" height="24" viewBox="0 0 16 24">
                <defs>
                  <linearGradient id={`flameGradient-${index}`} x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="50%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                <ellipse
                  cx="8"
                  cy="16"
                  rx="6"
                  ry="8"
                  fill={`url(#flameGradient-${index})`}
                />
                <ellipse cx="8" cy="14" rx="3" ry="5" fill="#fef3c7" opacity="0.8" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Candle body */}
      <div className="w-3 h-12 bg-gradient-to-b from-rose-200 to-rose-300 rounded-t-sm relative overflow-hidden">
        {/* Drip effect */}
        <div className="absolute -top-1 left-0.5 w-2 h-3 bg-white/50 rounded-full" />
        <div className="absolute top-4 right-0 w-1.5 h-2 bg-white/30 rounded-full" />
      </div>
    </div>
  );

  return (
    <section className="py-16 px-6 relative min-h-[600px] flex flex-col items-center justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-sm uppercase tracking-[0.3em] text-rose-500 font-medium">
          ✦ Special Moment ✦
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold gradient-text mt-3">
          Make a Wish
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          Pejamkan mata dan ucapkan harapanmu
        </p>
      </motion.div>

      {/* Cake Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex flex-col items-center"
      >
        {/* Cake Illustration */}
        <div className="relative mb-8">
          {/* Plate/Base glow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-rose-200/20 rounded-full blur-xl" />

          {/* Candles */}
          <div className="flex justify-center gap-4 mb-2 relative z-10">
            {/* Kita buat 3 lilin default */}
            {[...Array(3)].map((_, i) => (
              <Candle key={i} index={i} delay={i} />
            ))}
          </div>

          {/* Cake SVG */}
          <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-0">
            {/* Plate */}
            <ellipse cx="100" cy="135" rx="95" ry="8" fill="#f5f5f4" />
            <ellipse cx="100" cy="133" rx="90" ry="6" fill="#e7e5e4" />

            {/* Bottom layer */}
            <rect x="25" y="85" width="150" height="45" rx="8" fill="#fecdd3" />
            <rect x="25" y="85" width="150" height="8" rx="4" fill="#fda4af" />
            {/* Frosting drips */}
            <ellipse cx="45" cy="90" rx="8" ry="12" fill="#fda4af" />
            <ellipse cx="75" cy="92" rx="6" ry="10" fill="#fda4af" />
            <ellipse cx="125" cy="91" rx="7" ry="11" fill="#fda4af" />
            <ellipse cx="155" cy="90" rx="8" ry="12" fill="#fda4af" />

            {/* Middle layer */}
            <rect x="35" y="50" width="130" height="40" rx="6" fill="#fef3c7" />
            <rect x="35" y="50" width="130" height="8" rx="3" fill="#fde68a" />
            {/* Frosting drips */}
            <ellipse cx="55" cy="55" rx="6" ry="10" fill="#fde68a" />
            <ellipse cx="100" cy="57" rx="5" ry="8" fill="#fde68a" />
            <ellipse cx="145" cy="55" rx="6" ry="10" fill="#fde68a" />

            {/* Top layer */}
            <rect x="50" y="20" width="100" height="35" rx="5" fill="#fff1f2" />
            <rect x="50" y="20" width="100" height="6" rx="3" fill="#ffe4e6" />
            {/* Frosting drips */}
            <ellipse cx="70" cy="24" rx="5" ry="8" fill="#ffe4e6" />
            <ellipse cx="100" cy="26" rx="4" ry="7" fill="#ffe4e6" />
            <ellipse cx="130" cy="24" rx="5" ry="8" fill="#ffe4e6" />

            {/* Decorations */}
            <circle cx="60" cy="100" r="4" fill="#fde047" />
            <circle cx="100" cy="105" r="4" fill="#fde047" />
            <circle cx="140" cy="100" r="4" fill="#fde047" />
            <circle cx="80" cy="65" r="3" fill="#fda4af" />
            <circle cx="120" cy="65" r="3" fill="#fda4af" />
          </svg>

          {/* Sparkle effects when candles are lit */}
          {candlesLit && (
            <>
              <motion.div
                className="absolute top-2 left-10 text-lg"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute top-0 right-8 text-lg"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute top-6 right-20 text-sm"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              >
                ✨
              </motion.div>
            </>
          )}
        </div>

        {/* Blow Button */}
        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.button
              key="blow-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBlowCandles}
              disabled={!candlesLit || isBlowing}
              className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${
                !candlesLit || isBlowing 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-rose-400 to-rose-500 text-white hover:shadow-rose-300/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {isBlowing ? (
                  <>
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.3, repeat: 3 }}
                    >
                      💨
                    </motion.span>
                    Tiup...
                  </>
                ) : (
                  <>
                    Tiup Lilin 🕯️
                  </>
                )}
              </span>
            </motion.button>
          ) : (
            <motion.div
              key="wish-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-5xl mb-4"
              >
                🎉
              </motion.div>

              <h3 className="font-serif text-3xl font-semibold gradient-text mb-4 text-rose-500">
                Yeay! Selamat Ulang Tahun!
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 font-sans">
                Semoga semua harapanmu yang barusan diucapkan terkabul yaaa. Aamiin!
              </p>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-rose-200">
                <p className="font-serif italic text-gray-400 text-sm">
                  With love,
                </p>
                <p className="font-serif text-xl text-rose-500 mt-2">
                  {BIRTHDAY_DATA.closingMessage}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}