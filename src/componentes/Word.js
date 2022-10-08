var personajes = [
    "manzana",
    "naranja",
    "uva",
    "anana",
    "banana",
    "frutilla",
    "kiwi",
    "tomate",
]

function randomWord() {
  return personajes[Math.floor(Math.random() * personajes.length)]
}

export { randomWord }