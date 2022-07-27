//add mais um elemento no array
let hitchedSpaceships = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10] ]

hitchedSpaceships.push(["Colossus", 8])

console.log(hitchedSpaceships)

//mostrando apenas o nome do elemento "Supernova"
let hitchedSpaceship = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10] ]

console.log(hitchedSpaceship[3][0])

//imprime o valor "True", [3] último elemento, [1] = elemento true or false, [0] = valor true
let hitchedSpaceships1 = [ ["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", [true, false] ] ]

console.log(hitchedSpaceships1[3][1][0])