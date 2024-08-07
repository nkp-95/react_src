import { addInput, list, rollBtn } from "./tags.js";

function selectManu(data){
  list.classList.remove('rolling');
  list.innerHTML = '';

  const selectIndex = Math.floor(Math.random() * data.length);
  const li = document.createElement('li');
  li.classList.add('item', 'selected');
  li.innerHTML = `<b>${selectIndex + 1}</b>${data[selectIndex]}`;
  list.append(li);

  rollBtn.textContent = 'Clear';
}

function minAlert(){
  alert("최소 1개 이상의 메뉴를 입력해 주세요.");
  addInput.focus();
}

function clearMenu(data){
  data.splice(0);
  list.innerHTML = '';
  rollBtn.textContent = 'Roll';
}

function rollMenu(data){
  if(data.length === 0){
    minAlert();
  }else if(rollBtn.textContent === 'Clear'){
    clearMenu(data);
  } else {
    list.classList.add('rolling');
    setTimeout(()=> selectManu(data),1200);
  }
}

export default rollMenu;