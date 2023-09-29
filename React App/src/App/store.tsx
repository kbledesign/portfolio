import { configureStore } from "@reduxjs/toolkit";
// import reducers

import todosReducer from "./AppSlice.js"

export const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})
