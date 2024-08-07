import { useState } from "react";

//사용자 정의 훅
export const useInput = initiaValue => {
  const [value, setValue] = useState(initiaValue);
  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initiaValue)
  ]
}