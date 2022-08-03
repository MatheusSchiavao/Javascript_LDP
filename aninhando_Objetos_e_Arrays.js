// Objeto com array
let spaceship = {
  name: "Supernova",
  type: "Batalha",
  crew: ["Cap. Silva", "Ana Júlia", "Thiago"],
};

spaceship.crew.push("Ten. Fernanda");

console.log(spaceship);

// array com objeto
let spaceships = [
  { name: "Elemental", crewQuantity: 10 },
  { name: "Colossus", crewQuantity: 8 },
  { name: "Helmet", crewQuantity: 15 },
];

console.log(spaceships[0].name);

console.log(spaceships[1].crewQuantity);

spaceships.forEach((spaceships1) => {
  alert(spaceships1.name + "tem " + spaceships1.crewQuantity + " tripulantes.");
});

// Objeto dentro de outro Objeto
let spaceship2 = {
  name: "Golias",
  maxCrew: 20,
  captain: {
    name: "Hugo trent",
    age: 37,
  },
};

console.log(spaceship.captain.name);
