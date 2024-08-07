//스코프(scope) : 선언한 변수의 적용 범위

/*
  var function블럭 안에서만 한정 다른블럭 한정 안됨
  let, const - 블럭 레벨
*/
var div;
var container = document.getElementById("container");

for(let i=0; i<5; i++){
  div = document.createElement("div");
  div.onclick = function(){
    alert("이것은 박스 #: " + i + "인덱스 입니다.");
  };
  container.appendChild(div);
}