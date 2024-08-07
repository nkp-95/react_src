import React from 'react';
import Ingredient from './Ingredient';

/*
{...ingredient}
= <ingredient
      amount={ingredient.amount}
      measurement={ingredient.measurement}
      name={ingredient.name}

<Ingredient amount=500, measurement="그램", name="연어" />
                ㄴ>문자열은 "" 사용, 이외 숫자 등은 속성 넘길때는 amount={500} 

let  ingredient ={
  amount: 500,
  measurement: "그램",
  name: "연어"
}

let { amount, measurement, name} = {...ingredient}

{...ingredient}
*/

export default function IngredientsList({list}){
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => 
        <Ingredient key={i} {...ingredient} />
      )}
    </ul>
  );
}

IngredientsList.displayName = "IngredientsList";