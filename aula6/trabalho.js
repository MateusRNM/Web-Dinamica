const CHAVE = "tasks";
let minha_lista = load();

function load() {
    const text = localStorage.getItem(CHAVE) ?? "[]";
    return JSON.parse(text);
}

function save(tasks) {
    localStorage.setItem(CHAVE, JSON.stringify(tasks));
}

const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("limpar");
const input = document.getElementById("campo");
const list = document.getElementById("lista");

function render() {
    list.innerHTML = "";
    for(const task of minha_lista) {
        list.innerHTML += `<li>${task}</li>`;
    }
}

render();

addBtn.addEventListener("click", () => {
    const newTask = input.value;
    minha_lista.push(newTask);
    save(minha_lista);
    input.value = "";
    render();
});

clearBtn.addEventListener("click", () => {
    minha_lista = [];
    save(minha_lista);
    input.value = "";
    render();
});