export default function xmlhttprequest() {

    const fetchTodos = (callback) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                callback(response);
            }
        }
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/100 ")
        xhr.send();
    }

    const handleTodos = (todos) => {
        console.log("Todos", todos);
    }

    fetchTodos(handleTodos);

};

