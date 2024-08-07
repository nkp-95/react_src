//greeting 함수를 선언한 후 콜백 함수로 사용 
let count = 0;

// function greeting(){
//   count++;
//   console.log("안녕하세요? " + count);
// }

// setInterval(greeting, 2000);  //함수안에 함수 호출 = 콜백 함수(2초마다 작동)

//직접 함수 선언(화살표 함수) 실행
setInterval(() => {
  count++;
  console.log("안녕하세요? " + count);
}, 2000);