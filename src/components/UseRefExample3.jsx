import { useState } from "react";
import Todo from "./Todo";
//Fix a memory leak when a component fetching api data unmounts before the fetch request is complete with useref!
const UseRefExample3 = () => {
  //toggle todo visibility - when false, todo component is UNMOUNTED, when true, it mounts.
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      <h1>UseRef Example 3</h1>
      {showTodo && <Todo />}
      <button className="btn" onClick={() => setShowTodo(!showTodo)}>
        Toggle todos
      </button>
    </div>
  );
};

export default UseRefExample3;
