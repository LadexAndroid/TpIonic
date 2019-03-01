import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the EncodebarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-encodebarcode',
  templateUrl: 'encodebarcode.html',
})
export class EncodebarcodePage {
  options: BarcodeScannerOptions;
  encodedText: string = '';
  encodedData: any = {};
  scannedData: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
  }

  EncodeIt() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error : ', err);
    })
  }

}
