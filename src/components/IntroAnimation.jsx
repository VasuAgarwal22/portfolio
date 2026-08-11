import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello",
      "नमस्ते",
      "你好",
      "Hola",
      "Bonjour",
      "مرحبًا",
      "Привет",
      "Olá",
      "こんにちは",
      "안녕하세요",
      "Hallo",
      "Ciao",
      "সালাম",
      "வணக்கம்",
      "Γεια σας",
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const FAST_MS = 120;
  const LAST_MS = 300;

  useEffect(() => {
    if (index < greetings.length - 1) {
      const id = setTimeout(() => {
        setIndex((i) => i + 1);
      }, FAST_MS);

      return () => clearTimeout(id);
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, LAST_MS);

    return () => clearTimeout(timer);
  }, [index, greetings.length]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
