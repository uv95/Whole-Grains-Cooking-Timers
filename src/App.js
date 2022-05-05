import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import GrainsContainer from './components/GrainsContainer';
import TimerContainer from './components/TimerContainer';

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [timerName, setTimerName] = useState('');
  const [grainsTime, setGrainsTime] = useState(15);

  const handleToggleTimer = function (e) {
    if (
      e.target.className === 'grains-img' ||
      e.target.className === 'timer-container--btn-close' ||
      e.target.textContent === 'STOP'
    ) {
      setShowTimer(!showTimer);
      setTimerName(e.target.alt);

      switch (e.target.alt) {
        case 'MILLET':
        case 'PEARL BARLEY':
        case 'BARLEY':
          setGrainsTime(45);
          break;
        case 'COUSCOUS':
          setGrainsTime(5);
          break;
        case 'FARRO':
          setGrainsTime(60);
          break;
        default:
          setGrainsTime(15);
      }
    }
  };

  return (
    <main className="main">
      <Header />
      {!showTimer ? (
        <GrainsContainer onClick={handleToggleTimer} />
      ) : (
        <>
          <GrainsContainer onClick={handleToggleTimer} />
          <TimerContainer
            onClick={handleToggleTimer}
            name={timerName}
            grainsTime={grainsTime}
          />
        </>
      )}
    </main>
  );
}

export default App;
