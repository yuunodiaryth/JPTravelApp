import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { goto1Page } from '../goto/goto1';
import { goto2Page } from '../goto/goto2';
import { goto3Page } from '../goto/goto3';
import { goto4Page } from '../goto/goto4';
import { goto5Page } from '../goto/goto5';
import { goto6Page } from '../goto/goto6';
import { goto7Page } from '../goto/goto7';
import { goto8Page } from '../goto/goto8';
import { goto9Page } from '../goto/goto9';
import { goto10Page } from '../goto/goto10';
import { goto11Page } from '../goto/goto11';
import { goto12Page } from '../goto/goto12';
import { goto13Page } from '../goto/goto13';
import { goto14Page } from '../goto/goto14';
import { goto15Page } from '../goto/goto15';
import { goto16Page } from '../goto/goto16';
import { goto17Page } from '../goto/goto17';
import { goto18Page } from '../goto/goto18';
import { goto19Page } from '../goto/goto19';
import { goto20Page } from '../goto/goto20';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [];

  constructor(public navCtrl: NavController) {

    this.slides.push('assets/img/01.png');
    this.slides.push('assets/img/02.png');
    this.slides.push('assets/img/03.png');
    this.slides.push('assets/img/04.png');
    this.slides.push('assets/img/05.png');
    this.slides.push('assets/img/06.png');
    this.slides.push('assets/img/07.png');
    this.slides.push('assets/img/08.png');



  }

  goto1(){
    this.navCtrl.push(goto1Page, {

    });
  }

  goto2(){
    this.navCtrl.push(goto2Page, {

    });
  }

  goto3(){
    this.navCtrl.push(goto3Page, {

    });
  }

  goto4(){
    this.navCtrl.push(goto4Page, {

    });
  }

  goto5(){
    this.navCtrl.push(goto5Page, {

    });
  }

  goto6(){
    this.navCtrl.push(goto6Page, {

    });
  }

  goto7(){
    this.navCtrl.push(goto7Page, {

    });
  }

  goto8(){
    this.navCtrl.push(goto8Page, {

    });
  }

  goto9(){
    this.navCtrl.push(goto9Page, {

    });
  }

  goto10(){
    this.navCtrl.push(goto10Page, {

    });
  }

  goto11(){
    this.navCtrl.push(goto11Page, {

    });
  }

  goto12(){
    this.navCtrl.push(goto12Page, {

    });
  }

  goto13(){
    this.navCtrl.push(goto13Page, {

    });
  }

  goto14(){
    this.navCtrl.push(goto14Page, {

    });
  }

  goto15(){
    this.navCtrl.push(goto15Page, {

    });
  }

  goto16(){
    this.navCtrl.push(goto16Page, {

    });
  }

  goto17(){
    this.navCtrl.push(goto17Page, {

    });
  }

  goto18(){
    this.navCtrl.push(goto18Page, {

    });
  }

  goto19(){
    this.navCtrl.push(goto19Page, {

    });
  }

  goto20(){
    this.navCtrl.push(goto20Page, {

    });
  }


}
