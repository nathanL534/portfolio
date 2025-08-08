"use client";

import { useEffect, useState } from "react";

type TypingAnimationProps = {
  words: string[];
  typingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
};

export function TypingAnimation({
  words,
  typingSpeedMs = 60,
  pauseMs = 1200,
  className,
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const isDone = displayed === current;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (!isDone) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, deleting ? typingSpeedMs / 2 : isDone ? pauseMs : typingSpeedMs);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, pauseMs, typingSpeedMs, words]);

  return <span className={className}>{displayed}|</span>;
}


