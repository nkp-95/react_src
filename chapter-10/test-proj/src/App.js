import React from "react";
import PropTypes from "prop-types";

App.propTypes = {
  // name: PropTypes.string,  (문자열 타입만 있어야됨)
  // name: PropTypes.string.isRequired,(반드시 들어있어야됨)
  // name: PropTypes.any.isRequired,  (뭐든지 들어있기만 하면 됨)
  name: PropTypes.oneOf(["React", "JS"]),

  //isRequired => 내용이 있어야 에러X
  //PropTypes.array,(타입들)
  //         .object,
  //    .bool, .func, .number, .string, .symbol
};

function App({ name }) {
  return (
    <div>
      <h1>We're {name === "JS" ? "JavaScript" : "React"}</h1>
    </div>
  );
}

export default App;
