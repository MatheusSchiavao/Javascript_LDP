let velocity = 100;
let spaceship = "Elemental";
let velocity2 = 90;

switch (velocity * 2) {
  case 100:
    console.log("Sua velocidade é 100km/s");
    break;
  case 160:
    console.log("Sua velocidade é 160km/s");
    break;
  default:
    console.log("Velocidade não identificada");
}

switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente");
    break;
  case "Raptor":
    console.log("Nave mais rápida");
    break;
  case "Enterprise":
    console.log("Nave a frota Estelar");
    break;
  default:
    console.log("Nave comum");
}

switch (velocity2) {
  case 80:
  case 90:
  case 100:
    console.log("Velocidade aceitável");
    break;
  case 110:
    console.log("Velocidade alta, mas aceitável");
    break;
  default:
    console.log("Velocidade não identificada");
}

switch (spaceship) {
  case "Golias":
    console.log("Nave mais resistente");
    break;
  case "Elemental":
    console.log("Nave com melhor armamento");
    break;
  case "Helmet":
    console.log("Rápida ativação de escudo");
    break;
  case "Frontier":
    console.log("Nave de infantaria");
    break;
  case "Enterprise":
    console.log("Nave a frota Estelar");
    break;
  default:
    console.log("Não conheço a nave");
}
