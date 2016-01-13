var myCenter = new google.maps.LatLng(19.5046424,-99.14685839999999);

function initialize(){
  var mapProp = {
    center: myCenter,
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var image = 'icons/icono.png';

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position:myCenter,
  });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"¿Donde te recogemos? , estás aquí."
  });

  infowindow.open(map,marker);
  // marker.addListener('click', toggleBounce);
  // function toggleBounce() {
  // if (marker.getAnimation() !== null) {
  //   marker.setAnimation(null);
  // } else {
  //   marker.setAnimation(google.maps.Animation.BOUNCE);
  // }
  // }
}

google.maps.event.addDomListener(window, 'load', initialize);
