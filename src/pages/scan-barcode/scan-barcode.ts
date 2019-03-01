import { HistoriqueProvider } from './../../providers/historique/historique';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScanBarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-barcode',
  templateUrl: 'scan-barcode.html',
})
export class ScanBarcodePage {

  options: BarcodeScannerOptions;
  encodedText: string = '';
  encodedData: any = {};
  scannedData: any = {};
  constructor(public navctrl: NavController, public scanner: BarcodeScanner, public history: HistoriqueProvider) {
    this.ScanIt();
  }
  

  ScanIt() {
    this.options = {
      prompt: 'Scan your barcode'
    }
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error : ', err);
    })
  }


}
