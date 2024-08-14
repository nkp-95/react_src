import React, { useEffect, useState } from "react";

//로컬 스토리지에서 정보 읽어올때
const loadJOSN = (key) => key && JSON.parse(localStorage.getItem(key));

//로컬스토리지에 GitHubUser 정보 저장
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

function GitHubUser({ login }) {
  const [data, setData] = useState(loadJOSN(`user:${login}`));

  //로컬스토리지에 저장 useEffect
  useEffect(() => {
    if (!data) return;
    if (data.login === login) return; // 로컬스토리지에 저장된 정보 같은 사용자
    const { name, avatar_url, location } = data;
    // 로컬 스토리지 저장
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [data]);

  ///비동기 통신으로 GitHubUser 정보 조회
  useEffect(() => {
    if (!login) return;
    //data 상태값과 로컬스토리지에 로그인아이디 조회 로그인아이디 같으면 리턴
    if (data && data.login === login) return;
    //비동기 통신으로 data 스테이트 생성
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [login]);
  //data state 가 있으면
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return null;
}

export default function App() {
  return <GitHubUser login="nkp-95" />;
}
