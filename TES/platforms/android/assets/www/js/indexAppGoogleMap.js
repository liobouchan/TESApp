var myCenter = new google.maps.LatLng(19.5046424,-99.14685839999999);
var tes = [
  {lat: 19.504993, lng: -99.150518},
  {lat: 19.507278, lng: -99.144534},
  {lat: 19.496193, lng: -99.140715},
  {lat: 19.499268, lng: -99.155864},
  {lat: 19.518165142195134, lng: -99.16341304779053},
  {lat: 19.505827653170485, lng: -99.16667461395264},
  {lat: 19.493408312781966, lng: -99.13740634918213},
  {lat: 19.50538267696351, lng: -99.14525985717773} ,
];
var marcadores = [];

function initialize(){
  var mapProp = {
    center: myCenter,
    zoom:15,
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

  this.drop =function() {
    clearMarkers();
    for (var i = 0; i < tes.length; i++) {
      addMarkerWithTimeout(tes[i], i * 500);
    }
  }

  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      marcadores.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: image
      }));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < marcadores.length; i++) {
      marcadores[i].setMap(null);
    }
    marcadores = [];
  }
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
