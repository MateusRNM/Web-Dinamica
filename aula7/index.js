// const produtos = [
//     { nome: "Caderno", preco: 30.5, estoque: 10 },
//     { nome: "Caneta", preco: 8, estoque: 60 },
//     { nome: "Borracha", preco: 6.34, estoque: 78 },
//     { nome: "Lápis", preco: 7, estoque: 84 },
//     { nome: "Celular", preco: 1425.87, estoque: 6 },
//     { nome: "Notebook", preco: 3234.58, estoque: 8 },
//     { nome: "Nintendo Switch", preco: 2012.5, estoque: 4 },
//     { nome: "Nintendo Switch 2", preco: 4112.5, estoque: 2 }
// ];

// const nums = [1, 2, 3];
// const dobro = nums.map(num => num*2);

// const comDesconto = produtos.map(p => ({
//     nome: p.nome,
//     preco: parseFloat((p.preco * 0.9).toFixed(2)),
//     estoque: p.estoque
// }));

// localStorage.setItem("produtos", JSON.stringify(comDesconto));

// const y = [2, 3, 4, 5, 6, 7, 8].filter(n => n > 5).map(n => n * 2);
// console.log(y);

// const soma = produtos.reduce((acc, p) => acc + p.estoque, 0);
// console.log(soma);

// const somaEstoqueComFilter = produtos.filter(p => p.estoque > 5).reduce((acc, p) => acc+p.estoque, 0);
// console.log(somaEstoqueComFilter);

const API_URL = "https://jsonplaceholder.typicode.om";

async function getData() {
    try {
        const response = await fetch(`${API_URL}/posts`);
        console.log(response);
        if(!response.ok) {
            throw new Error("Erro na requisição");
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(`Erro: ${error.message}`);
    }
}

async function main() {
    const data = await getData();
    console.log(data);
}

main();