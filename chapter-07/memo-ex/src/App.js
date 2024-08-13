import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("부모 컴포넌트가 랜더링 되었어요");

  // const job = {//자식 컴포넌트까지 무조건 랜더링
  //   name: "학생",
  // };

  // const job = useMemo(() => {
  //   {
  //     name: "학생";
  //   }
  // }, []);

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <button onClick={incrementChildAge}>자녀 나이 증가</button>
      <Child name={"홍길동"} age={childAge} tellMe={tellMe} />
      {/*job={job}*/}
    </div>
  );
}

export default App;
