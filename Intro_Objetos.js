let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Batalha"
}

// Aparece todos os valores do objeto
console.log(spaceship)
// Aparece apenas o valor do type
console.log(spaceship.type)
// Outra forma de chamar uma propriedade do objeto
console.log(spaceship["name"])

// valores por fora
spaceship.isHitched = false
spaceship["shieldLevel"] = 100

// base de chamar uma propriedade
console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

//Objetos vazios
let spaceship = {}
let spaceship = new Object()