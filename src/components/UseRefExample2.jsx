import { useState, useRef, useEffect } from "react";

const UseRefExample2 = () => {
  //standard state variable, will update to whatever is typed into input thanks to the input's onChange property
  const [name, setName] = useState("");
  //created a useref thing - not connected to a dom element, with a default value of 1
  const renders = useRef(1);
  //create another useref thing -   we'll use this to get the previous state of the 'name' state variable. default value is an empty string
  const prevName = useRef("");

  //useeffect, will run everytime 'name' state variable changes
  useEffect(() => {
    //this will increase value of renders (useref variable) by 1 each time it's run
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h3>useRef example 2 - get previous state </h3>
      <h1>Renders: {renders.current}</h1>
      <h1>Previous 'name' State: {prevName.current}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseRefExample2;
