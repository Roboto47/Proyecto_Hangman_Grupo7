var personajes = [
    "arkantos",
    "dante",
    "trevor",
    "subzero",
    "kirby",
    "pantheon",
    "steve",
    "nathan",
    "kratos",
    "deadpool",
]

function randomWord() {
  return personajes[Math.floor(Math.random() * personajes.length)]
}

export { randomWord }