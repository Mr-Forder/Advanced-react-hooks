import { useState, useEffect, useRef, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);

  const [inc, setInc] = useState(0);

  //calls our 'expensive' function to calculate square root of whatver number (state variable set by input + rerender button)
  // const sqrt = getSqrt(number);

  //memoised version!
  //useMemo takes in 2 arguments, first is what we want it to do (call our expensive function) and a dependency array.
  // now, when you change the number, the expensive function will run, but if you click rerender, it will not.
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };
  return (
    <div>
      <h1>UseMemoExample</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h2>
        The square root of {number} is {sqrt}
      </h2>
      <button
        onClick={() => {
          onClick();
        }}
      >
        Rerender
      </button>

      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

//Our "expensive" function
function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }
  console.log("expensive function called");
  return Math.sqrt(n);
}

export default UseMemoExample;
