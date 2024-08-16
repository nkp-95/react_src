import { Suspense, lazy, useState } from "react";
import Agreement from "./Agreement.js";
import { ClimbingBoxLoader } from "react-spinners";

/*
리액트 용어 :
  - 랜더링: 컴포넌트 호출하여 VDOM에 적용하는 과정
            전체과정 - 1. 컴포넌트 호출 return react element
                       2. VDOM 재조정 작업 (여기까지가 랜더링)
                       3. renderer가 컴포넌트 정보를 DOM에 MOUNT
                       4. 브라우저가 DOM을 point 

  - react element
    - 컴포넌트 호출시 return 하는것 (react.createElement() 호출)
    - 컴포넌트의 정보(결국 DOM에 삽입될 내용: type, key, props, ref, children)
      를 담은 객체
    
    - fiber
      - VDOM의 노드 객체
      - react element의 내용이 DOM에 반영되기 위해서, 먼저 VDOM에 추가되어야 하는데
        이를 위해서 확장한 객체 - 컴포넌트의 상태(State), life cycle, hook이 관리됨
      
리액트 구성 요소 
  1. react 코어
    - Component 정의
      - 함수형 컴포넌트와 클래스형 컴포넌트로 나뉘며, JSX문법을 사용하여 
        UI를 정의합니다.
      - props를 통해 데이터를 전달받고, state를 관리하며 동적인 UI를 구현 합니다.
      - Hooks를 사용하여 함수형 컴포넌트에서도 state와 side effect를 관리할수 있다.
    - 다양한 플랫폼 지원
      - React는 웹브라우저 뿐만 아니라 React Native를 통해 모바일 앱 개발에도 사용 됩니다.
      - Web Components와의 통합도 가능하여 기존 웹환경과의 호환성을 높입니다.
  2. renderer
    - 웹에서 DOM 조작
    - reconciler와 legacy-events 패키지 의존성 있음
  3. event(legacy-events)
    - 기존 웹에서 event를 wrapping해서 추가적인 기능을 수행 할수 있게함
  4. scheduler
    - react는 Task를 비동기로 실행함. 이 Tesk를 실행하는 타이밍을 알고 있는 패키지
  5. reconciler
    - fiber architcture 에서 VDOM  재조정 담당
    - 컴포넌트를 호출하는곳
*/

const Main = lazy(() => import("./Main.js"));

function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <div>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
