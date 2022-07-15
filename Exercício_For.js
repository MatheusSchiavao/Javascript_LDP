let spaceship = prompt("Qual é o nome da espaçonave?");

let newCaracter = prompt(
  "Por qual caractere você deseja substituir do nome da espaçonave? " +
    spaceship
);

let caracter = prompt("Qual o caractere você deseja adicionar?");

let newSpaceship = "";

for (let pos = 0; pos < spaceship.length; pos++) {
  if (spaceship[pos] == newCaracter) {
    newSpaceship += caracter;
  } else {
    newSpaceship += spaceship[pos];
  }
}

alert("O novo nome da nave é: " + newSpaceship);

//
// Elemental
// e
// y
//

// pos = 0  E  e  newSpaceship = E
// pos = 1  l  e  newSpaceship = El
// pos = 2  e  e  newSpaceship = Ely
// pos = 3  m  e  newSpaceship = Elym
// pos = 4  e  e  newSpaceship = Elymy
// pos = 5  n  e  newSpaceship = Elymyn
// pos = 6  t  e  newSpaceship = Elymynt
// pos = 7  a  e  newSpaceship = Elymynta
// pos = 8  l  e  newSpaceship = Elymyntal