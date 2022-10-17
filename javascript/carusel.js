const slides = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let contenido = document.getElementById('slide1');
let totalSlides = slides.children.length;
let position = 0
let anterior = '';
let siguiente = '';

if (totalSlides != 0){
    // inicializar carusel
    console.log('init carousel!!!')
   
  
}


leftBtn.style.visibility = 'hidden';
// cequeos para el desarrollo


const moveRight = () => {

    //     return;
    if (position < totalSlides){


        actual = document.getElementById(slides.childNodes[position].id);
        actual.style.display= "none";
        position++;

        siguiente = document.getElementById(slides.childNodes[position].id);

        siguiente.style.display= "block";

        leftBtn.style.visibility = 'visible';
        if (position == 0){
            leftBtn.style.visibility = 'hidden';
        }
         if(position == 3){
            rightBtn.style.visibility = 'hidden';
        }
    }
}

const moveLeft = () => {
    if (position < totalSlides){


        actual = document.getElementById(slides.childNodes[position].id);
        actual.style.display= "none";
        position--;

        siguiente = document.getElementById(slides.childNodes[position].id);

        siguiente.style.display= "block";

        leftBtn.style.visibility = 'visible';
        if (position == 0){
            leftBtn.style.visibility = 'hidden';
        }
         if(position < totalSlides -1 ){
            rightBtn.style.visibility = 'visible';
        }
    }
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);