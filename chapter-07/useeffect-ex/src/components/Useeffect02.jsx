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
  //상위코드는 랜더링 되지만 하위코드 작동 X
  alert(`checked: ${checked.toString()}`);//언리처블 코드
//  도달할수 없는 코드 랜더링만 되고 alert는 작동 못함
}

export default function Useeffect02(){
  return <Checkbox />;
}