let spaceshipName = prompt("Qual é o nome da espaçonave?");

let invertedName = "";

for (let pos = spaceshipName.length - 1; pos >= 0; pos--) {
  if (spaceshipName[pos] == "e") break;
  invertedName += spaceshipName[pos];
}

alert(
  "Nome original da nave: " +
    spaceshipName +
    "\nnome após ocultação: " +
    invertedName
);
