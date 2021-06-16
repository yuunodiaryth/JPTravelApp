import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hokkaido1Page } from '../Hokkaido/Hokkaido1';
import { Hokkaido2Page } from '../Hokkaido/Hokkaido2';
import { Hokkaido3Page } from '../Hokkaido/Hokkaido3';
import { Hokkaido4Page } from '../Hokkaido/Hokkaido4';
import { Hokkaido5Page } from '../Hokkaido/Hokkaido5';
import { Hokkaido6Page } from '../Hokkaido/Hokkaido6';
import { Hokkaido7Page } from '../Hokkaido/Hokkaido7';
import { Hokkaido8Page } from '../Hokkaido/Hokkaido8';
import { Hokkaido9Page } from '../Hokkaido/Hokkaido9';
import { Hokkaido10Page } from '../Hokkaido/Hokkaido10';





@Component({
  selector: 'page-wana3',
  templateUrl: 'wana3.html'
})
export class wana3Page {

  constructor(public navCtrl: NavController) {

  }

  Hokkaido1(){
    this.navCtrl.push(Hokkaido1Page, {

    });
  }


  Hokkaido2(){
    this.navCtrl.push(Hokkaido2Page, {

    });
  }

  Hokkaido3(){
    this.navCtrl.push(Hokkaido3Page, {

    });
  }


  Hokkaido4(){
    this.navCtrl.push(Hokkaido4Page, {

    });
  }

  Hokkaido5(){
    this.navCtrl.push(Hokkaido5Page, {

    });
  }

  Hokkaido6(){
    this.navCtrl.push(Hokkaido6Page, {

    });
  }

  Hokkaido7(){
    this.navCtrl.push(Hokkaido7Page, {

    });
  }

  Hokkaido8(){
    this.navCtrl.push(Hokkaido8Page, {

    });
  }

  Hokkaido9(){
    this.navCtrl.push(Hokkaido9Page, {

    });
  }

  Hokkaido10(){
    this.navCtrl.push(Hokkaido10Page, {

    });
  }

}
