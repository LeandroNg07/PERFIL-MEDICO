0// botoes header
function clicou(obj)
{
    const collection = document.getElementsByClassName("navHeader")
    
    for(let i = 0; i < collection.length; i++){
    collection[i].classList.remove("selected");
    }
    obj.classList.add("selected");    
}

/*
    //MUDAR COR
 // Obtém o elemento do botão pelo seu ID
 const bots = document.getElementsByClassName('btnclass');
 // Adiciona um ouvinte de eventos para o evento de clique

for (let i = 0; i < bots.length; i++) {
   bots[i].addEventListener('click', function() {
    if (bots[i].classList.contains('initialColor')) {
      bots[i].classList.remove('initialColor');
      // Altera a cor do botão adicionando a classe 'botao-selecionado'
      bots[i].classList.add('botao-selecionado2'); 
      bots[i].textContent = 'Consulta concluida!';
    }
    else{
      bots[i].classList.remove('botao-selecionado2');
      // Altera a cor do botão adicionando a classe 'botao-selecionado'
      bots[i].classList.add('initialColor'); 
      bots[i].textContent = 'Concluir Consulta';
    }
  });
}
*/



   //ALTERAR O QUE ESTA ESCRITO NO BOTAO COM ONCLICK

   function alterarTexto(obj){

    //Se clicar
    if (obj.classList.contains('initialColor')) { // se o obj tiver a class initialColor
      obj.classList.remove('initialColor'); //remove a initialColor
      // Altera a cor do botão adicionando a classe 'botao-selecionado'
      obj.classList.add('botao-selecionado2'); //Adiciona a class botao-selecionado2 que muda a cor
      obj.textContent = 'Consulta concluida!';//Altera o texto do botao
    }
    //Se não ter clicado (click novamente)
    else{
      obj.classList.remove('botao-selecionado2'); //remove a class botao-selecionado2 que muda a cor
      // Altera a cor do botão adicionando a classe 'botao-selecionado'
      obj.classList.add('initialColor'); //adiciona a cor do class initialColor que é a cor inicial
      obj.textContent = 'Concluir Consulta';// altera o texto 
    }
    

   }
    