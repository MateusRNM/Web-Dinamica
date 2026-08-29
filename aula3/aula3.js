let tasks = []

const taskOut = document.getElementById("tasks");
const taskIn = document.getElementById("inputTask");

function render() {
    taskOut.textContent = "";
    for(let task of tasks) {
        taskOut.innerText += task + "\n";
    }
}

function adicionarFim() {
    const task = taskIn.value;
    tasks.push(task);
    render();
}

function adicionarInicio() {
    const task = taskIn.value;
    tasks.unshift(task);
    render();
}