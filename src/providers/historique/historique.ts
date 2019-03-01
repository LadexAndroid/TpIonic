 
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'History';
 
@Injectable()
export class HistoriqueProvider {
 
  constructor(public storage: Storage) { }
 
 
 
  Enregistrerlescan(scanid) {
    return this.getAllHistory().then(result => {
      if (result) {
        result.push(scanid);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [scanid]);
      }
    });
  }
 
 
 
  getAllHistory() {
    return this.storage.get(STORAGE_KEY);
  }
 
}