import React from 'react';
import ButtonClose from './ButtonClose';
import ButtonStart from './ButtonStart';
import { useState, useRef } from 'react';

function TimerContainer({ onClick, name, grainsTime }) {
  const [timeValue, setTimeValue] = useState(
    `${grainsTime.toString().padStart(2, '0')}:00`
  );
  const [dasharray, setDasharray] = useState(0);
  const [btnText, setBtnText] = useState('START');
  const [hover, setHover] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef();

  const playPause = function () {
    isPlaying ? myRef.current.pause() : myRef.current.play();
    setIsPlaying(true);
  };

  let timeLeft = {
    total: grainsTime * 60,
    min: grainsTime,
    sec: 0,
  };

  const updateTimer = function () {
    setTimeValue(
      `${timeLeft.min.toString().padStart(2, '0')}:${timeLeft.sec
        .toString()
        .padStart(2, '0')}`
    );
  };

  const getTimeLeft = function (end) {
    const curTime = Date.parse(new Date());
    const difference = end - curTime;
    let { total } = timeLeft;
    total = difference / 1000;

    const min = Math.trunc((total / 60) % 60);
    const sec = total % 60;

    return {
      total,
      min,
      sec,
    };
  };

  const handleStartTimer = function (e) {
    const end = Date.parse(new Date()) + timeLeft.total * 1000;
    setBtnText(`Don't forget to stir!`);
    setHover(false);
    if (btnText === `Don't forget to stir!` || btnText === `STOP`) return;
    const initialTotal = timeLeft.total;

    console.log(hover);
    const interval = setInterval(() => {
      timeLeft = getTimeLeft(end);
      updateTimer();
      setDasharray((1 - (timeLeft.total - 1) / initialTotal) * 283);
      if (timeLeft.total <= 0) {
        clearInterval(interval);
        setHover(true);
        playPause();
        setBtnText(`STOP`);
      }
    }, 1000);
  };

  return (
    <div className="timer-overlay">
      <div className="timer-container">
        <h2>{name}</h2>
        <ButtonClose onClick={onClick} />
        <div className="timer-container__timer">
          <svg
            className="timer-container__timer--circle"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" />
            <path
              strokeDasharray={dasharray + ' 283'}
              className="base-timer__path-remaining"
              d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
            ></path>
          </svg>
          <p>{timeValue}</p>
        </div>
        <ButtonStart
          hover={hover}
          onClick={btnText === `STOP` ? onClick : handleStartTimer}
          text={btnText}
        />
        <audio ref={myRef} src="timer.mp3"></audio>
        <img className="timer-container__img" src="img/wheat-bg.svg" alt="" />
      </div>
    </div>
  );
}

export default TimerContainer;
