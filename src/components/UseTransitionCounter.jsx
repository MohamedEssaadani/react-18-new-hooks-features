import React, { useState, useTransition } from "react";

/**
 * 
 * startTransition lets you mark updates in the provided callback as transitions:
 * To mark UI updates that don't need urgent ressources for updating

 */
const UseTransitionCounter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    // setCount((oldCount) => {
    //   console.log("Counter 1 changing***");
    //   return oldCount + 1;
    // });
    startTransition(() => {
      // mark setCount as non urgent state update
      setCount((oldCount) => {
        console.log("Counter 1 changing***");
        return oldCount + 1;
      });
    });

    // this first & later counter 1
    setCount2((oldCount) => {
      console.log("Counter 2 changing****");
      return oldCount + 1;
    });
  };
  return (
    <div className="counter">
      {isPending && <h3>{"Loading..."}</h3>}
      <button onClick={handleClick}>Change Counters</button>
      <p>Count One: {count}</p>
      <p>Count Two: {count2}</p>
    </div>
  );
};

export default UseTransitionCounter;
