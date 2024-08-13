import React, { memo } from "react";

const Child = ({ name, age, tellMe }) => {
  //job,
  console.log("자녀도 랜더링이 되었네요");
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>name: {name}</p>
      <p>age: {age}살</p>
      {/* <p>{job}</p> */}
      <p>tellMe: {tellMe}</p>
    </div>
  );
};

export default memo(Child);
