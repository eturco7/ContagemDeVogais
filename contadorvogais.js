let frase = 'CR7 é o melhor de todos os tempos';
let minuscula = frase.toLowerCase();
let separacao = minuscula.split("");
let vogais = ['a', 'e', 'i', 'o', 'u'];

let vogaisEncontradas =  separacao.filter(letra => vogais.includes(letra))
let numero = vogaisEncontradas.length

console.log("A frase é: "+ frase);
console.log("As vogais encontradas são: " + vogaisEncontradas);
console.log("O número total de vogais é: " +  numero);