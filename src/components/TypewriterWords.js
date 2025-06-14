import React, { useEffect, useState } from "react";

export default function TypewriterWords() {
  const words = ["Reading!", "Knowledge!", "Learning!", "Research!"];
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 175;
  const clearDelay = 3000;

  useEffect(() => {
    let typeInterval;
    let clearTimeoutId;

    const currentWord = words[wordIndex];

    if (letterIndex < currentWord.length) {
      typeInterval = setInterval(() => {
        setDisplayedText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      clearTimeoutId = setTimeout(() => {
        setDisplayedText("");
        setLetterIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, clearDelay);
    }

    return () => {
      clearInterval(typeInterval);
      clearTimeout(clearTimeoutId);
    };
  }, [wordIndex, letterIndex, words, typingSpeed, clearDelay]);

  return (
    <div>
      Make the Most of Your
      <br />
      {/* Use &nbsp; if displayedText is empty to maintain line height */}
      <span id="typewriter-word">{displayedText || "\u00A0"}</span>
    </div>
  );
}
