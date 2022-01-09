import React from "react";
import Meaning from "./Meaning";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <hr></hr>
        <div className="type">Definition</div>
        <span class="highlightme">{props.result.word}</span>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <hr></hr>
      </div>
    );
  } else {
    return null;
  }
}
