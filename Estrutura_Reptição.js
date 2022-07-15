let velocity = 50
let acceleration = 5
let constellation = "Andromeda"
let pos = 0
let constellationLength = constellation.length



while(velocity <= 100) {
  console.log("Acelerando: Estamos a " + velocity + "km/s")
  velocity += acceleration // velocity = velocity + acceleration
}



while(pos < constellationLength) {
  if(constellation[pos] == "a" || constellation[pos] == "A"){
    console.log(pos)
  }
  pos += 1
}