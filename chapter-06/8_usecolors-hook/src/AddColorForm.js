import React from "react";
import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";

export default function AddColorForm(){
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();

  const submit = e => {
    e.preventDefault(); //event 초기화
    addColor(titleProps.value, colorProps.value);
    resetTitle("");
    resetColor("");
  }

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}//사용자 정의 훅으로 대체
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}//사용자 정의 훅으로 대체
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );

}