import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoState, TodoRemove, TotalState } from "../interface/Interfaces"

const exampleTasks = [
    {
        taskName: "Call mom...",
        deadline: 4,
        id: "094bc460-d160-4e3b-85fe-38fbe60bbe0c"
    },
    {
        taskName: "Eat pizza...",
        deadline: 3,
        id: "094bc460-d160-4e3b-85fe-38fbe60bbe03"
    }
]

const initialState: TodoState = {
    todos: exampleTasks
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setTodo: (state, action: PayloadAction<Todo>) => {
            state.todos = [...state.todos, action.payload]
        },
        completeTask: (state, action: PayloadAction<TodoRemove>) => {
            state.todos = state.todos.filter(
                (task) => {
                    return task.taskName !== action.payload.taskName
                }
            )
        }
    }
})

export const selectTodos = (state: TotalState) => {
    console.log("3", state)
    return state.todos.todos;
}
export const { setTodo, completeTask } = todoSlice.actions;
export default todoSlice.reducer;

