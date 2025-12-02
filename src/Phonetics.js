import React from "react";

export default function Phonetics(props) {
  const phoneticsArray = props.phonetics || [];
  const firstFromArray = phoneticsArray.length > 0 ? phoneticsArray[0] : {};

  const text = props.phonetic || firstFromArray.text || "";
  const audioUrl = firstFromArray.audio || "";

  if (!text && !audioUrl) {
    return null;
  }

  function playAudio() {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    } else if (
      text &&
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div className="phonetics">
      {text && <span className="phonetic-text">{text}</span>}

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
