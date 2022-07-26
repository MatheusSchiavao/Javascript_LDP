// error, undefined
function greetPilot(name, mensage = "olá") {
  alert(mensage + ", " + name)
}

greetPilot()


//error valor específico no meio
function speedUp(velocity, unit = "Km/s", acceleration) {
  let newVelocity = velocity + acceleration
  alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, 20)


//correto valor específico no final
function speedUp(velocity, acceleration, unit = "Km/s") {
  let newVelocity = velocity + acceleration
  alert("Nova velocidade: " + newVelocity + unit)
}

speedUp(50, 20)