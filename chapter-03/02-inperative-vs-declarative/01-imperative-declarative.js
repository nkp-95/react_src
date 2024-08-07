var string = "This is the mid day show with Cheryl Waters";
var urlFrindly = "";

for(var i=0; i<string.length; i++){
  if(string[i] === " "){
    urlFrindly += "-";  //문자열에 공백이 있으면 - 입력
  }else{
    urlFrindly += string[i];  //문자열이 공백이 아니면 해당 인덱스 문자 입력
  }
}

urlFrindly = urlFrindly.toLowerCase();//소문자 변환

console.log(urlFrindly);