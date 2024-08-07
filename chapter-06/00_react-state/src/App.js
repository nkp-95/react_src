import { useState } from "react";

function App() {
/* 리액트 훅(hook)
  함수형 컴포넌트에서 상태(state)와 생명주기(lifecycle) 기능을 
  사용할수 있도록 해주는 함수

  리액트 생명주기(React Lifecycle): 리액트 컴포넌트가 **[화면]**에 나타나고,
    업데이트(수정) 되고, 최종적으로 사라지는 과정에서 발생하는 일련의 이벤트들을 
    의미합니다.
*/
  const [time, setTime] = useState(1);    //리턴값 배열[state변수, 셋터함수]
  // time - 상태변수(state)

  // time = 2; 에러
  // setTime(2); 에러X
  console.log('업데이트');
  const handleClick = () => {
    let newTime;    //지역변수
    if(time >= 12){ //12에서 13으로 증가시점
      newTime = 1;
    }else{
      newTime = time +1;
    }
    console.log(time)     //실무에선 데이터량 때문에 시간차 있음
    setTime(newTime);    //newTime = time + 1
  };

  return (
    <div>
      <span>현재시각 {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
