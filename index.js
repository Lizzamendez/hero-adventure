const Hero = require("./hero");

const herois = [
  new Hero("Arthus", 30, "guerreiro"),
  new Hero("Merlin", 150, "mago"),
  new Hero("Lee", 40, "monge"),
  new Hero("Hanzo", 25, "ninja")
];

for (const heroi of herois) {
  heroi.atacar();
}
