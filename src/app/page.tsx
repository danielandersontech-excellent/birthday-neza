'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Opening from '@/components/Opening';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Wishes from '@/components/Wishes';
import MakeWish from '@/components/MakeWish';
import AudioPlayer, { AudioPlayerRef } from '@/components/AudioPlayer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const audioRef = useRef<AudioPlayerRef>(null);

  const handleOpen = () => {
    setIsOpened(true);
    // Start playing music when invitation is opened
    setTimeout(() => {
      audioRef.current?.play();
    }, 500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* App Container - Mobile First with Desktop Centering */}
      <div className="app-container relative">
        {/* Opening/Invitation Overlay */}
        <Opening isOpen={isOpened} onOpen={handleOpen} />

        {/* Main Content - Only visible after opening */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Hero Section */}
              <Hero />

              {/* Section Divider */}
              <div className="section-divider px-6">
                <span>♥</span>
              </div>

              {/* Memories Gallery */}
              <Gallery />

              {/* Section Divider */}
              <div className="section-divider px-6">
                <span>✦</span>
              </div>

              {/* Wishes Slider */}
              <Wishes />

              {/* Section Divider */}
              <div className="section-divider px-6">
                <span>🌸</span>
              </div>

              {/* Make a Wish / Birthday Cake */}
              <MakeWish />

              {/* Bottom Padding */}
              <div className="h-24" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Audio Player - Fixed Position */}
        {isOpened && <AudioPlayer ref={audioRef} />}
      </div>

      {/* Background Gradient Overlay for Desktop */}
      <div className="fixed inset-0 pointer-events-none hidden md:block">
        <div className="absolute inset-y-0 left-0 w-[calc(50%-250px)] bg-gradient-to-r from-stone-200/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[calc(50%-250px)] bg-gradient-to-l from-stone-200/50 to-transparent" />
      </div>
    </main>
  );
}
