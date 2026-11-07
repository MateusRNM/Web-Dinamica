localStorage.setItem("theme", "dark");
localStorage.setItem("theme", "ambar");

const theme = localStorage.getItem("theme");
const x = localStorage.getItem("no");

const tasks = ["estudar", "revisar"];
localStorage.setItem("tasks", JSON.stringify(tasks));
const tasks_recovered = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks_recovered);