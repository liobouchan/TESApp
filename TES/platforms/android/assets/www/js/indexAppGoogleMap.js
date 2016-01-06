var myCenter = new google.maps.LatLng(19.5046424,-99.14685839999999);

function initialize(){
  var mapProp = {
    center: myCenter,
    zoom:13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position:myCenter,
  });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"¿A donde te llevamos? , estás aquí."
  });

  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
