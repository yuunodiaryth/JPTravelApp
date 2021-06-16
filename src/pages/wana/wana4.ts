import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nara1Page } from '../Nara/Nara1';
import { Nara2Page } from '../Nara/Nara2';
import { Nara3Page } from '../Nara/Nara3';
import { Nara4Page } from '../Nara/Nara4';
import { Nara5Page } from '../Nara/Nara5';
import { Nara6Page } from '../Nara/Nara6';
import { Nara7Page } from '../Nara/Nara7';
import { Nara8Page } from '../Nara/Nara8';
import { Nara9Page } from '../Nara/Nara9';
import { Nara10Page } from '../Nara/Nara10';



@Component({
  selector: 'page-wana4',
  templateUrl: 'wana4.html'
})
export class wana4Page {

  constructor(public navCtrl: NavController) {

  }

  Nara1(){
    this.navCtrl.push(Nara1Page, {

    });
  }


  Nara2(){
    this.navCtrl.push(Nara2Page, {

    });
  }

  Nara3(){
    this.navCtrl.push(Nara3Page, {

    });
  }


  Nara4(){
    this.navCtrl.push(Nara4Page, {

    });
  }

  Nara5(){
    this.navCtrl.push(Nara5Page, {

    });
  }

  Nara6(){
    this.navCtrl.push(Nara6Page, {

    });
  }

  Nara7(){
    this.navCtrl.push(Nara7Page, {

    });
  }

  Nara8(){
    this.navCtrl.push(Nara8Page, {

    });
  }

  Nara9(){
    this.navCtrl.push(Nara9Page, {

    });
  }

  Nara10(){
    this.navCtrl.push(Nara10Page, {

    });
  }
}
