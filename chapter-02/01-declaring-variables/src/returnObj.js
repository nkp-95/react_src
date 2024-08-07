//화살표 함수의 경우 리턴값이 객체인 경우는 
//괄호로 묶어줘야 함

var lordify =(firstName, lastName) => ({  
  first: firstName,
  last: lastName
})

console.log( lordify("냥이", "고") )