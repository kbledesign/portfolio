export interface Todo {
    taskName: string;
    deadline: number;
    id: string;
}

export interface TodoState {
    todos: Todo[]
}

export interface TodoRemove {
    taskName: string;
}

export interface TotalState {
    todos: TodoState
}