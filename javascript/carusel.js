const slides = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let contenido = document.getElementById('slide1');
let totalSlides = slides.children.length;
// al indicar la posicion damos el punto de partida de lcarousel
let position = 2; 
let anterior = '';
let siguiente = '';

if ((totalSlides != 0) && (position < totalSlides)) {
    // inicializar carusel
    console.log('init carousel!!!')
    actual = document.getElementById(slides.childNodes[position].id);
    actual.style.display= "block";
  
    if (position === 0){
        console.log('primer if')

        leftBtn.style.visibility = 'hidden';
        rightBtn.style.visibility = 'visible';
    } else  if ((position > 0) && (position < totalSlides  ) && (position != totalSlides -1 )){
        console.log('segundo if')

        leftBtn.style.visibility = 'visible';
        rightBtn.style.visibility = 'visible';
    }else if(position == totalSlides -1 ){
        console.log('tercer if')

        leftBtn.style.visibility = 'visible';

        rightBtn.style.visibility = 'hidden';
    }
}


// leftBtn.style.visibility = 'hidden';


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