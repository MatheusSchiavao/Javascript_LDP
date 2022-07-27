//forEach, percorre o array e pra cada elemento ele vai chamar o callback que chamarmos 
let hitchedSpaceships1 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships1.forEach(function(currentSpaceship, index) {
  console.log("Nave: " + currentSpaceship + "\nÍndice: " + index)
})

//map deixa os elementos maiúculo 
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship) {
  let upcased = currentSpaceship.toUpperCase()
  return upcased
})

console.log(upcasedSpaceships)

//Filter, ela vai filtrar os elementos do array, ela aguarda o retorno bouleano do callback para saber se o elemento passou no filtro ou não
//caso retorne "True", ela insere o elemento no array, caso retorne "False", ela não insere
let hitchedSpaceship = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Chars = hitchedSpaceship.filter(element => { return element.length >= 7})

console.log(with7Chars)

//Find, Ela irá retornar o primeiro elemento que cumpre com a requisição, ele retorna o elemento em si, não retorna dentro de um array
let hitchedSpaceship0 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

let with7Char = hitchedSpaceship0.find(element => { return element.length >= 7})

console.log(with7Char)