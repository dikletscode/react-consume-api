import React, { useState } from "react";

export function validasi(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function EmailInput(props) {
  return (
    <input
      type='email'
      name='emailLogin'
      className={props.name}
      id={props.id}
      value={props.values}
      onChange={props.change}
      aria-describedby='emailHelp'
      placeholder='Enter email'
      required
    />
  );
}
export default EmailInput;
