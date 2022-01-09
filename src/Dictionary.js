import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control form-control"
          onChange={handleKeywordChange}
        />
      </form>
      <Result result={result} />
    </div>
  );
}
