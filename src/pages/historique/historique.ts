import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoriqueProvider } from './../../providers/historique/historique';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {
  value: string = null;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public historyservice: HistoriqueProvider, public listfavs: Storage, private socialSharing :SocialSharing) {
    this.findListOfFavs();
  }

  ionViewDidLoad() {

  }
 
  Share(text : string){
    this.socialSharing.share(text)
    .then(()=>{

    }).catch(()=>{

    });

  }

  findListOfFavs() {
    let arr = [];
    this.listfavs.get('History').then(data => {
      data.forEach(element => {
       
      
          arr.push(JSON.stringify(element));
        
      });
      this.items = arr;
    });
  }
}
