import React, { useState } from "react";
import Timer from "./components/Timer";

function CleanUp() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />} {/*앞에가 false면 뒤에는 실행 X*/}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default CleanUp;
