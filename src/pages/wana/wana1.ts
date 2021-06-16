import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tokyo1Page } from '../Tokyo/Tokyo1';
import { Tokyo2Page } from '../Tokyo/Tokyo2';
import { Tokyo3Page } from '../Tokyo/Tokyo3';
import { Tokyo4Page } from '../Tokyo/Tokyo4';
import { Tokyo5Page } from '../Tokyo/Tokyo5';
import { Tokyo6Page } from '../Tokyo/Tokyo6';
import { Tokyo7Page } from '../Tokyo/Tokyo7';
import { Tokyo8Page } from '../Tokyo/Tokyo8';
import { Tokyo9Page } from '../Tokyo/Tokyo9';
import { Tokyo10Page } from '../Tokyo/Tokyo10';


@Component({
  selector: 'page-wana1',
  templateUrl: 'wana1.html'
})
export class wana1Page {

  constructor(public navCtrl: NavController) {

  }

  Tokyo1(){
    this.navCtrl.push(Tokyo1Page, {

    });
  }


  Tokyo2(){
    this.navCtrl.push(Tokyo2Page, {

    });
  }

  Tokyo3(){
    this.navCtrl.push(Tokyo3Page, {

    });
  }


  Tokyo4(){
    this.navCtrl.push(Tokyo4Page, {

    });
  }

  Tokyo5(){
    this.navCtrl.push(Tokyo5Page, {

    });
  }

  Tokyo6(){
    this.navCtrl.push(Tokyo6Page, {

    });
  }

  Tokyo7(){
    this.navCtrl.push(Tokyo7Page, {

    });
  }

  Tokyo8(){
    this.navCtrl.push(Tokyo8Page, {

    });
  }

  Tokyo9(){
    this.navCtrl.push(Tokyo9Page, {

    });
  }

  Tokyo10(){
    this.navCtrl.push(Tokyo10Page, {

    });
  }

}
