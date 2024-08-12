import React, { useMemo, useState } from "react";
//useMemo
const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 9999999999; i++) {} //오래 걸리는 작업시간 각오하고 돌릴것
  return number * 10000;
};
const easyCalculate = (numer) => {
  //위에 오래걸리는 계산 때문에 겁나게 오래 걸림
  console.log("짱쉬운 계산");
  return numer + 1;
};

function Usememo1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  //값 변경 없어도 오래걸리는 계산도 호출됨
  const hardSum = useMemo(() => {
    //useMemo있는버전
    return hardCalculate(hardNumber);
  }, [hardNumber]); //hardNumber가 변경될때만 hardNumber호출 쉬운계산 할때 딜레이 없어짐
  //const hardSum = hardCalculate(hardNumber); useMemo없는 버전
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum} </span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum} </span>
    </div>
  );
}

export default Usememo1;
