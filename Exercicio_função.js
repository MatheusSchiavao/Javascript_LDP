function namePilot(name) {
  let namePilot = prompt("Qual é o seu nome?");
  alert("Bem-vindo(a) " + namePilot);
}

namePilot();

let shipName = prompt("Qual o nome da nave?");

let velocity = 0;

let choiceOption = prompt(
  "Escolha uma das opções:\n1- Acelerar a nave em 5Km/s\n2- Desacelerar em 5km/h\n3- Imprimir dados a bordo\n4- Sair do programa"
);

while (choiceOption != 4) {
  validateOption(choiceOption);
  choiceOption = prompt(
    "Escolha uma das opções:\n1- Acelerar a nave em 5Km/s\n2- Desacelerar em 5km/h\n3- Imprimir dados a bordo\n4- Sair do programa"
  );
}

alert("Até mais!");

function validateOption(choiceOption) {
  switch (choiceOption) {
    case "1":
      speedUp();
      break;
    case "2":
      speedDown();
      break;
    case "3":
      ValueSpaceship();
      break;
    default:
      alert("Opção não encontrada");
  }
}

function speedUp() {
  alert("Acelerando a nave!");
  velocity += 5;
}

function speedDown() {
  if (velocity <= 0) {
    alert(
      "nave em velocidade 0!\nNão foi possivel diminuir a velocidade da nave."
    );
  } else {
    alert("Desacelerando a nave");
    velocity -= 5;
  }
}

function ValueSpaceship() {
  alert(
    "Nome da nave: " + shipName + "\nVelocidade da nave: " + velocity + "Km/s"
  );
}
