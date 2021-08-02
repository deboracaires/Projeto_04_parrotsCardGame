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
let numeroJogadas = 0;
let primeiraCarta, segundaCarta;
let eVirada = false;
let verificaFimJogo = 0;



while(verificaNumeroCartas === 0){
numeroCartas = Number(prompt("Deseja jogar com quantas cartas?(digite apenas o número)\n- 4 cartas\n- 6 cartas\n- 8 cartas\n- 10 cartas\n- 12 cartas\n- 14 cartas"));

if( numeroCartas%2 === 0 && numeroCartas >= 4 && numeroCartas <= 14){
    verificaNumeroCartas = 1;
}else{
    alert("Número inválido, tente novamente!");
}
}

let cont = 0;
for(let i=0; i < numeroCartas; i++){
    if(i%2 === 0 && i !== 0){
        cont++;
    }
    versos[i] = versosPossiveis[cont];
}

versos.sort(embaralharCartas);


const ul = document.querySelector("ul");

for(let i = 0; i < numeroCartas; i++){
    ul.innerHTML += `
        <li class="vira-carta">
            <div class="carta" >
                <div class="carta-frente">
                    <img src="/images/front.png">
                </div>
                <div class="carta-verso">
                    <img src="${versos[i]}">
                </div>
            </div>
        </li>`;
}

function embaralharCartas() { 
	return Math.random() - 0.5; 
}



const cartas = document.querySelectorAll("li");

function virarCarta(){
    this.classList.add('virar-carta');
    
    if(eVirada === false){
        eVirada = true;
        primeiraCarta = this;
        return;
    }
    
    segundaCarta = this;
    eVirada = false;

    checarPar();
    verificaFimJogo = document.querySelectorAll(".virar-carta").length;
    setTimeout(verificarFimJogo, 200);

}

function checarPar(){
    numeroJogadas++;
    if(primeiraCarta.lastElementChild.lastElementChild.innerHTML === segundaCarta.lastElementChild.lastElementChild.innerHTML){
        limparVariaveis();
        return;
    }else{
        desvirarCartas();
    }
    
}

function limparVariaveis(){
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
    
}

function desvirarCartas() {
       setTimeout(() => {
         primeiraCarta.classList.remove('virar-carta');
         segundaCarta.classList.remove('virar-carta');
       }, 1000);
}



cartas.forEach(carta => carta.addEventListener('click', virarCarta));


//preciso verificar se todas as cartas estao viradas


function verificarFimJogo(){
    if(verificaFimJogo === numeroCartas){
        alert("Você ganhou em " + numeroJogadas + " jogadas!");
    }
}



