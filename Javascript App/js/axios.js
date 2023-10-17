export default function test_axios_api() {
    const url = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script)

    const todos = "https://jsonplaceholder.typicode.com/todos/100";

    script.onload = function () {
        axios.get(todos)
            .then((response) => {
                console.log("Axios Todos Response", response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
}
