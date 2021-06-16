import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  map: any;
  a: any;
  b: any;
  Pslat: any;
  Plng: any;

  start = { lat: 14.883792, lng: 102.024598 };
  end;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.a = navParams.get('a');
    this.b = navParams.get('b');
    this.start = { lat: navParams.get('slat'), lng: navParams.get('slng') };
    this.Pslat = navParams.get('L1');
    this.Plng = navParams.get('L2');
    this.end = { lat: parseFloat(this.Pslat), lng: parseFloat(this.Plng)};
  }

  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: { lat: 14.8817715, lng: 102.0185075 }
    });

    this.directionsDisplay.setMap(this.map);

    // Pass the directions request to the directions service.

    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
