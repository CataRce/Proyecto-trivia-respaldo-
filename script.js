

function miNombreEs(){
var nombre = document.getElementById('nombre').value;
var label = document.getElementById('nombreConcursante');
label.innerHTML = nombre;
document.getElementById('empezar').style.display = 'block';
}

//var score = 0; //declarar variable punataje
const checkbtn1 = (Option) => {

  switch(Option) {
    
  case 'Hojas': 
  console.log('Hola')
  alert('Respuesta Correcta')
  document.getElementById("boton1").className = 'botonCorrecto';
  document.getElementById("boton2").className = 'botonError';
  document.getElementById("boton3").className = 'botonError';
  count ++;
  //score += 50;
//console.log(score)
  
  break;
  
  case 'Miel': 
  alert('Respuesta Inocrrecta')
  document.getElementById("boton2").className = 'botonError';
  document.getElementById("boton1").className = 'botonCorrecto';
  document.getElementById("boton3").className = 'botonError';
  count --;
  //score -= 10;
  
  break;

  case 'Pescados': 
  alert('Respuesta Incorrecta')
  document.getElementById("boton3").className = 'botonError';
  document.getElementById("boton2").className = 'botonError';
  document.getElementById("boton1").className = 'botonCorrecto';
  //score -=10;
  count --; 
   break; 
  
//default:
//count --;
  
}
//agregado recién
function myFunction() {
  var text;
  var fruits = document.getElementById("myInput").value;
//</script>

//innerHTML
//return score 
}

//pregunta 2 

const checkbtn2 = (Option) => {
  switch(Option) {
    
  case 'Asia': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton4").className = 'botonError';
  document.getElementById("boton5").className = 'botonError';
  document.getElementById("boton6").className = 'botonCorrecto';
  //score-=10;

  break;
 

case 'Europa': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton5").className = 'botonError';
  document.getElementById("boton6").className = 'botonCorrecto';
  document.getElementById("boton4").className = 'botonError';
  //score= score-10;
  break;

case 'América Central': 
  alert('Respuesta Correcta');
  document.getElementById("boton6").className = 'botonCorrecto';
  document.getElementById("boton5").className = 'botonError';
  document.getElementById("boton4").className = 'botonError';
  //score= score+50;
 // console.log(score);
  break;

  }
}




//pregunta 3 

const checkbtn3 = (Option) => {
  switch(Option) {
    
  case '3': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton7").className = 'botonError';
  document.getElementById("boton9").className = 'botonError';
  document.getElementById("boton8").className = 'botonCorrecto';
  //score-=10;

  break;
 

case '1': 
  alert('Respuesta Correcta');
  document.getElementById("boton8").className = 'botonCorrecto';
  document.getElementById("boton7").className = 'botonError';
  document.getElementById("boton9").className = 'botonError';
  //score= score-10;
  break;

case '2': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton7").className = 'botonError';
 document.getElementById("boton9").className = 'botonError';
  document.getElementById("boton8").className = 'botonCorrecto';
  //score-=10;

  break;
  }
}

//pregunta 4

const checkbtn4 = (Option) => {
  switch(Option) {
    
  case 'Plantas venenosas': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton11").className = 'botonError';
  document.getElementById("boton12").className = 'botonError';
  document.getElementById("boton10").className = 'botonCorrecto';
  //score-=10;

  break;
 

case 'Los leones': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton11").className = 'botonError';
  document.getElementById("boton10").className = 'botonCorrecto';
  document.getElementById("boton12").className = 'botonError';
  //score= score-10;
  break;

case 'La caza': 
  alert('Respuesta Correcta');
  document.getElementById("boton10").className = 'botonCorrecto';
  document.getElementById("boton11").className = 'botonError';
  document.getElementById("boton12").className = 'botonError';
  //score= score+50;
 // console.log(score);
  break;

  }
}

//pregunta 5

const checkbtn5 = (Option) => {
  switch(Option) {
    
  case '2.500': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score-=10;

  break;
 

case '130.000': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score= score-10;
  break;

case '40.000': 
  alert('Respuesta Correcta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score= score+50;
 // console.log(score);
  break;

  }
}

//pregunta 6

const checkbtn5 = (Option) => {
  switch(Option) {
    
  case '2.500': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score-=10;

  break;
 

case '130.000': 
  alert('Respuesta Incorrecta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score= score-10;
  break;

case '40.000': 
  alert('Respuesta Correcta');
  document.getElementById("boton13").className = 'botonError';
  document.getElementById("boton14").className = 'botonError';
  document.getElementById("boton15").className = 'botonCorrecto';
  //score= score+50;
 // console.log(score);
  break;

  }
}






/*function puntajeFinal(){
console.log(score)
  var label = document.getElementById('puntajeFinal');
  label.innerHTML = score;
  document.getElementById('puntaje').style.display = 'block';

}
*/