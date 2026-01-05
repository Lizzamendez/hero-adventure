class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    // Mejora: Normalizamos a minúsculas para evitar errores si escriben "Mago" o "GUERREIRO"
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    // Mejora: Un objeto es más limpio y fácil de leer que un switch múltiple
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    };

    // Mejora: Obtenemos el ataque o un valor por defecto si el tipo no existe
    const ataque = ataques[this.tipo] || "um ataque desconhecido";

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

module.exports = Hero;
