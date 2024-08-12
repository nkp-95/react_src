import React, { useEffect, useState } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    //CLEAN UP
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = children.split(" "); //참조변수 : 배열

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}

export default function Useeffect07() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <WordCount>You are not going to belive this but...</WordCount>;
}
