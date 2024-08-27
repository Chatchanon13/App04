import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutPage } from './about/about.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private a:NavController) {}

  aboutPage(){
    this.a.navigateForward('/about');
  }
}
