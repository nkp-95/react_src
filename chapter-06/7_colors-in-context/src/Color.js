import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = f => f,
  onRate = f => f
}){
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>{/* 삭제 대상 id*/}
        <FaTrash />
      </button>
      <div style={ { height: 50, backgroundColor: color } } />
      <StarRating 
        selectedStars = {rating} 
        onRate={rating => onRate(id, rating) }//레이팅 값 매개변수로 id 와 함께 전달
      />
    </section>    
  );
}