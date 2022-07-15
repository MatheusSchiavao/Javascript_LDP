let enterToShip = "";
let warpCount = 0;

let shipName = prompt("Qual é o nome da nave?");

enterToShip = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não");

while (enterToShip == "1") {
  warpCount += 1;
  alert("Dobra contabilizada com sucesso!");
  enterToShip = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não");
}
if (enterToShip == "2") {
  alert("Nome da nave: " + shipName + "\nNúmero de dobras: " + warpCount);
}
