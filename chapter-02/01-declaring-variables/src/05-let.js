const facter = 5;

//함수 선언
function calc(){
  return num * facter;  //에러 not define num
}

{
  const num = 10; //const, let 블럭범위 한정됨
  let result = calc(); 
  // console.log("result : " + result);
  console.log(`result : ${result}`);
}


//function calc(){  =>  let result = calc();  //파라미터로 던져주기(num) 인식 가능