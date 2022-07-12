let spaceship = "Elemental"
let velocity = 20


//
//Tabela Verdade E (&&)
//

console.log(spaceship.length == 9 && velocity > 15)
// V e V = V

console.log(velocity > 10 && velocity < 19)
// // V e F = F

console.log(velocity < 17 && spaceship == "Elemental")
// F e V = F

console.log(spaceship == "Golias" && velocity > 21)
// F e F = F


//
//Tabela Verdade ou (||)
//

console.log(spaceship.length == 9 || velocity > 15)
// V ou V = V

console.log(velocity > 10 || velocity < 19)
// V ou F = V

console.log(velocity < 17 || spaceship == "Elemental")
// F ou V = V

console.log(spaceship == "Golias" || velocity > 21)
// F ou F = F


//
//Tabela Verdade nao (!)
//

console.log(!(velocity > 10))
// NÃO V = F

console.log(!(spaceship == "Golias"))
// NÃO F = V


//
//Exemplo com todas as operações
//

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15))
// !(velocity > 25 && spaceship == "Elemental") || (17 == 17 && 10 > 15))
// !(F && V) || (V && F))
// !F || F
// V || F
// V