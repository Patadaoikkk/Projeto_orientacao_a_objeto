// Abstração
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    emitirSom() {
      console.log(`${this.nome} faz um som.`);
    }
  }
  
  // Herança
  class Mamifero extends Animal {
    constructor(nome, tipoDePelagem) {
      super(nome);
      this.tipoDePelagem = tipoDePelagem;
    }
  
    amamentar() {
      console.log(`${this.nome} está amamentando.`);
    }
  }
  
  // Agregação
  class Jaula {
    constructor() {
      this.animais = [];
    }
  
    adicionarAnimal(animal) {
      this.animais.push(animal);
    }
  
    listarAnimais() {
      console.log("Animais na jaula:");
      this.animais.forEach((animal) => {
        console.log(animal.nome);
      });
    }
  }
  
  // Composição
  class Zoologico {
    constructor() {
      this.jaulas = [];
    }
  
    adicionarJaula(jaula) {
      this.jaulas.push(jaula);
    }
  
    listarAnimaisNoZoologico() {
      console.log("Animais no zoologico:");
      this.jaulas.forEach((jaula) => {
        jaula.listarAnimais();
      });
    }
  }
  
  // Polimorfismo
  class Ave extends Animal {
    voar() {
      console.log(`${this.nome} está voando.`);
    }
  }
  
  // Encapsulamento
  class Pessoa {
    #nome; // Propriedade privada
  
    constructor(nome) {
      this.#nome = nome;
    }
  
    getNome() {
      return this.#nome;
    }
  
    setNome(novoNome) {
      this.#nome = novoNome;
    }
  }
  
  // Exemplo de uso
  const leao = new Mamifero("Leão", "Pelagem curta");
  const passaro = new Ave("Pássaro");
  const jaulaMamiferos = new Jaula();
  const jaulaAves = new Jaula();
  
  jaulaMamiferos.adicionarAnimal(leao);
  jaulaAves.adicionarAnimal(passaro);
  
  const zoologico = new Zoologico();
  zoologico.adicionarJaula(jaulaMamiferos);
  zoologico.adicionarJaula(jaulaAves);
  
  zoologico.listarAnimaisNoZoologico();
  
  leao.amamentar(); // Herança
  passaro.voar(); // Polimorfismo
  
  const pessoa = new Pessoa("João");
  console.log(`Nome da pessoa: ${pessoa.getNome()}`);
  pessoa.setNome("Maria");
  console.log(`Novo nome da pessoa: ${pessoa.getNome()}`);