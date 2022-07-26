function greetPilot(name, mensage) {
  alert(mensage + ", " + name)
}

greetPilot("Matheus", "Seja bem-vindo")


//parâmetro padrão de mensagem
function greetPilot(name, mensage = "olá") {
  alert(mensage + ", " + name)
}

greetPilot("Matheus")