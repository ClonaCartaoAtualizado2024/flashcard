function criCartao (categoria, pergunta, resposta) {
  let container = document.getElementById('container');
  let cartao = documentcreateElement('article);
  cartao.className = 'cartap';


cartao.innerHTML = `
  <div class="cartao__conteudo">
   <h3>${categoria}</h3>
   <div class="cartao__conteudo__perguta">
   <p>${pergunta}</p>
   </div>
   <div class="cartao__pergunta">
   <p>${resposta}</p>
   </div>
  </div> 

  container.appendChild(cartao)
  }
