import React, { useState } from "react";

export default function AddColorForm({onNewColor = f => f}){
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = e => {
    e.preventDefault(); //event 초기화
    onNewColor(title, color);
    setTitle("");
    setColor("");
  }

  return (
    <form onSubmit={submit}>
      <input
      //
        value={title}//스태틱 방식
        onChange={event => setTitle(event.target.value)}//set함수에서 입력값 보내줌
      //  여기랑
        type="text"
        placeholder="color title..."
        required
      />
      <input
        //
        value={color}
        onChange={event => setColor(event.target.value)}//set함수에서 입력값 보내줌
        // 여기강 동일함 훅으로 대체 가능
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );

}