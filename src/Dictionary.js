import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApikey =
      "563492ad6f917000010000018329e291c6c94a3992711bf3dd6cf0b7";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApikey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          className="form-control"
        />
      </form>
      <Result result={result} />
      <Photos photos={photos} />
    </div>
  );
}
