alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Qual seu nome, piloto?");

let age = prompt("Qual a sua idade?");

let ageConfirmation = confirm("Você tem " + age + " anos?");

alert("Nome: " + name);
alert("Idade: " + age);
alert("Idade confirmada: " + ageConfirmation);
