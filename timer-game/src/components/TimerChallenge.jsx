import React, { useRef, useState } from "react";
import Modal from "./Modal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const modal = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    modal.current.open();
  }

  const handleStop = () => {
    clearInterval(timer.current);
    modal.current.open();
  };

  const formattedRemainigTime = (timeRemaining / 1000).toFixed(2);

  return (
    <section className="challenge">
      <Modal targetTime={targetTime} remainingTime={formattedRemainigTime} onReset={handleReset} ref={modal} />
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && "s"}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
