# Hero Adventure 🛡️

Este projeto é uma solução para um desafio de lógica de programação focado em **Orientação a Objetos**. O objetivo é criar uma classe genérica que represente um herói de uma aventura e gerencie seus ataques baseados em seu tipo (classe).

## 📋 Requisitos Atendidos

O código demonstra o uso prático de:
- Variáveis e Operadores
- Laços de repetição (`for...of`)
- Estruturas de decisão (Objeto Map/Dicionário)
- Funções e Métodos
- Classes e Objetos

## 🚀 Funcionalidades

A classe `Hero` define um herói com:
- **Propriedades**: `nome`, `idade`, `tipo`.
- **Método `atacar()`**: Exibe uma mensagem personalizada no console baseada no tipo do herói.

| Tipo | Ataque |
|------|--------|
| Mago | usou magia |
| Guerreiro | usou espada |
| Monge | usou artes marciais |
| Ninja | usou shuriken |

## 🛠️ Tecnologias

- **JavaScript** (Node.js)

## 📂 Estrutura de Arquivos

- `hero.js`: Definição da classe `Hero` e lógica de normalização de dados.
- `index.js`: Script principal que instancia os objetos e executa os testes.

## ▶️ Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Abra o terminal na pasta do projeto.
3. Execute o comando:

```bash
node index.js
```

**Saída esperada:**
> o guerreiro atacou usando espada
> o mago atacou usando magia
> o monge atacou usando artes marciais
> o ninja atacou usando shuriken