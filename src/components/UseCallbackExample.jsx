import { useCallback, useState } from "react";

const UseCallbackExample = () => {
  //tasks state, default empty array
  const [tasks, setTasks] = useState([]);
  //a function, takes in previous state, and spreads it, adding 'some task' to the existing array
  const addTask = () => {
    setTasks((prevState) => [...prevState], "some task!");
  };

  return (
    <div>
      {/* <Button addTask={addTask} /> */}
      ffs
    </div>
  );
};

//our button component - could create it in another file and import, but we wont' here - takes in our addTask function - runs it onclick

export default UseCallbackExample;
