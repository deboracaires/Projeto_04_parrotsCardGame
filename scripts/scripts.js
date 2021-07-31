let verificaNumeroCartas = 0;
let numeroCartas = 0;
// var faces = [
//     getImage("images/bobrossparrot.gif"),
//     getImage("images/explodyparrot.gif"),
//     getImage("images/fiestaparrot.gif"),
//     getImage("images/metalparrot.gif"),
//     getImage("images/revertitparrot.gif"),
//     getImage("images/tripletsparrot.gif"),
//     getImage("images/unicornparrot.gif")    
// ];


while(verificaNumeroCartas === 0){
numeroCartas = prompt("Deseja jogar com quantas cartas?(digite apenas o número)\n- 4 cartas\n- 6 cartas\n- 8 cartas\n- 10 cartas\n- 12 cartas\n- 14 cartas");

if( numeroCartas%2 === 0 && numeroCartas >= 4 && numeroCartas <= 14){
    verificaNumeroCartas = 1;
    inserirCartas();
}else{
    alert("Número inválido, tente novamente!");
}
}

function inserirCartas(){
    const ul = document.querySelector("ul");
    for(let i = 0; i < numeroCartas; i++){
        ul.innerHTML += `
        <li class="vira-carta">
            <div class="carta">
                <div class="carta-frente">
                    <img src="/images/front.png">
                </div>
                <div class="carta-verso">
                    <img src="/images/bobrossparrot.gif">
                </div>
            </div>
        </li>`;
    }
}
const cartas = document.querySelectorAll("li");

function virarCarta(){
    this.classList.toggle('virar-carta');
}
cartas.forEach(carta => carta.addEventListener('click', virarCarta));





