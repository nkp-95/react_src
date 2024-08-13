import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "chacked" : "not checked"}
    </>
  );
}

export default function Usereducer01() {
  return <Checkbox />;
}
