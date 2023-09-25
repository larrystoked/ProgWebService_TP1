import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavLink = true;

  onNavLinkClick() {

    this.showNavLink = false;
  }

  title = 'TP1';
  
}
