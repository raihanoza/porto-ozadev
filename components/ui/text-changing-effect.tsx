"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextChangingEffect = ({
  words,
  className,
  duration = 0.5,
  interval = 2000, // Interval untuk pergantian teks dalam milidetik
}: {
  words: string[]; // Menerima array string
  className?: string;
  filter?: boolean;
  duration?: number;
  interval?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Pergantian kalimat berdasarkan interval waktu
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className={cn("text-2xl leading-snug tracking-wide", className)}>
          <AnimatePresence mode="wait">
            {/* Animasi ketika pergantian kalimat */}
            <motion.div
              key={currentWordIndex} // Key akan berubah saat index berganti
              initial={{ opacity: 0, y: 20 }} // Kalimat baru dimulai dengan opacity 0 dan y=20 (dari bawah)
              animate={{ opacity: 1, y: 0 }} // Kalimat baru muncul dengan opacity penuh dan y=0
              exit={{ opacity: 0, y: -20 }} // Kalimat lama menghilang dengan opacity 0 dan y=-20 (ke bawah)
              transition={{
                duration: duration,
                ease: "easeInOut", // Efek transisi halus
              }}
            >
              {words[currentWordIndex]} {/* Menampilkan kalimat yang aktif */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
