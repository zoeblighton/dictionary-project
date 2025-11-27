import React from "react";

export default function Phonetics(props) {
  const phoneticsArray = props.phonetics || [];
  const firstFromArray = phoneticsArray.length > 0 ? phoneticsArray[0] : {};

  // Text can come from:
  // 1) props.phonetic (SheCodes v1)
  // 2) phonetics[0].text (if that exists in future)
  const text = props.phonetic || firstFromArray.text || "";
  const audioUrl = firstFromArray.audio || "";

  // If we have neither text nor audio, don't show anything
  if (!text && !audioUrl) {
    return null;
  }

  function playAudio() {
    if (audioUrl) {
      // If the API ever gives us an audio URL, use it
      const audio = new Audio(audioUrl);
      audio.play();
    } else if (
      text &&
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      // Fallback: use browser text-to-speech for the phonetic/word
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div className="phonetics">
      {text && <span className="phonetic-text">{text}</span>}

      {/* Always show a clickable speaker if we can make sound somehow */}
      <button
        type="button"
        className="phonetic-button"
        onClick={playAudio}
        aria-label="Play pronunciation"
      >
        🔊
      </button>
    </div>
  );
}
