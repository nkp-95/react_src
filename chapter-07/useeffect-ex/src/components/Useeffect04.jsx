import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Useeffect04(){
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  }

  useEffect(()=>{
    console.log(`typing "${val}"`);
  });

  useEffect(()=>{
    console.log(`saved phrase "${phrase}"`);
  });
}