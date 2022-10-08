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
    "taven",
    "sora",
    "aloy",
    "elizabeth",
    "mario",
    "rayman",
  ]

  function randomWord() {
    return personajes[Math.floor(Math.random() * personajes.length)]
  }
  
  export { randomWord }