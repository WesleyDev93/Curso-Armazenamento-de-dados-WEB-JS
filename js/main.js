const form = document.getElementById ('novoItem');
const lista = document.getElementById ('lista');





//console.log (novoItem);

form.addEventListener ('submit', (evento) =>{
         evento.preventDefault ();
         //console.log ("funcionou");
         


         criaElemento (evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
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