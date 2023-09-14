import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavLink = true;

  onNavLinkClick() {
    // Cette méthode est appelée lorsque le lien est cliqué
    // Elle masque le lien en définissant showNavLink sur false
    this.showNavLink = false;
  }
}
