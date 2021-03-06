import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'contact';
  title = 'cms';

  switchView(feature: string) {
    this.loadedFeature = feature;
  }
}
