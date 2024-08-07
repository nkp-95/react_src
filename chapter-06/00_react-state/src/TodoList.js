import { useState } from "react";

const heavyWork = () => {
  console.log('엄청 오래 걸리는 초기화 작업');
  return ['JAVA', 'ORACLE'];
}

export default function TodoList(){
//입력값을 names에 추가
  const [names, setNames] = useState(() => {    //콜백함수 (한번 초기화)
    return heavyWork();                          //이후 렌더링 작업에서는 초기함수 호출 X 
  });
  // const [names, setNames] = useState(['JAVA', 'ORACLE']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    //셋터를 함수를 이용해 인풋 텍스트 박스 입력값 input 상태변수에 대입
    setInput(e.target.value);
  }
  // console.log(input);

  const handleUpload = () => {
    // names = names.add(input);  불가
    setNames((prevState) => {   //prevState는 기본값 가지고 있음 useState(['JAVA', 'ORACLE'])
      console.log(prevState);
      return [input, ...prevState]  //prevState를 전개해서 배열로 만든다음 input 추가
    })
  };

  return(
    <div>                 {/*JSX는 onclick 대신 onChange*/}
      <input type="text" value={input} onChange={handleInputChange}/>
      <button onClick={handleUpload}>Upload</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })
      }
    </div>
  );
}