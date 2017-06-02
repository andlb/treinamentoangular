import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'inv-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  loadedFeature = 'acoes';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDvXfPSGunGUWCPo3_qJ29ahg1eXxi-qw8",
        authDomain: "bolsavalores-1708d.firebaseapp.com",
    });
  }
}
