alert("Bem-vindo(a) a nave espacial Helmet!");

let name = prompt("Qual é o seu nome piloto(a) ?");

let velocity = 0;

let newVelocity = prompt(name + ", Qual velocidae você gostaria de acelerar a nave?");

let velocityConfirm = confirm(
  "Confirme a velocidade desejada: " + newVelocity + " km/s."
);

if (velocityConfirm) {
  velocity = newVelocity;
}

if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
  alert("Você está devagar. Podemos aumentar mais");
} else if (velocity < 80) {
  alert("Parece uma boa velocidade para manter.");
} else if (velocity < 100) {
  alert("Velocidade alta. Considere diminuir");
} else {
  alert("Velocidade perigosa. Controle automático forçado.");
}

alert("Piloto(a): " + name + "\nVelocidade: " + velocity + "km/s")