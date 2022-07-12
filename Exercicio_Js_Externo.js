alert(
  "Este arquivo JS será utilizado para informar a diferença de idade entre duas pessoas."
);

let name1 = prompt("Qual é o nome da pessoa mais velha?");

let age1 = prompt("Qual a idade de " + name1 + "?");

let name2 = prompt("Qual é o nome da pessoa mais nova?");

let age2 = prompt("Qual a idade de " + name2 + "?");

let ageDiference = age1 - age2;

alert(
  "O nome da pessoa mais velha é " + name1 + " e ele(a) tem " + age1 + " anos!"
);

alert(
  "O nome da pessoa mais nova é " + name2 + " e ele(a) tem " + age2 + " anos!"
);

alert(
  "A diferença de idade de " +
    name1 +
    " e " +
    name2 +
    " é de " +
    ageDiference +
    " anos!"
);
