"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ==========================================
// 1. TEXT REVEAL EFFECT (Character by Character)
// Modern, smooth, professional
// ==========================================
export const TextRevealEffect = ({
  words,
  className,
  duration = 0.05,
  delay = 0,
}: {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
}) => {
  const characters = words.split("");

  const container: any = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  };

  const child: any = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("font-bold overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ==========================================
// 2. TYPEWRITER EFFECT
// Classic, elegant, modern twist
// ==========================================
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: {
  words: string | string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const wordsArray = Array.isArray(words) ? words : [words];
  const currentWord = wordsArray[currentWordIndex];

  useEffect(() => {
    if (wordsArray.length === 1) {
      // Single word - just type once
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
      return;
    }

    // Multiple words - typing and deleting cycle
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
      }
    }
  }, [
    displayedText,
    currentWord,
    isDeleting,
    isPaused,
    wordsArray.length,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div className={className}>
      <span className="font-bold">{displayedText}</span>
      <motion.span
        className={`inline-block w-[2px] h-[1em] bg-current ml-1 font-extrabold ${cursorClassName}`}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};
// ==========================================
// 3. FLIP TEXT EFFECT (Modern 3D-like)
// Smooth, engaging, professional
// ==========================================
export const FlipTextEffect = ({
  words,
  className,
  interval = 3000,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("font-bold overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          style={{ transformPerspective: 1000 }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 4. SLIDE & SCALE EFFECT (Most Modern)
// Smooth, dynamic, premium feel
// ==========================================
export const SlideScaleTextEffect = ({
  words,
  className,
  interval = 3000,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("font-bold overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            y: 50,
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: -50,
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
          }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 5. GLITCH TEXT EFFECT (Trendy, Modern)
// Eye-catching, tech-savvy
// ==========================================
export const GlitchTextEffect = ({
  words,
  className,
  interval = 3000,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={cn("font-bold relative", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            x: 20,
            transition: {
              duration: 0.2,
            },
          }}
          className="relative"
        >
          {/* Main text */}
          <span className="relative z-10">{words[currentIndex]}</span>

          {/* Enhanced glitch effect layers - more intense */}
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-80 -z-10 mix-blend-screen"
            animate={{
              x: [-5, 5, -3, 4, -5],
              y: [0, 2, -2, 1, 0],
              opacity: [0.8, 0.5, 0.9, 0.6, 0.8],
            }}
            transition={{
              duration: 0.15,
              repeat: 3,
              repeatType: "mirror",
            }}
          >
            {words[currentIndex]}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0 text-cyan-400 opacity-80 -z-10 mix-blend-screen"
            animate={{
              x: [5, -5, 3, -4, 5],
              y: [0, -2, 2, -1, 0],
              opacity: [0.8, 0.6, 0.9, 0.5, 0.8],
            }}
            transition={{
              duration: 0.15,
              repeat: 3,
              repeatType: "mirror",
              delay: 0.05,
            }}
          >
            {words[currentIndex]}
          </motion.span>

          <motion.span
            className="absolute top-0 left-0 text-green-400 opacity-70 -z-10 mix-blend-screen"
            animate={{
              x: [-3, 3, -4, 2, -3],
              y: [1, -1, 2, -2, 1],
              opacity: [0.7, 0.4, 0.8, 0.5, 0.7],
            }}
            transition={{
              duration: 0.15,
              repeat: 3,
              repeatType: "mirror",
              delay: 0.1,
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 6. WORD WAVE EFFECT (Playful but Professional)
// Character-by-character wave animation
// ==========================================
export const WordWaveEffect = ({
  words,
  className,
  stagger = 0.05,
}: {
  words: string;
  className?: string;
  stagger?: number;
}) => {
  const characters = words.split("");

  return (
    <div className={cn("font-bold", className)}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.5,
            delay: index * stagger,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// ==========================================
// 7. GRADIENT REVEAL EFFECT (Ultra Modern)
// Text reveals with gradient animation
// ==========================================
export const GradientRevealEffect = ({
  words,
  className,
  duration = 1.5,
}: {
  words: string;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      className={cn("font-bold relative overflow-hidden", className)}
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        duration,
        ease: "easeInOut",
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, currentColor 50%, transparent 100%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {words}
    </motion.div>
  );
};
export const SplitRevealEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const characters = words.split("");
  const midpoint = Math.floor(characters.length / 2);

  return (
    <div className={`font-bold overflow-hidden ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            opacity: 0,
            x: index < midpoint ? -50 : 50,
            rotateY: index < midpoint ? -90 : 90,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          transition={{
            duration: 0.5,
            delay: Math.abs(index - midpoint) * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// ==========================================
// 2. NEON GLOW EFFECT (Cyberpunk Style)
// Modern, eye-catching, perfect for portfolio
// ==========================================
export const NeonGlowEffect = ({
  words,
  className,
  glowColor = "rgb(59, 130, 246)",
}: {
  words: string;
  className?: string;
  glowColor?: string;
}) => {
  return (
    <motion.div
      className={`font-bold ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        textShadow: [
          `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
          `0 0 20px ${glowColor}, 0 0 30px ${glowColor}, 0 0 40px ${glowColor}`,
          `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}`,
        ],
      }}
      transition={{
        duration: 0.5,
        textShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {words}
    </motion.div>
  );
};

// ==========================================
// 3. SCRAMBLE TEXT EFFECT (Hacker Style)
// Unique, tech-savvy, very modern
// ==========================================
export const ScrambleTextEffect = ({
  words,
  className,
  scrambleDuration = 1500,
  displayDuration = 2500,
}: {
  words: string | string[];
  className?: string;
  scrambleDuration?: number;
  displayDuration?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

  const wordsArray = Array.isArray(words) ? words : [words];
  const currentWord = wordsArray[currentWordIndex];

  useEffect(() => {
    let iteration = 0;
    let isScrambling = true;

    const scrambleInterval = setInterval(() => {
      if (!isScrambling) return;

      setDisplayText(
        currentWord
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return currentWord[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= currentWord.length) {
        isScrambling = false;
        clearInterval(scrambleInterval);

        // Display completed word, then move to next if multiple words
        if (wordsArray.length > 1) {
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % wordsArray.length);
          }, displayDuration);
        }
      }
    }, scrambleDuration / (currentWord.length * 3));

    return () => clearInterval(scrambleInterval);
  }, [
    currentWord,
    currentWordIndex,
    scrambleDuration,
    displayDuration,
    wordsArray.length,
  ]);

  return (
    <div className={className}>
      {displayText}
      {wordsArray.length > 1 && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}
    </div>
  );
};

// ==========================================
// 4. BOUNCE IN EFFECT (Playful but Professional)
// Energetic, attention-grabbing
// ==========================================
export const BounceInEffect = ({
  words,
  className,
  stagger = 0.08,
}: {
  words: string;
  className?: string;
  stagger?: number;
}) => {
  const characters = words.split("");

  return (
    <div className={`font-bold ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: index * stagger,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// ==========================================
// 5. LIQUID MORPH EFFECT (Ultra Modern)
// Smooth, fluid, premium feel
// ==========================================
export const LiquidMorphEffect = ({
  words,
  className,
  interval = 3000,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={`font-bold overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 1.5,
            rotateX: 90,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            scale: 0.5,
            rotateX: -90,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformPerspective: 1000 }}
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 6. STAGGER FADE EFFECT (Elegant & Clean)
// Professional, subtle, perfect for headings
// ==========================================
export const StaggerFadeEffect = ({
  words,
  className,
  stagger = 0.1,
  direction = "up",
}: {
  words: string;
  className?: string;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const characters = words.split("");

  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <div className={`font-bold ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{
            opacity: 0,
            ...directionMap[direction],
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// ==========================================
// 7. RAINBOW SHIFT EFFECT (Bold & Modern)
// Vibrant, eye-catching, perfect for creative portfolios
// ==========================================
export const RainbowShiftEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={`font-bold ${className}`}
      initial={{ backgroundPosition: "0% center" }}
      animate={{ backgroundPosition: "200% center" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #4169e1, #9370db, #ff0080)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {words}
    </motion.div>
  );
};
