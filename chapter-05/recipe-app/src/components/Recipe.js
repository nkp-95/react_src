import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

export default function Recipe({name, ingredients, steps}){ //받아오는 객체와 명칭이 같아야함
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>  {/* => <section id = baked-salmon> */}
      <h1>{name}</h1>
      <IngredientsList list={ingredients}/>
      <Instructions title="조리 절차" steps={steps}/>
    </section>
  );
}

Recipe.displayName = "Recipe";