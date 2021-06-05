const $box = document.querySelector('.box');
const $card = document.querySelector('.card');

const $babyYoda = document.querySelector('.card-character-img');
const $title = document.querySelector('.card-info-title');
const $subtitle = document.querySelector('.card-info-subtitle');
const $seasons = document.querySelector('.card-info-seasons');
const $watchButton = document.querySelector('.card-button');

//---------------------------------------------------------------------------------------------------
$box.addEventListener('mousemove', (e) => {

   /* con esta formula  (e.pageX - window.innerWidth / 2) obtengo exactamente la mitad del $card, de la mitad a la izquiera negativo, de la mitad a la derecha positivo */
   let xAxis = (e.pageX - window.innerWidth / 2) /25 //puede ser el numeroq kiera, lo q hago es bajar la cifra del xaxis cuando lo divido
   let yAxis = ( window.innerHeight / 2 - e.pageY) / 25 // window.innerHeight: el largo del viuport / 2-e.pageY:  la ubicacion del puntero del mouse en el espacio sseleccionado del viuport
   console.log(yAxis)

   //transform: rotateX(45deg); permite rotar un elemento sobre su eje sin deformarlo
   $card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//---------------------------------------------------------------------------------------------------
$box.addEventListener('mouseenter', (e) => {
   $card.style.transition = 'transform 0.2s ease';
   setTimeout((e) => {
      $card.style.transition = 'none';//cuando entro sin transitio para q se mueva bien sin freno y se la kito 4m s despues q entro 
   }, 400);

  /*  $babyYoda.style.transform = 'translateZ(150px)';//levanto la foto como fuera de la pantalla
   $title.style.transform = 'translateZ(150px)';
   $subtitle.style.transform = 'translateZ(150px)';
   $seasons.style.transform = 'translateZ(150px)';
   $watchButton.style.transform = 'translateZ(150px)'; */
   addTranslateZToElements( [$babyYoda,  $title,  $subtitle, $seasons, $watchButton])//los paso como un array para q los recorra mi function
})

//---------------------------------------------------------------------------------------------------
$box.addEventListener('mouseleave', (e) => {
   $card.style.transition = 'transform 0.5s ease';//para q no brinque cuando saque el mouse
   $card.style.transform = 'rotateY(0deg) rotateX(0deg)';

/*    $babyYoda.style.transform = 'translateZ(0)';//retomo su tamaño
   $title.style.transform = 'translateZ(0)';
   $subtitle.style.transform = 'translateZ(0)';
   $seasons.style.transform = 'translateZ(0)';
   $watchButton.style.transform = 'translateZ(0)'; */
   removeTranslateZToElements([$babyYoda,  $title,  $subtitle, $seasons, $watchButton])
})

//con esta funcion lo q hago es agilizar la transformacion' pero igual de 1 por 1 servia
function addTranslateZToElements(el){
   el.forEach((el) => el.style.transform = 'translateZ(150px)')
}

function removeTranslateZToElements(el){
   el.forEach((el) => el.style.transform = 'translateZ(0)')
}