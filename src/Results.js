import React from "react";
import Phonetics from "./Phonetics";

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function Results(props) {
  const results = props.results;

  if (!results || !results.meanings) {
    return null;
  }

  const meaningsToShow = results.meanings.slice(0, 2);

  return (
    <div className="Results">
      {/* Word */}
      <h2 className="word-title">{capitalize(results.word)}</h2>

      {/* PHONETICS – pass both the string and any array if it exists */}
      <Phonetics phonetic={results.phonetic} phonetics={results.phonetics} />

      {/* MEANINGS */}
      {meaningsToShow.map(function (meaning, index) {
        const partOfSpeech = meaning.partOfSpeech;
        const synonyms = meaning.synonyms || [];

        return (
          <div key={index} className="Meaning">
            {partOfSpeech && (
              <h3 className="part-of-speech">{capitalize(partOfSpeech)}</h3>
            )}

            {meaning.definition && (
              <p className="definition">{capitalize(meaning.definition)}</p>
            )}

            {meaning.example && (
              <p className="example">“{capitalize(meaning.example)}”</p>
            )}

            {/* SYNONYMS */}
            {synonyms.length > 0 && (
              <div className="synonyms">
                <span className="synonyms-label">Synonyms:</span>
                <ul className="synonyms-list">
                  {synonyms.slice(0, 5).map(function (synonym, i) {
                    return <li key={i}>{capitalize(synonym)}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
