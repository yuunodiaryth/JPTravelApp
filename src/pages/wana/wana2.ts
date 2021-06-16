import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Osaka1Page } from '../Osaka/Osaka1';
import { Osaka2Page } from '../Osaka/Osaka2';
import { Osaka3Page } from '../Osaka/Osaka3';
import { Osaka4Page } from '../Osaka/Osaka4';
import { Osaka5Page } from '../Osaka/Osaka5';
import { Osaka6Page } from '../Osaka/Osaka6';
import { Osaka7Page } from '../Osaka/Osaka7';
import { Osaka8Page } from '../Osaka/Osaka8';
import { Osaka9Page } from '../Osaka/Osaka9';
import { Osaka10Page } from '../Osaka/Osaka10';




@Component({
  selector: 'page-wana2',
  templateUrl: 'wana2.html'
})
export class wana2Page {

  constructor(public navCtrl: NavController) {

  }

  Osaka1(){
    this.navCtrl.push(Osaka1Page, {

    });
  }


  Osaka2(){
    this.navCtrl.push(Osaka2Page, {

    });
  }

  Osaka3(){
    this.navCtrl.push(Osaka3Page, {

    });
  }


  Osaka4(){
    this.navCtrl.push(Osaka4Page, {

    });
  }

  Osaka5(){
    this.navCtrl.push(Osaka5Page, {

    });
  }

  Osaka6(){
    this.navCtrl.push(Osaka6Page, {

    });
  }

  Osaka7(){
    this.navCtrl.push(Osaka7Page, {

    });
  }

  Osaka8(){
    this.navCtrl.push(Osaka8Page, {

    });
  }

  Osaka9(){
    this.navCtrl.push(Osaka9Page, {

    });
  }

  Osaka10(){
    this.navCtrl.push(Osaka10Page, {

    });
  }


}
