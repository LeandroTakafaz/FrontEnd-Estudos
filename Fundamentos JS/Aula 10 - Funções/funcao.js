// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
    console.log("O dobro de " + x + " é " + (x * 2))
  }
  dobro(5)
  dobro(7)

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined
dobro()

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
  }
  dizerOla("Takafaz")
  dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separará-los por vírgula
function soma(a, b) {
    console.log(a + b)
  }
  soma(1, 1)
  soma(34, 5)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }
  
  criarUsuario("Takafaz", "takafaz@email.com", "1234")
  novoUsuario("Takafaz", "takafaz@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "Takafaz",
    telefone: "222",
    email: "Takafaz@gmail.com",
    senha: "333",
    aniversario: "22/22/22",
    endereco: "Av. A"
  }
  parametrosDoJeitoCerto(dadosDoUsuario)