import React, { useState } from "react";

function Checkbox(){
  const [checked, setChecked] = useState(false);

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

  alert(`checked: ${checked.toString()}`);
//  도달할수 없는 코드 랜더링만 되고 alert는 작동 못함
}

export default function Useeffect02(){
  return <Checkbox />;
}