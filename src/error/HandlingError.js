import React from "react";
import "./HandlingError.css";

export default function HandlingError(props) {
  return (
    <div className='handling-error'>
      <p>{props.errorMessage}</p>
    </div>
  );
}
