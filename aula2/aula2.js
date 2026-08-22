// for(let i = 10; i >= 0; i--) {
//     console.log(`\nTabuada do ${i}:`)
//     for(let j = 0; j <= 10; j++) {
//         console.log(`${i}*${j} = ${i*j}`);
//     }
// }

function ehPar(n) {
    return n%2 == 0;
}

const ehPar2 = function(n) {
    return n%2 == 0;
}

const ehPar3 = (n) => !(n & 1);

console.log(ehPar3(69));