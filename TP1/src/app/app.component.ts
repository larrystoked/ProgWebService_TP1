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
    this.ajouterEquipeActive = false; // Ajoutez cette ligne pour masquer le formulaire
  }
    masquerAjouterEquipe() {
      this.ajouterEquipeActive = false;
  }

  title = 'TP1';

  // Ajoutez une propriété pour stocker les équipes ajoutées
  equipeToAdd: any = {};

  // Ajoutez une méthode pour gérer l'ajout d'équipes
  ajouterEquipe() {
    if (this.equipeToAdd.nom && this.equipeToAdd.ville && this.equipeToAdd.abreviation) {
      // Créez un objet représentant l'équipe
      const nouvelleEquipe = {
        nom: this.equipeToAdd.nom,
        ville: this.equipeToAdd.ville,
        abreviation: this.equipeToAdd.abreviation
      };

      // Stockez l'équipe dans le localStorage
      const equipesExistantes = JSON.parse(localStorage.getItem('equipes') || '[]');
      equipesExistantes.push(nouvelleEquipe);
      localStorage.setItem('equipes', JSON.stringify(equipesExistantes));

      // Réinitialisez l'objet pour permettre l'ajout d'autres équipes
      this.equipeToAdd = {};

      // Mettez à jour la liste des équipes NFL (peut nécessiter une actualisation de la page)
      // Vous pouvez émettre un événement ou effectuer une action appropriée ici
    }
  }
}
