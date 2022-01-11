import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span className="Phonetic">
      <span>{props.phonetic.text}</span>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </span>
  );
}
