import React, { memo } from "react";

function PureCat({ name }) {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
}

export default PureCat = memo(PureCat); //memo = HOC : 고차함수
