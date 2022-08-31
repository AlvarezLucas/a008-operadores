// Pergunte para o usuario dois numeros
// O primeiro numero e maior que o segundo? true
// O primeiro numero e igual ao segundo? false
// O primeiro numero e divisivel pelo segundo? true
// O segundo numero e divisivel pelo primeiro? true

//divisivel = com resto zero


const numero1 = Number (prompt("Digite um numero"))
console.log(numero1)
const numero2 = Number (prompt("Digite outro numero")) 
console.log(numero2)

console.log("O primeiro numero e maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero e igual ao segundo?", numero1 == numero2)
console.log("O primeiro numero e divisivel pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero e dividido pelo primieor", numero2 % numero1 === 0)



