import React, { useEffect, useState, useTransition } from "react";

/**
 * 
 * startTransition lets you mark updates in the provided callback as transitions:
 * To mark UI updates that don't need urgent ressources for updating

 */
const AutomaticBatching = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // while execute one time event we change two states
    console.log("Render...");
  });

  // batch all state updates even inside setTimeout, promises, event callbacks
  const handleClick = () => {
    setTimeout(() => {
      setCount((oldCount) => {
        return oldCount + 1;
      });

      // this first & later counter 1
      setCount2((oldCount) => {
        return oldCount + 1;
      }, 0);
    });
  };
  return (
    <div className="counter">
      <button onClick={handleClick}>Change Counters</button>
      <p>Count One: {count}</p>
      <p>Count Two: {count2}</p>
    </div>
  );
};

export default AutomaticBatching;
