import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Useeffect05(){
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");
  const [arr, setArr] = useState([1,2,3]);

  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  useEffect(()=>{
    console.log(`typing: "${val}"`);
  }, [val]);

  useEffect(()=>{
    console.log(`saved phrase: "${phrase}"`);
  // if("example phrase" === "example phrase"){
  //   console.log("example phrase");
  // }
  }, [phrase]);


  return (
    <>
      <label>Favorite phrase</label>
      <input 
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
}