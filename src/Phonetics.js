import React from "react";

export default function Phonetics(props) {
  const phonetics = props.phonetics || [];

  if (!phonetics.length) {
    return null;
  }

  const first = phonetics[0];
  const text = first.text;
  const audioUrl = first.audio;

  function playAudio() {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play();
  }

  return (
    <div className="phonetics">
      {text && <span className="phonetic-text">{text}</span>}

      {audioUrl && (
        <button
          type="button"
          className="phonetic-button"
          onClick={playAudio}
          aria-label="Play pronunciation"
        >
          🔊
        </button>
      )}
    </div>
  );
}
