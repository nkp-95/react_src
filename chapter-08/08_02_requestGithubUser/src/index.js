// fetch(`https://api.github.com/users/nkp-95`)
// // fetch(`https://jsonplaceholder.typicode.com/users`)
// // fetch(`https://jsonplaceholder.typicode.com/posts`)
// // fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((response) => response.json()) //콜백함수
//   .then(console.log)
//   .catch(console.error);

export async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    // const response = await fetch(`${BASE_URL}/news/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

const BASE_URL = "http://localhost:8090/api";

/* 
  데이터 생성 : POST 변경할때는 PUT
  입력 컴포넌트 폼
  const formData = new FormData();
  formData.append("title", "뉴스제목데이터");
  formData.append("dt", "2024-08-24");
  formData.append("content", "뉴스내용데이터");
  formData.append("img", ingFile);


  export async function creaeteNews(formdata)
  const response = await(`${BASE_URL}/news`, {
    method: "POST",
    body: formdata
  })
  
  if(!response.ok){
    throw new Error("뉴스를 등록하는데 실패했습니다.")
  }
  const body = await reponse.json();
  return body;
  }
  
  requestGithubUser("3");
*/

requestGithubUser("nkp-95");
