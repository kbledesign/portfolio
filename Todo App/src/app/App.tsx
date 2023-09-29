import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Todo } from "../interface/Interfaces"
import { v4 as uuidv4 } from "uuid"
import TodoTask from "../components/TodoTask"

import { setTodo, completeTask, selectTodos } from "./AppSlice"
import "../scss/styles.scss"


const App: React.FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  // const [todo, setTodo] = useState<Todo[]>()

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = () => {
    const id = uuidv4();
    const newTask = {
      taskName: task,
      deadline: deadline,
      id
    }
    // setTodo([...todo, newTask])
    dispatch(setTodo(newTask))
    setTask("")
    setDeadline(0)
  }

  const removeTodo = (taskNameToDelete: string) => {
    const taskToRemove = {
      taskName: taskNameToDelete
    }
    dispatch(completeTask(taskToRemove))

  }

  return (
    <>
      <div className="App">
        <div className="create-task-cont">
          <h2>Add Task:</h2>
          <div className="add-task">
            <div>
              <label htmlFor="task">
                <strong>Add:</strong>
              </label>
              <input type="text" id="task" name="task" placeholder="Add a task" value={task} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="deadline"><strong>Deadline:</strong></label>
              <input type="number" id="deadline" name="deadline" placeholder="set a deadline in days" value={deadline} onChange={handleChange} />
            </div>
            <div>
              <button onClick={addTask}>Add</button>
            </div>
          </div>
        </div>

        <div className="todoList">
          <h2>To do's:</h2>
          {
            todos.length > 0 ?
              todos.map((task: Todo) => {
                return (
                  <TodoTask task={task} removeTodo={removeTodo} key={task.id} />
                )
              }) : (<p>Nothing to do here...</p>)
          }
        </div>

      </div>
    </>
    )
}

export default App

