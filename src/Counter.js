import React, { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  const handleStartPause = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setCounter(0);
    setRunning(false);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleStartPause}>{running ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
