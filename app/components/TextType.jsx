"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const TextType = ({
  texts = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  initialDelay = 0,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  cursorClassName = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(initialDelay === 0);
  const timeoutRef = useRef(null);

  // Gère le délai initial
  useEffect(() => {
    if (initialDelay > 0) {
      timeoutRef.current = setTimeout(() => setStarted(true), initialDelay);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [initialDelay]);

  const tick = useCallback(() => {
    if (!started || texts.length === 0) return;

    const currentWord = texts[textIndex];

    if (!isDeleting) {
      // Phase d'écriture
      if (charIndex < currentWord.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Mot complet, pause avant suppression
        const isLastWord = textIndex === texts.length - 1;
        if (!loop && isLastWord) return;

        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Phase de suppression
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Suppression terminée, passer au mot suivant
        setIsDeleting(false);
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [
    started,
    texts,
    textIndex,
    charIndex,
    isDeleting,
    displayedText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  useEffect(() => {
    tick();
    return () => clearTimeout(timeoutRef.current);
  }, [tick]);

  return (
    <span className={`inline ${className}`}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`inline-block ml-1 ${cursorClassName}`}
        >
          {cursorCharacter}
        </motion.span>
      )}
    </span>
  );
};

export default TextType;
