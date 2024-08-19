import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

type AppProps = {
  item: string; //function App(props: AppProps) 타입 지정
};

function App(props: AppProps) {
  return (
    <div>
      <h1>{props.item}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App item="React" />
  </React.StrictMode>
);
