import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fuguoka1Page } from '../Fuguoka/Fuguoka1';
import { Fuguoka2Page } from '../Fuguoka/Fuguoka2';
import { Fuguoka3Page } from '../Fuguoka/Fuguoka3';
import { Fuguoka4Page } from '../Fuguoka/Fuguoka4';
import { Fuguoka5Page } from '../Fuguoka/Fuguoka5';
import { Fuguoka6Page } from '../Fuguoka/Fuguoka6';
import { Fuguoka7Page } from '../Fuguoka/Fuguoka7';
import { Fuguoka8Page } from '../Fuguoka/Fuguoka8';
import { Fuguoka9Page } from '../Fuguoka/Fuguoka9';
import { Fuguoka10Page } from '../Fuguoka/Fuguoka10';




@Component({
  selector: 'page-wana5',
  templateUrl: 'wana5.html'
})
export class wana5Page {

  constructor(public navCtrl: NavController) {

  }

  Fuguoka1(){
    this.navCtrl.push(Fuguoka1Page, {

    });
  }


  Fuguoka2(){
    this.navCtrl.push(Fuguoka2Page, {

    });
  }

  Fuguoka3(){
    this.navCtrl.push(Fuguoka3Page, {

    });
  }


  Fuguoka4(){
    this.navCtrl.push(Fuguoka4Page, {

    });
  }

  Fuguoka5(){
    this.navCtrl.push(Fuguoka5Page, {

    });
  }

  Fuguoka6(){
    this.navCtrl.push(Fuguoka6Page, {

    });
  }

  Fuguoka7(){
    this.navCtrl.push(Fuguoka7Page, {

    });
  }

  Fuguoka8(){
    this.navCtrl.push(Fuguoka8Page, {

    });
  }

  Fuguoka9(){
    this.navCtrl.push(Fuguoka9Page, {

    });
  }

  Fuguoka10(){
    this.navCtrl.push(Fuguoka10Page, {

    });
  }
}
