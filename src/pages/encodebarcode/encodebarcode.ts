import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HistoriqueProvider } from './../../providers/historique/historique';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner, public history : HistoriqueProvider) {
  }

  AddToHistory(qrcode) {
    this.history.Enregistrerlescan(qrcode).then(() => {

    });
  }

  EncodeIt() {
      if(this.encodedText != null && this.encodedText != ""){
        let date = new Date();
        this.AddToHistory(date.toISOString().substring(0, 10)+ " : " + this.encodedText);
      }
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error : ', err);
    })
  }

}
