import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavLink = true;
  ajouterEquipeActive = false;

  onNavLinkClick() {
    this.showNavLink = false;
    this.ajouterEquipeActive = false; 
  }
    masquerAjouterEquipe() {
      this.ajouterEquipeActive = false;
  }

  title = 'TP1';


  equipeToAdd: any = {};


  ajouterEquipe() {
    if (this.equipeToAdd.nom && this.equipeToAdd.ville && this.equipeToAdd.abreviation) {

      const nouvelleEquipe = {
        nom: this.equipeToAdd.nom,
        ville: this.equipeToAdd.ville,
        abreviation: this.equipeToAdd.abreviation
      };

      const equipesExistantes = JSON.parse(localStorage.getItem('equipes') || '[]');
      equipesExistantes.push(nouvelleEquipe);
      localStorage.setItem('equipes', JSON.stringify(equipesExistantes));

      this.equipeToAdd = {};
    }
  }
}
