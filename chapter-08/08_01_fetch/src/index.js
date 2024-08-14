// fetch(`https://api.github.com/users/nkp-95`)
// fetch(`https://jsonplaceholder.typicode.com/users`)
// fetch(`https://jsonplaceholder.typicode.com/posts`)
fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((response) => response.json()) //콜백함수
  .then(console.log)
  .catch(console.error);
