
const linkAcerca = document.querySelector("#linkAcerca");
const linkQuinto = document.querySelector("#linkQuinto");
const linkEncuentros = document.querySelector("#linkEncuentros");
const linkPreguntas = document.querySelector("#linkPreguntas");
const linkContacto = document.querySelector("#linkContacto");
const home = document.querySelector("#home")
let question = document.querySelectorAll('.question');
let btnDropdown = document.querySelectorAll('.question .more')
let answer = document.querySelectorAll('.answer');
let parrafo = document.querySelectorAll('.answer p');

linkAcerca.addEventListener("click", ()=>{
    location.href = "#divAcerca"
})

linkQuinto.addEventListener("click", ()=>{
    location.href = "#containerQuinto"
})

linkEncuentros.addEventListener("click", ()=>{
    location.href = "#calendario"
})

linkPreguntas.addEventListener("click", ()=>{
    location.href = "#divPreguntas"
})

linkContacto.addEventListener("click", ()=>{
    location.href = "#divContacto"
})
home.addEventListener("click", ()=>{
    location.href = "#home"
})

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if ( switchc == 0 ) {

            answer[i].style.height = `${altoParrafo}px`;
            question[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<i>-</i>';
            switchc ++;

        }

        else if ( switchc == 1 ) {

            answer[i].style.height = `0`;
            question[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i>+</i>';
            switchc --;

        }

    })

}
