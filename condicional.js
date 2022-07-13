let velocity = 80

//
// If Else padrão
//

if(velocity < 100) {
  console.log("Estamos numa velocidade aceitável")
} else{
  console.log("Entrando em velocidade de risco")
}

//
//If Else com mais estruturas
//

if(velocity <= 40) {
   console.log("Velocidae baixa")
 } else{
   if(velocity <= 100){
     console.log("Cuidado! Próximo a velocidade de risco")
   } else {
     console.log("Velocidade de risco!")
   }
 }

//
//If Else com mais estruturas, Else if
//

if(velocity <= 40) {
   console.log("Velocidae baixa")
 } else if(velocity <= 100){
     console.log("Cuidado! Próximo a velocidade de risco")
   } else {
     console.log("Velocidade de risco!")
   }

//
//If de uma linha (Operador ternário)
//

(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")