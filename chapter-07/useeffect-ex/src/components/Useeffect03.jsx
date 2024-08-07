import React, { useState } from "react";
import { useEffect } from "react";

function Checkbox(){
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  //alert와 랜더링 병행작업

  return(
    <>
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default function Useeffect03(){
  return <Checkbox />;
}