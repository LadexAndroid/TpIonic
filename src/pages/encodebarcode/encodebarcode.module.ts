import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncodebarcodePage } from './encodebarcode';

@NgModule({
  declarations: [
    EncodebarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(EncodebarcodePage),
  ],
})
export class EncodebarcodePageModule {}
