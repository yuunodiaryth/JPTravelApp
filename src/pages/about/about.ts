import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { wana1Page } from '../wana/wana1';
import { wana2Page } from '../wana/wana2';
import { wana3Page } from '../wana/wana3';
import { wana4Page } from '../wana/wana4';
import { wana5Page } from '../wana/wana5';

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
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  wana1(){
    this.navCtrl.push(wana1Page, {

    });
  }

  wana2(){
    this.navCtrl.push(wana2Page, {

    });
  }

  wana3(){
    this.navCtrl.push(wana3Page, {

    });
  }

  wana4(){
    this.navCtrl.push(wana4Page, {

    });
  }

  wana5(){
    this.navCtrl.push(wana5Page, {

    });
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
