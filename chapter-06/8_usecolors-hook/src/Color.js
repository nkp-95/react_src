import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";

export default function Color({id, title, color, rating,}){
  const {rateColor, removeColor} = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>{/* 삭제 대상 id*/}
        <FaTrash />
      </button>
      <div style={ { height: 50, backgroundColor: color } } />
      <StarRating 
        selectedStars = {rating} 
        onRate={rating => rateColor(id, rating) }//레이팅 값 매개변수로 id 와 함께 전달
      />
    </section>    
  );
}