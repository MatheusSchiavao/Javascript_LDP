let spacialStation = {
  name: "Fox",
  platformsQuantity: 10,
  "new name": "Estelas",
  true: false,
  2: "Descoberta"
}
// error
// console.log(spacialStation.2)

// run
console.log(spacialStation["2"])

// error
// console.log(spacialStation.new name)

// run
console.log(spacialStation["new name"])