//Função push, add um elemento no final
let hitchedSpaceship = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceship)

hitchedSpaceship.push("Supernova")

console.log(hitchedSpaceship)


//função pop, remove o ultimo elemento
let hitchedSpaceships0 = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships0)

hitchedSpaceships0.pop()

console.log(hitchedSpaceships0)


//Função pop também retorna o valor excluído
let hitchedSpaceships3 = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships3)

let removedSpaceship3 = hitchedSpaceships.pop()

console.log(removedSpaceship3)


//Função shift, remove o primeiro elemento
let hitchedSpaceships4 = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships4)

let removedSpaceship4 = hitchedSpaceships4.shift()

console.log(hitchedSpaceships4)

console.log(removedSpaceship4)

//Função unshift, add um elemento no começo
let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships)

 hitchedSpaceships.unshift("Fenix")

console.log(hitchedSpaceships)

//.Length, imprime o tamanho do array
let hitchedSpaceships2 = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships2.length)

//função .indexOf, procurar a posição do elemento
let hitchedSpaceships1 = ["Colossus", "Elemental", "Helmet"]

let elementalPos = hitchedSpaceships1.indexOf("Elemental")

console.log(elementalPos)