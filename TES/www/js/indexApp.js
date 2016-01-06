function cotizar(){
  var radioButton = document.getElementsByName('radioAuto');
  var selectsDestino = document.getElementById('destino');
  var destinoSeleccionado =
    selectsDestino.options[selectsDestino.selectedIndex].value;
  console.log(destinoSeleccionado);
  for (var i = 0, length = radioButton.length; i < length; i++) {
    if (radioButton[i].checked) {
        // do whatever you want with the checked radio
        console.log(radioButton[i].value);
        // only one radio can be logically checked, don't check the rest
        break;
    }
  }
}
