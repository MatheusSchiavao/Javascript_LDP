function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration
  console.log("Nova aceleração: " + newVelocity)
  return newVelocity
}

//não necessário
console.log(speedUp(90, 10))

//Prático
speedUp(100, 20)

//não necessário
let velocity = 80
let acceleration = 5

console.log(velocity)

velocity = speedUp(velocity, acceleration)

console.log(velocity)