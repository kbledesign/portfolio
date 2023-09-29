import { configureStore } from "@reduxjs/toolkit"

import todosReducer from "./AppSlice"

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})
