//@flow
// ㄴ> 어노테이션 방식임 주석 아님
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

type Props = {
  item: string, // = Porps.item
};

function App(props: Props) {
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App item="React" />);
