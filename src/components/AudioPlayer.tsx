'use client';

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { musicConfig } from '@/data/content';

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
}

interface AudioPlayerProps {
  autoPlay?: boolean;
}

const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>(
  ({ autoPlay = false }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => {
            // Autoplay was prevented
          });
          setIsPlaying(true);
        }
      },
      pause: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      },
    }));

    useEffect(() => {
      // Show the button after a delay
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (autoPlay && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented by browser
        });
        setIsPlaying(true);
      }
    }, [autoPlay]);

    const togglePlay = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    return (
      <>
        <audio ref={audioRef} src={musicConfig.src} loop={musicConfig.loop} preload="auto" />

        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={togglePlay}
              className="audio-toggle"
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="playing"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center justify-center"
                  >
                    {/* Animated bars when playing */}
                    <div className="flex items-end gap-0.5 h-4">
                      <motion.div
                        className="w-1 bg-[--color-rose-dark] rounded-full"
                        animate={{ height: ['40%', '100%', '60%', '80%', '40%'] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-1 bg-[--color-rose-dark] rounded-full"
                        animate={{ height: ['80%', '40%', '100%', '50%', '80%'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-1 bg-[--color-rose-dark] rounded-full"
                        animate={{ height: ['60%', '80%', '40%', '100%', '60%'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="paused"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-rose-dark)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18V5l12 7-12 7z" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </AnimatePresence>
      </>
    );
  }
);

AudioPlayer.displayName = 'AudioPlayer';

export default AudioPlayer;
