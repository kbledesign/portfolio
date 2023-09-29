import { Todo } from "../interface/Interfaces"

interface Props {
    task: Todo;
    removeTodo(taskNameToDelete: string): void;
}

const TodoTask = ({ task, removeTodo }: Props) => {
    return (
        <div className="task-cont">
            <div className="task">
                <div><strong>Task:</strong> {task.taskName}</div>
                <div><strong>Due in:</strong> {task.deadline} days</div>
                <div>
                    <button onClick={() => removeTodo(task.taskName)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default TodoTask;