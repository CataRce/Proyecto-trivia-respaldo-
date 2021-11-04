function miNombreEs(){
var nombre = document.getElementById('nombre').value;
var label = document.getElementById('nombreConcursante');
label.innerHTML = nombre;
document.getElementById('empezar').style.display = 'block';
}


var score = 0; //declarar variable punataje

const checkbtn1 = (Option) => {
  switch(Option) {
    
  case 'Hojas': 
  alert('Respuesta Correcta')
  document.getElementById("boton1").className = 'botonCorrecto';
  score += 50;

  
  break;
  
  case 'Miel': 
  alert('Respuesta Inorrecta')
  document.getElementById("boton2").className = 'botonError';
  document.getElementById("boton1").className = 'botonCorrecto';
  document.getElementById("boton3").className = 'botonError';
  score -= 10;
  
  break;

  case 'Pescados': 
  alert('Respuesta Inorrecta')
  document.getElementById("boton3").className = 'botonError';
  document.getElementById("boton2").className = 'botonError';
  document.getElementById("boton1").className = 'botonCorrecto';
  score -=10;
   break; 
}
}
//pregunta 2 

const checkbtn2 = (Option) => {
  switch(Option) {
    
  case 'Asia': 
  alert('Respuesta Inorrecta');
  document.getElementById("boton4").className = 'botonError';
  score-=10;

  break;
 

case 'Europa': 
  alert('Respuesta Inorrecta');
  document.getElementById("boton5").className = 'botonError';
  score= score-10;
  break;

case 'América Central': 
  alert('Respuesta Correcta');
  document.getElementById("boton6").className = 'botonCorrecto';
  score= score+50;
  console.log(score);
  break;

  }
}

function puntajeFinal(){

  var label = document.getElementById('puntajeFinal');
  label.innerHTML = score;
  document.getElementById('puntaje').style.display = 'block';

}