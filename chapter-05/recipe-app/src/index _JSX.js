import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function Cat({ name }){
  return (
    <>
      <h1>고양이 이름은 {name} 입니다.</h1>
      <p>이 고양이는 예뻐요.</p>
    </>
  );
}

const product = "MacBook";
const model = ' Air';
const item = product.toUpperCase() + model;
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/M2_Macbook_Air_Midnight_model_-_1.jpg/250px-M2_Macbook_Air_Midnight_model_-_1.jpg';
//JSC 에서는 가급적 간단하게 가독성 좋게 하는걸 지향

function handleClick(e){
  alert('곧 도착합니다!');
}

const WINS = {
  rock : 'scissor',    //이기는 조건의 값
  scissor : 'paper',
  paper : 'rock'
}
//WINS.rock : === WINS['rock']

function getResult(me, other){
  if(WINS[me] === other ) return '승리';
  else if(me === WINS[other]) return '패배';
  return '무승부';
}

const me = 'rock';
const other = 'scissor';
const result = getResult(me, other);


//매우 중요 : JSX에서는 자바스크립트를 중괄호{} 안에 사용할수 있다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>나만의 {item} 주문하기</h1>
    <img src={imageUrl} alt='제품사진' />
    <button onClick={handleClick}>확인</button>
    <h2>{result}</h2>
    <h2>{WINS.rock}</h2>
    <h2>{WINS['rock']}</h2>
  </>
  // <form action=''>
  //   <label htmlFor="name">이름</label>  {/* 그냥 for 사용 X */}
  //   <input type="text" id='name' onFocus="" onMouseDown={}/>{/* 카멜로테이션으로 써줘야함 */}
  // </form>
  
  // //jsx 문법
  // <div className='App'>     
  //   <p className='hello'>안녕 리엑트?</p>
  // </div>

  // <App />
  
  // <h1>안녕 리엑트</h1>
  // <p id='hello'>안녕 리엑트?</p>
);
// root.render(
//     <Cat name ="나비" />
// );

