document.addEventListener('DOMContentLoaded', () => {
  const imagens = [
    '../Imagens/Copia_de_00035-4_318x451.png',
    '../Imagens/9786555550085_2906_318x451.jpg',
    '../Imagens/LEAIAPR_00034_318x451.png'
  ];

  let indice = 0;
  const imagem = document.querySelector('.carrossel__imagem'); 
  const botaoEsquerdo = document.querySelector('#botao-esquerdo');
  const botaoDireito = document.querySelector('#botao-direito');
  const paginacao = document.querySelector('.paginacao');
  imagens.forEach((_, i) => {
    const bolinha = document.createElement('span');
    if (i === 0) bolinha.classList.add('ativo');
    paginacao.appendChild(bolinha);
  });
  const bolinhas = document.querySelectorAll('.paginacao span');
  function atualizarImagem() {
    imagem.src = imagens[indice];
    bolinhas.forEach(b => b.classList.remove('ativo'));
    bolinhas[indice].classList.add('ativo');
  }
  botaoEsquerdo.addEventListener('click', () => {
    indice = (indice - 1 + imagens.length) % imagens.length;
    atualizarImagem();
  });
  botaoDireito.addEventListener('click', () => {
    indice = (indice + 1) % imagens.length;
    atualizarImagem();
  });
  bolinhas.forEach((b, i) => {
    b.addEventListener('click', () => {
      indice = i;
      atualizarImagem();
    });
  });
  setInterval(() => {
    indice = (indice + 1) % imagens.length;
    atualizarImagem();
  }, 5000);
});
