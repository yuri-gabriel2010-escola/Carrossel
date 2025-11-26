// lista de imagens locais
const imagens = ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg", "foto4.jpeg"];

// começa na primeira imagem
let indice = 0;

// seleciona elementos HTML
const imagem = document.getElementById("imagem");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

// quando clicar em "proximo"
botaoProximo.addEventListener("click", () => {
  indice++;
  if (indice >= imagens.length) {
    indice = 0;
  }
  imagem.src = imagens[indice];
});

// quando clicar em "anterior"
botaoAnterior.addEventListener("click", () => {
    indice--;
    if (indice < 0){
        indice = imagens.length - 1;
    }
    imagem.src = imagens[indice];
});