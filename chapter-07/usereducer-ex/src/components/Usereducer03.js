import React, { useReducer, useState } from "react";

const reducer = (checked) => !checked;
function Checkbox() {
  const [checked, dispatch] = useReducer(reducer, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={dispatch} />
      {checked ? "chacked" : "not checked"}
    </>
  );
}

export default function Usereducer03() {
  return <Checkbox />;
}
