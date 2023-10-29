const form = document.querySelector("form.input");
const output = document.querySelector("div.output");

function transformValue(str) {
    return str.toUpperCase();
}

function submitHandler(e) {
    e.preventDefault();

    const inputElement = form.elements["input_field"]
    const inputValue = inputElement.value.length ? inputElement.value : "No value...";
    const newValue = transformValue(inputValue);

    output.textContent = newValue;
    console.log("Transformed Input Value:", newValue);

}

form.addEventListener("submit", submitHandler);

