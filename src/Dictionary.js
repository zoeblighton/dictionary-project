import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

let apiKey = "ad330884483abf7o091c0c43t8ea93ab";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);

    const meaning = response.data.meanings && response.data.meanings[0];

    if (meaning) {
      console.log(meaning.definition);
    } else {
      console.log("No meanings found for this word.");
    }
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="dictionary-container">
        <form className="search-form" onSubmit={search}>
          <input
            type="search"
            className="search-input"
            autoFocus={true}
            placeholder="Search for a word..."
            onChange={handleKeywordChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <Results results={results} />
      </div>
    </div>
  );
}
