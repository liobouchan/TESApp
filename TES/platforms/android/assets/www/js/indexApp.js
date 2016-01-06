function cotizar(){
  var radioButton = document.getElementsByName('radioAuto');
  var selectsDestino = document.getElementById('destino');
  var destinoSeleccionado =
    selectsDestino.options[selectsDestino.selectedIndex].value;
  var elemento = document.getElementById('headerInfo');
  var cocheSeleccionado;
  var costo;

  console.log(destinoSeleccionado);

  for (var i = 0, length = radioButton.length; i < length; i++) {
    if (radioButton[i].checked) {
        // do whatever you want with the checked radio
        console.log(radioButton[i].value);
        // only one radio can be logically checked, don't check the rest
        cocheSeleccionado = radioButton[i].value;
        break;
    }
  }

  console.log("el coche seleccionado fue: " + cocheSeleccionado);
  if (cocheSeleccionado == "2Puertas" && destinoSeleccionado == "casa" ||
     cocheSeleccionado == "4Puertas" && destinoSeleccionado == "casa" ||
     cocheSeleccionado == "invalidos" && destinoSeleccionado == "casa"
   ){
       costo = 8.60 * 5
       elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }

  if (cocheSeleccionado == "2Puertas" && destinoSeleccionado == "trabajo" ||
     cocheSeleccionado == "4Puertas" && destinoSeleccionado == "trabajo" ||
     cocheSeleccionado == "invalidos" && destinoSeleccionado == "trabajo"
   ){
       costo = 8.60 * 8;
       elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }

  if (cocheSeleccionado == "2Puertas" && destinoSeleccionado == "escuela" ||
     cocheSeleccionado == "4Puertas" && destinoSeleccionado == "escuela" ||
     cocheSeleccionado == "invalidos" && destinoSeleccionado == "escuela"
   ){
       costo = 8.60 * 6;
       elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }

  if (cocheSeleccionado == "camioneta" && destinoSeleccionado == "casa"){
    costo = 12.50 * 5;
    elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }

  if (cocheSeleccionado == "camioneta" && destinoSeleccionado == "trabajo"){
    costo = 12.50 * 8;
    elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }

  if (cocheSeleccionado == "camioneta" && destinoSeleccionado == "escuela"){
    costo = 12.50 * 6;
    elemento.innerHTML = "El costo del viaje a "+ destinoSeleccionado + " en " + cocheSeleccionado + " es de $" +costo;
  }
}
