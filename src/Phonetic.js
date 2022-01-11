import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <span className="Phonetic">
      {props.phonetic.text}
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
    </span>
  );
}
