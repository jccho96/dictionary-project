import React from "react";
import "./Phonetic.css";
import volumeUp from "./volume-up.svg";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <span>[{props.phonetic.text}]</span>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={volumeUp} alt="volume" width="20" height="20" />
      </a>
    </span>
  );
}
