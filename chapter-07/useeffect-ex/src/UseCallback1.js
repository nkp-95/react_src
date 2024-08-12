import { useCallback, useEffect, useState } from "react";

function Usecallback1() {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   //종속배열안에 변수 -> 함수가 계속 생성이 되면서 참조변수 주소값 변경
  //   console.log(`someFunc: number: ${number}`);
  // };

  const someFunction = useCallback(() => {
    //someFunction변경 X
    console.log(`someFunc: number: ${number}`);
  }, []);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Cal someFunc</button>
    </div>
  );
}

export default Usecallback1;
