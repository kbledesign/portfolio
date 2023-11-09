export default function test() {
    const url = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script)

    const endpoint = "https://jsonplaceholder.typicode.com/todos/100";

    script.onload = function () {
        axios.get(endpoint)
            .then((response) => {
                console.log("Axios Todos Response", response);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
}
