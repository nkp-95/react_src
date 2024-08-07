import React from 'react';
import ReactDOM from 'react-dom/client';

import Menu from './components/Menu';
import data from './data/recipes.json';
      
//          {}자바스크립트 문법
function Cat({ name }){
  return (
    //여기서부터
    <>
                   {/*name = props */}
      <h1>고양이 이름은 {name} 입니다.</h1>
      <p>이 고양이는 예뻐요.</p>
    </>
    //여기까지 컴퍼넌트
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Menu recipes={data} />)
                            {/* recipes.json 데이터를 props으로 넘겨줌 */}
// root.render(
            {/* name = props */}
//     <Cat name ="나비" />
// );

