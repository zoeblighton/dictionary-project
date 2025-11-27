import React from "react";

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
      <h2 className="word-title">{capitalize(results.word)}</h2>

      {meaningsToShow.map(function (meaning, index) {
        const partOfSpeech = meaning.partOfSpeech;

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
          </div>
        );
      })}
    </div>
  );
}
