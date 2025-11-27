import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

let apiKey = "ad330884483abf7o091c0c43t8ea93ab";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]); // <-- NEW

  function handleDictionaryResponse(response) {
    console.log("DICT:", response.data);
    setResults(response.data);
  }

  function handleImageResponse(response) {
    console.log("IMAGES:", response.data.photos);
    setPhotos(response.data.photos); // <-- SAVE IMAGES
  }

  function search(event) {
    event.preventDefault();

    // DICTIONARY API
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // IMAGE API
    let imageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageUrl).then(handleImageResponse);
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
        <Results results={results} photos={photos} /> {/* SEND PHOTOS */}
      </div>
    </div>
  );
}
