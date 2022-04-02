import { useState, useEffect, useRef } from "react";

const Todo = () => {
  //here, we can create a memory leak by forcing an api request to take a specific amount of time, then unmounting the component before the request
  //completes. We do this by placing our request inside a timeout and then unmounting the component before the request is resolved.
  // we can fix this memory leak by altering the useEffect to only run if a ref variable is true. To do this, we can set the useEffect to specifically run code on unmount
  // by adding a return arrow statement. the code sets the reference variable to false, so we can add the code to an if statememnt asking if the current value of the ref
  //is true or not. if it is, code will executed, if not, the code is cancelled, stopping the memory leak from happening
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  //useeffect, runs on component mount and update (empty dependancy array) - fetches backend data and sets todo state variable to the fetched data.
  // ive added a timeout of 3 seconds so we can unmount the component in the example file and force a memory leak.

  //useRef, not connected or targeting anythg, default set to boolean true
  const isMounted = useRef(true);
  useEffect(() => {
    //fetch request
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          //added a check to see if isMounted is true, if so, executes code block
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    //runs when component is unmounted
    return () => {
      //set our isMounted reference current value to false
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>Todo:</h3>
      <h4>
        {todo.id}:{todo.title}
      </h4>

      <p>
        <strong>Completed? </strong>
        {todo.completed ? "Yes" : "no"}
      </p>
    </div>
  );
};

export default Todo;
