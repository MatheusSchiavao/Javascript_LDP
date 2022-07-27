const hitchedSpaceships = [
  ["Fenix", 8, true],
  [" Golias", 10, true],
  [" Helmet", 5, false],
  [" Elemental", 3, true],
  [" Darwin", 15, false],
];

var with9People = hitchedSpaceships
  .filter((spaceship) => {
    return spaceship[1] > 9;
  })
  .map((spaceship) => {
    return spaceship[0];
  });

var pendentSpaceship = hitchedSpaceships.findIndex((spaceship) => {
  return spaceship[2] == false;
});

var upcasedSpaceships = hitchedSpaceships.map((spaceship) => {
  return spaceship[0].toUpperCase();
});

var message =
  "Espaçonaves com mais de 9 tripulantes: " + with9People.join(", ");
message += "\nPlataforma com processo de engate: " + (pendentSpaceship + 1);
message += "\nEspaçonaves destacadas: " + upcasedSpaceships.join(", ");

alert(message);

//Outro jeito de dar o alert
// alert(
//   "Nave com 9 ou mais tripulantes: " +
//     with9People +
//     "\nNave com engate pendente: " +
//     pendentSpaceship +
//     "\nNaves com nome em caixa alta: " +
//     upcasedSpaceships
// );
