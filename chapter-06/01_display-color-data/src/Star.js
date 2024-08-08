import React from "react";
import { FaStar } from "react-icons/fa";
//                                                 onSelect = prop
export default function Star({ selected = false, onSelect = f => f}){
  return <FaStar color = {selected ? "blue" : "gray"} onClick={onSelect} />;
  //                                                   onClick = prop
}