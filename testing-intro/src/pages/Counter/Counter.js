import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [scores, setScores] = useState([]);
  return (
    <>
      <article>
        <h1>Counter</h1>
        <button data-cy="increaseBtn" onClick={() => setCounter((p) => p + 1)}>
          +1
        </button>
        <input type="text" data-cy="counterOutput" readOnly value={counter} />
        <button data-cy="decreaseBtn" onClick={() => setCounter((p) => p - 1)}>
          -1
        </button>
        <button
          data-cy="saveBtn"
          onClick={() => setScores((prevScores) => [...prevScores, counter])}
        >
          Save score
        </button>
        <button
          data-cy="resetBtn"
          onClick={() => {
            setCounter(0);
            setScores([]);
          }}
        >
          Reset counter value
        </button>
      </article>
      <article>
        {scores.length === 0 ? (
          <p data-cy="emptyState">No scores yet</p>
        ) : (
          <ul>
            {scores.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
};
