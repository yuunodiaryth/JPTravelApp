import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { Geolocation } from '@ionic-native/geolocation';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { goto1Page } from '../pages/goto/goto1';
import { goto2Page } from '../pages/goto/goto2';
import { goto3Page } from '../pages/goto/goto3';
import { goto4Page } from '../pages/goto/goto4';
import { goto5Page } from '../pages/goto/goto5';
import { goto6Page } from '../pages/goto/goto6';
import { goto7Page } from '../pages/goto/goto7';
import { goto8Page } from '../pages/goto/goto8';
import { goto9Page } from '../pages/goto/goto9';
import { goto10Page } from '../pages/goto/goto10';
import { goto11Page } from '../pages/goto/goto11';
import { goto12Page } from '../pages/goto/goto12';
import { goto13Page } from '../pages/goto/goto13';
import { goto14Page } from '../pages/goto/goto14';
import { goto15Page } from '../pages/goto/goto15';
import { goto16Page } from '../pages/goto/goto16';
import { goto17Page } from '../pages/goto/goto17';
import { goto18Page } from '../pages/goto/goto18';
import { goto19Page } from '../pages/goto/goto19';
import { goto20Page } from '../pages/goto/goto20';

import { wana1Page } from '../pages/wana/wana1';
import { wana2Page } from '../pages/wana/wana2';
import { wana3Page } from '../pages/wana/wana3';
import { wana4Page } from '../pages/wana/wana4';
import { wana5Page } from '../pages/wana/wana5';

import { Tokyo1Page } from '../pages/Tokyo/Tokyo1';
import { Tokyo2Page } from '../pages/Tokyo/Tokyo2';
import { Tokyo3Page } from '../pages/Tokyo/Tokyo3';
import { Tokyo4Page } from '../pages/Tokyo/Tokyo4';
import { Tokyo5Page } from '../pages/Tokyo/Tokyo5';
import { Tokyo6Page } from '../pages/Tokyo/Tokyo6';
import { Tokyo7Page } from '../pages/Tokyo/Tokyo7';
import { Tokyo8Page } from '../pages/Tokyo/Tokyo8';
import { Tokyo9Page } from '../pages/Tokyo/Tokyo9';
import { Tokyo10Page } from '../pages/Tokyo/Tokyo10';

import { Osaka1Page } from '../pages/Osaka/Osaka1';
import { Osaka2Page } from '../pages/Osaka/Osaka2';
import { Osaka3Page } from '../pages/Osaka/Osaka3';
import { Osaka4Page } from '../pages/Osaka/Osaka4';
import { Osaka5Page } from '../pages/Osaka/Osaka5';
import { Osaka6Page } from '../pages/Osaka/Osaka6';
import { Osaka7Page } from '../pages/Osaka/Osaka7';
import { Osaka8Page } from '../pages/Osaka/Osaka8';
import { Osaka9Page } from '../pages/Osaka/Osaka9';
import { Osaka10Page } from '../pages/Osaka/Osaka10';

import { Hokkaido1Page } from '../pages/Hokkaido/Hokkaido1';
import { Hokkaido2Page } from '../pages/Hokkaido/Hokkaido2';
import { Hokkaido3Page } from '../pages/Hokkaido/Hokkaido3';
import { Hokkaido4Page } from '../pages/Hokkaido/Hokkaido4';
import { Hokkaido5Page } from '../pages/Hokkaido/Hokkaido5';
import { Hokkaido6Page } from '../pages/Hokkaido/Hokkaido6';
import { Hokkaido7Page } from '../pages/Hokkaido/Hokkaido7';
import { Hokkaido8Page } from '../pages/Hokkaido/Hokkaido8';
import { Hokkaido9Page } from '../pages/Hokkaido/Hokkaido9';
import { Hokkaido10Page } from '../pages/Hokkaido/Hokkaido10';

import { Nara1Page } from '../pages/Nara/Nara1';
import { Nara2Page } from '../pages/Nara/Nara2';
import { Nara3Page } from '../pages/Nara/Nara3';
import { Nara4Page } from '../pages/Nara/Nara4';
import { Nara5Page } from '../pages/Nara/Nara5';
import { Nara6Page } from '../pages/Nara/Nara6';
import { Nara7Page } from '../pages/Nara/Nara7';
import { Nara8Page } from '../pages/Nara/Nara8';
import { Nara9Page } from '../pages/Nara/Nara9';
import { Nara10Page } from '../pages/Nara/Nara10';

