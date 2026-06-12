import './App.css';
import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [title, setTitle] = useState(['경기도', '강원도', '제주도']);
  const [clickup, setClickup] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>React Blog</h4>
      </div>

      <div className="list">
        <h4 onClick={() => {
          setModal(!modal);
        }}>{title[0]} <span onClick={() => {
          setClickup(clickup + 1);
        }}>👍</span> {clickup}</h4>
        <p>2월 17일 발행</p>

        <button onClick={() => {
          const copy = [...title];
          copy[0] = '충청도';
          setTitle(copy);
        }}>제목 변경</button>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <button onClick={() => {
        const copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>제목 정렬</button>

      {
        modal === true ? <Modal /> : null
      }
    </div>
  );
}

export default App;