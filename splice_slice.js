//Splice, substitui o array original
let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

console.log(spaceshipNames)

let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")

console.log(spaceshipNames)

console.log(removedSpaceships)

//Slice, extrai uma parte do array sem alterar o array original
let spaceshipName = ["Elemental", "Darwin", "Ártemis", "Supernova"]

let extractedNames = spaceshipName.slice(1, 3)

console.log(spaceshipName)

console.log(extractedNames)