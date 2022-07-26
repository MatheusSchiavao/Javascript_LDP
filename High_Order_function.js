function doubleVelocity(velocity, printer) {
  console.log("Entrei em doubleVelocity")
  let newVelocity = velocity * 2 
  printer(newVelocity)
  return newVelocity
}

let printVelocity = velocity => {
console.log("Nova velocidade: " + velocity + "Km/s")
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)


//Outro jeito de declarar o printer
//com function
let anotherVelocity = doubleVelocity(50, function(velocity) {
  console.log("Outra velocidade: " + velocity)
})

//com arrow function
let anotherVelocity2 = doubleVelocity(50, velocity => {
  console.log("Outra velocidade: " + velocity)
})