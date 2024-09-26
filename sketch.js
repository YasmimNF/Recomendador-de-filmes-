//Harry Potter, 12, aventura e fantasia
//Culpa minha, 16, romance e drama
//Maze runner, 14, ação e aventura
//Através da minha janela, 16, romance e drama
//Nos vemos em vênus, livre, drama

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let recomendacao = geraRecomendacao();
  text (recomendacao, width / 2, height / 2);
}

function geraRecomendacao() {
  if(idade >=12)
}