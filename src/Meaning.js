import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <span className="partOfSpeech"> {props.meaning.partOfSpeech}</span>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <p>
              {definition.definition}
              <br />
              <em>"{definition.example}"</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
