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
        return (
          <div key={index} className="Meaning">
            {/* Part of speech */}
            {meaning.partOfSpeech && (
              <h3 className="part-of-speech">
                {capitalize(meaning.partOfSpeech)}
              </h3>
            )}

            {/* Definition */}
            {meaning.definition && (
              <p className="definition">{capitalize(meaning.definition)}</p>
            )}

            {/* Example */}
            {meaning.example && (
              <p className="example">“{capitalize(meaning.example)}”</p>
            )}

            {/* Synonyms */}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <div className="synonyms">
                <strong>Synonyms:</strong>{" "}
                {meaning.synonyms.slice(0, 5).map((synonym, i) => (
                  <span key={i} className="synonym-tag">
                    {capitalize(synonym)}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
