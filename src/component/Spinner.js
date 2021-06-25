import React from "react";

export const spinner = (vis) => {
  return (
    <div
      className={`${vis} spinner-border  mx-auto text-danger m-5 `}
      style={{ width: "10rem", height: "10rem" }}
      role='status'
    ></div>
  );
};
