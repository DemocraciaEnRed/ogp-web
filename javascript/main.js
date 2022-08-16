
const linkAcerca = document.querySelector("#linkAcerca");
const linkQuinto = document.querySelector("#linkQuinto");
const linkEncuentros = document.querySelector("#linkEncuentros");
const linkPreguntas = document.querySelector("#linkPreguntas");
const linkContacto = document.querySelector("#linkContacto");
const participaBanner = document.querySelector("#participaBanner")
const linkEscribinos = document.querySelector("#linkEscribinos")

const home = document.querySelector("#home")
let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more')
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');



linkAcerca.addEventListener("click", ()=>{
    location.href = "#containerAcerca"
    
})

linkQuinto.addEventListener("click", ()=>{
    location.href = "#participaBanner"
})

linkEncuentros.addEventListener("click", ()=>{
    location.href = "#calendario"
})

linkPreguntas.addEventListener("click", ()=>{
    location.href = "#divPreguntasFrecuentes"
})
linkEscribinos.addEventListener("click", ()=>{
    location.href = "#divPreguntasFrecuentes"
})

linkContacto.addEventListener("click", ()=>{
    location.href = "#footer"
})
home.addEventListener("click", ()=>{
    location.href = "#home"
})
participaBanner.addEventListener("click", () =>{
    location.href ="#containerQuinto"
})

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if ( switchc == 0 ) {

            answer[i].style.height = `${altoParrafo}%`;
            question[i].style.marginBottom = '5px';
            btnDropdown[i].innerHTML = '<i class="bi bi-chevron-up colorBtn"></i>';
            switchc ++;

        }

        else if ( switchc == 1 ) {

            answer[i].style.height = `0`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i class="bi bi-chevron-down colorBtn"></i>';
            switchc --;

        }

    })

}
