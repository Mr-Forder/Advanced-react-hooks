import { useState } from "react";
import Todo from "./Todo";

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