import { Fuguoka1Page } from '../pages/Fuguoka/Fuguoka1';
import { Fuguoka2Page } from '../pages/Fuguoka/Fuguoka2';
import { Fuguoka3Page } from '../pages/Fuguoka/Fuguoka3';
import { Fuguoka4Page } from '../pages/Fuguoka/Fuguoka4';
import { Fuguoka5Page } from '../pages/Fuguoka/Fuguoka5';
import { Fuguoka6Page } from '../pages/Fuguoka/Fuguoka6';
import { Fuguoka7Page } from '../pages/Fuguoka/Fuguoka7';
import { Fuguoka8Page } from '../pages/Fuguoka/Fuguoka8';
import { Fuguoka9Page } from '../pages/Fuguoka/Fuguoka9';
import { Fuguoka10Page } from '../pages/Fuguoka/Fuguoka10';
import { MapPage } from '../pages/map/map';













import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    goto1Page,
    goto2Page,
    goto3Page,
    goto4Page,
    goto5Page,
    goto6Page,
    goto7Page,
    goto8Page,
    goto9Page,
    goto10Page,
    goto11Page,
    goto12Page,
    goto13Page,
    goto14Page,
    goto15Page,
    goto16Page,
    goto17Page,
    goto18Page,
    goto19Page,
    goto20Page,
    wana1Page,
    wana2Page,
    wana3Page,
    wana4Page,
    wana5Page,
    Tokyo1Page,
    Tokyo2Page,
    Tokyo3Page,
    Tokyo4Page,
    Tokyo5Page,
    Tokyo6Page,
    Tokyo7Page,
    Tokyo8Page,
    Tokyo9Page,
    Tokyo10Page,
    Osaka1Page,
    Osaka2Page,
    Osaka3Page,
    Osaka4Page,
    Osaka5Page,
    Osaka6Page,
    Osaka7Page,
    Osaka8Page,
    Osaka9Page,
    Osaka10Page,
    Hokkaido1Page,
    Hokkaido2Page,
    Hokkaido3Page,
    Hokkaido4Page,
    Hokkaido5Page,
    Hokkaido6Page,
    Hokkaido7Page,
    Hokkaido8Page,
    Hokkaido9Page,
    Hokkaido10Page,
    Nara1Page,
    Nara2Page,
    Nara3Page,
    Nara4Page,
    Nara5Page,
    Nara6Page,
    Nara7Page,
    Nara8Page,
    Nara9Page,
    Nara10Page,
    Fuguoka1Page,
    Fuguoka2Page,
    Fuguoka3Page,
    Fuguoka4Page,
    Fuguoka5Page,
    Fuguoka6Page,
    Fuguoka7Page,
    Fuguoka8Page,
    Fuguoka9Page,
    Fuguoka10Page,
    MapPage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    goto1Page,
    goto2Page,
    goto3Page,
    goto4Page,
    goto5Page,
    goto6Page,
    goto7Page,
    goto8Page,
    goto9Page,
    goto10Page,
    goto11Page,
    goto12Page,
    goto13Page,
    goto14Page,
    goto15Page,
    goto16Page,
    goto17Page,
    goto18Page,
    goto19Page,
    goto20Page,
    wana1Page,
    wana2Page,
    wana3Page,
    wana4Page,
    wana5Page,
    Tokyo1Page,
    Tokyo2Page,
    Tokyo3Page,
    Tokyo4Page,
    Tokyo5Page,
    Tokyo6Page,
    Tokyo7Page,
    Tokyo8Page,
    Tokyo9Page,
    Tokyo10Page,
    Osaka1Page,
    Osaka2Page,
    Osaka3Page,
    Osaka4Page,
    Osaka5Page,
    Osaka6Page,
    Osaka7Page,
    Osaka8Page,
    Osaka9Page,
    Osaka10Page,
    Hokkaido1Page,
    Hokkaido2Page,
    Hokkaido3Page,
    Hokkaido4Page,
    Hokkaido5Page,
    Hokkaido6Page,
    Hokkaido7Page,
    Hokkaido8Page,
    Hokkaido9Page,
    Hokkaido10Page,
    Nara1Page,
    Nara2Page,
    Nara3Page,
    Nara4Page,
    Nara5Page,
    Nara6Page,
    Nara7Page,
    Nara8Page,
    Nara9Page,
    Nara10Page,
    Fuguoka1Page,
    Fuguoka2Page,
    Fuguoka3Page,
    Fuguoka4Page,
    Fuguoka5Page,
    Fuguoka6Page,
    Fuguoka7Page,
    Fuguoka8Page,
    Fuguoka9Page,
    Fuguoka10Page,
    MapPage



  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
