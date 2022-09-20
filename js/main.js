const form = document.getElementById ('novoItem');
const lista = document.getElementById ('lista');
const itens = JSON.parse (localStorage.getItem ("itens")) || [];

itens.forEach ((elemento) =>{
      console.log (elemento.nome, elemento.quantidade);
     
});




//console.log (novoItem);

form.addEventListener ('submit', (evento) =>{
         evento.preventDefault ();
         //console.log ("funcionou");
         
        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];


        const itemAtual = {
            "nome": nome,
            "quantidade": quantidade
            
        }
        
         criaElemento (nome.value, quantidade.value );



         
    
        itens.push (itemAtual);
    
         localStorage.setItem ("itens",JSON.stringify (itens));


         nome.value = "";
         quantidade.value = "";
});




function criaElemento(nome,quantidade) {
    //console.log (nome);
    //console.log (quantidade);


    const novoItem = document.createElement ('li');
    novoItem.classList.add ("item");


    const numeroItem = document.createElement ('strong');
    numeroItem.innerHTML = quantidade;

   // console.log (numeroItem)


   novoItem.appendChild (numeroItem);
   novoItem.innerHTML += nome;
     //console.log (novoItem)
   

     
     lista.appendChild (novoItem);

    
     
     
}