let verificaNumeroCartas = 0;
let numeroCartas = 0;
let versosPossiveis = [
    '/images/bobrossparrot.gif',
    '/images/explodyparrot.gif',
    '/images/fiestaparrot.gif',
    '/images/metalparrot.gif',
    '/images/revertitparrot.gif',
    '/images/tripletsparrot.gif',
    '/images/unicornparrot.gif'    
];
let versos = [];


while(verificaNumeroCartas === 0){
numeroCartas = prompt("Deseja jogar com quantas cartas?(digite apenas o número)\n- 4 cartas\n- 6 cartas\n- 8 cartas\n- 10 cartas\n- 12 cartas\n- 14 cartas");

if( numeroCartas%2 === 0 && numeroCartas >= 4 && numeroCartas <= 14){
    verificaNumeroCartas = 1;
}else{
    alert("Número inválido, tente novamente!");
}
}

//preciso pegar o numero de cartas ddividido por dois e criar um array com o numero de cartas a serem colocadas
//no meu codigo 

let cont = 0;
for(let i=0; i < numeroCartas; i++){
    if(i%2 === 0 && i !== 0){
        cont++;
    }
    versos[i] = versosPossiveis[cont];
}

const ul = document.querySelector("ul");
let imagemGif = "";
for(let i = 0; i < numeroCartas; i++){
    imagemGif = versos[i];
    ul.innerHTML += `
        <li class="vira-carta">
            <div class="carta">
                <div class="carta-frente">
                    <img src="/images/front.png">
                </div>
                <div class="carta-verso">
                    <img src="`+ imagemGif + `">
                </div>
            </div>
        </li>`;
}

const cartas = document.querySelectorAll("li");

function virarCarta(){
    this.classList.toggle('virar-carta');
}
cartas.forEach(carta => carta.addEventListener('click', virarCarta));





