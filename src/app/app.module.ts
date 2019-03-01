import { HistoriquePage } from './../pages/historique/historique';
import { EncodebarcodePage } from './../pages/encodebarcode/encodebarcode';
import { ScanBarcodePage } from './../pages/scan-barcode/scan-barcode';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { HistoriqueProvider } from '../providers/historique/historique';
import { IonicStorageModule } from '@ionic/storage';


import { SocialSharing } from '@ionic-native/social-sharing';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ScanBarcodePage,
    EncodebarcodePage,
    HistoriquePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ScanBarcodePage,
    EncodebarcodePage,
    HistoriquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    BarcodeScanner, 
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistoriqueProvider,
  ]
})
export class AppModule {}
