import './App.css';
import HandButton from './HandButton';
import Button from './Button';
import { useState } from 'react';
import HandIcon from './HandIcon';
import { compareHand, generateRandomHand } from './utils';

const INITIAL_VALUE = 'rock';
function getResult (me, other){
  const compareison = compareHand(me, other);
  if(compareison > 0)return '승리';
  if(compareison < 0)return '패배';
  return '무승부';
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherhand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);  //나의 점수
  const [otherScore, setOtherScore] = useState(0);  //상대 점수
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    //코드 작성
    //hand의 값을 nextHand로 바꿔주세요 (스태틱으로 변경)
    setHand(nextHand);


    //otherHand의 값을 generateRandomHand()의 리턴값으로 바꿔 주세요
    const nextOtherHand = generateRandomHand();
    setOtherHand(nextOtherHand);
    //승부결과
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);

    const compareison = compareHand(nextHand, nextOtherHand);
    if(compareison > 0) setScore(score + bet);
    if(compareison < 0) setOtherScore(otherScore + bet);




  };
  const handleClearClick = () => {
    // hand와 otherHand의 값을 'rock으로 변경 해주세요
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };
  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if(num > 9) num %= 10; //1과 9 사이의 숫자로 만들어줌
    if(num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  }
  
  return (
    <div className='App'>
      <h1 className="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick} >처음부터</Button>

      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>

      <div className="Box App-box">
        <div className="Box-inner">
          <div className="App-hands">
            <div className="Hand">
              <HandIcon className="Hand-icon" value={hand}/>
            </div>
            <div className="App-versus">VS</div>
            <div className="Hand">
              <HandIcon className="Hand-icon" value={otherhand}/>
            </div>
          </div>
          <div className="App-bet">
            <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}/>
          </div>
          <div className="App-history">
              <p>승부기록: {gameHistory.join(', ')}</p>
          </div>
        </div>
      </div>
      
      <div className="HandButtonContainer">
        <HandButton value="rock"    onClick={handleButtonClick}/>
        <HandButton value="scissor" onClick={handleButtonClick}/>
        <HandButton value="paper"   onClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default App;
