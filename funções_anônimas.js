// let doubleSpeed = function(velocity) {
//   return velocity * 2
// }

// let newVelocity = doubleSpeed(40)

// console.log(newVelocity)

//func tradicionais rodam antes, func anônimas não rodam antes de serem declaradas
console.log(speedUp(60, 10))
console.log(doubleSpeed(50))


let doubleSpeed = function(velocity) {
  return velocity * 2
}

function speedUp(velocity, acceleration) {
  return velocity + acceleration
}