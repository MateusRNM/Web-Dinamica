const item1 = document.querySelector(".l1");
const btn = document.querySelector("#enviar");
const lista = document.getElementsByClassName("novo")[0];
item1.classList.add("ativo");

const novoLi = document.createElement("li");
novoLi.innerText = "Igor";
lista.append(novoLi);

btn.addEventListener("click", () => {
    alert("Clicou!")
});