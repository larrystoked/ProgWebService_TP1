import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  equipeSelectionnee: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérez le paramètre de l'équipe sélectionnée depuis l'URL
    this.route.params.subscribe(params => {
      this.equipeSelectionnee = params['equipe'];
      // Utilisez cette valeur pour afficher le roster de l'équipe sélectionnée
      console.log('Équipe sélectionnée :', this.equipeSelectionnee);
      // Chargez ici les données du roster de l'équipe sélectionnée si nécessaire
    });
  }
}

