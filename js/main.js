const form = document.getElementById ('novoItem');
const lista = document.getElementById ('lista');
const itens = JSON.parse (localStorage.getItem ("itens")) || [];

itens.forEach ((elemento) =>{
      criaElemento (elemento);
     
});




//console.log (novoItem);

form.addEventListener ('submit', (evento) =>{
         evento.preventDefault ();
         //console.log ("funcionou");
         
        const nome = evento.target.elements['nome'];
        const quantidade = evento.target.elements['quantidade'];

        const existe = itens.find (elemento => elemento.nome === nome.value)

        const itemAtual = {
            "nome": nome.value,
            "quantidade": quantidade.value
            
        }
        

        if (existe) {
            itemAtual.id = existe.id
            atualizaElemento (itemAtual)

            itens[existe.id] = itemAtual;
        }else {
              
            itemAtual.id = itens.length
            criaElemento (itemAtual);
            itens.push (itemAtual);
        }


         
    
         localStorage.setItem ("itens",JSON.stringify (itens));


         nome.value = "";
         quantidade.value = "";
});




function criaElemento(item) {
    //console.log (nome);
    //console.log (quantidade);


    const novoItem = document.createElement ('li');
    novoItem.classList.add ("item");


    const numeroItem = document.createElement ('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id

   // console.log (numeroItem)


   novoItem.appendChild (numeroItem);
   novoItem.innerHTML += item.nome;

     //console.log (novoItem)
   

     
     lista.appendChild (novoItem);

}



function atualizaElemento (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}