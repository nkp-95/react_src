import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중...");
    }, 1000);
    //clean up  정리작업 필요 없으면 랜더링 무한 루트
    //useeffect 문에서 unmount 될때 return 문 실행
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작 합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
