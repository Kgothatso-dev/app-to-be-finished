import { Component, OnInit } from '@angular/core';

 declare var mapboxgl;
declare var L;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor() { 
  
  }

  ngOnInit() {

//     var mymap = L.map('mapid').setView([-25.74486 , 28.18783], 13);

//     L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: 'mapbox/streets-v11',
//       tileSize: 512,
//       zoomOffset: -1,
//       accessToken: 'pk.eyJ1Ijoia2dvdGhhdHNvIiwiYSI6ImNraGtnanhyNDA2Z2kyem95aGZmbXZvZXAifQ.Ma7M1pVmTfEcOiBRD93vFw'
//   }).addTo(mymap);

//   var marker = L.marker([-25.74486 , 28.18783]).addTo(mymap);

//   var circle = L.circle([-25.74486 , 28.18783], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2dvdGhhdHNvIiwiYSI6ImNraGtnanhyNDA2Z2kyem95aGZmbXZvZXAifQ.Ma7M1pVmTfEcOiBRD93vFw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
      );
  
  }

}
