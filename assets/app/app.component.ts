import { Component, OnInit } from '@angular/core';

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

  }
}
