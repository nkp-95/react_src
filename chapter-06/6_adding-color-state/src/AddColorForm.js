import React from "react";
import { useInput } from "./hooks";

export default function AddColorForm({onNewColor = f => f}){
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault(); //event 초기화
    onNewColor(titleProps.value, colorProps.value);
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