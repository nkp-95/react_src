import React from "react";
import Color from "./Color";
import { useColors } from "./ColorProvider";
// ColorContext = 프로바이드

export default function ColorList(){
  const { colors } = useColors();

  if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
  
  return (
    <div>
      {colors.map(color => ( 
        <Color key = {color.id} {...color} />
      ))}
    </div>
  );
}