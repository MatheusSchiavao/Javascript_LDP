let distanceLigthYear = prompt("Qual é a distância em anos-luz?");

let chosenOfOption = prompt(
  "Escolha uma das opções\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(Km)"
);

switch (chosenOfOption) {
  case "1":
    unity = "Parsec";
    convertedValue = distanceLigthYear * 0.306601;
    break;
  case "2":
    unity = "Unidade astronômica";
    convertedValue = distanceLigthYear * 63241.1;
    break;
  case "3":
    unity = "Quilômetros";
    convertedValue = distanceLigthYear * 9.5 * Math.pow(10, 12);
    break;
  default:
    unity = "Unidade não identificada";
    convertedValue = "Conversão fora do escopo";
}

alert(
  "Distância digitada: " +
    distanceLigthYear +
    " anos-luz \n" +
    unity +
    ": " +
    convertedValue +
    "."
);
