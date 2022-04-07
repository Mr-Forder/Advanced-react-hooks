import useLocalStorage from "../hooks/useLocalStorage";

const UseLocalStorageExample = () => {
  //changed from a state variable to our new hook variable - takes in a specific key, and a default (initial) value for it. In this case, 'task' as a key. but we can call it anything
  const [task, setTask] = useLocalStorage("task", "");
  //Let's add another feature
  const [taskDescription, setTaskDescription] = useLocalStorage(
    "taskDescription",
    ""
  );

  //we can also use this hook to store arrays and objects, not just strings!
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  //submit handler, logic handles adding an array with objects into local storage using our hook - see the object it creates
  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task: task,
      taskDescription: taskDescription,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    //spread iniital (empty array, adding our new task object into it)
    setTasks([...tasks, taskObj]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label className="form-label">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <label className="form-label">Task Description</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <hr />

      {tasks.map((task) => (
        <div key={task.task}>
          <h2>{task.task}</h2>
          <h2>{task.taskDescription}</h2>
          <h5>{task.date}</h5>
          <h5>Completed? {task.completed ? "YES" : "NO"}</h5>
        </div>
      ))}
    </div>
  );
};

export default UseLocalStorageExample;
