import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

// Assurez-vous que le type Equipe correspond à la structure de vos données
import { Equipe } from './equipe.model'; // Remplacez 'equipe.model' par le chemin de votre modèle

@Component({
  selector: 'app-equipe-nfl',
  templateUrl: './equipe-nfl.component.html',
  styleUrls: ['./equipe-nfl.component.css']
})
export class EquipeNFLComponent implements OnInit {
  equipesNFL: Equipe[] = []; // Utilisez le type approprié
  equipeSelectionnee: string | undefined;

  constructor(private http: HttpClient, private router: Router) { } // Injectez Router dans le constructeur

  ngOnInit(): void {
    const apiUrl = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLTeams?rosters=true&schedules=true&topPerformers=true&teamStats=true';

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c9e94bd108msh320bd6bbae9f021p1a3603jsn0473b241db85',
      'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com',
    });

    this.http.get<any>(apiUrl, { headers }).subscribe(
      (response) => {
        // Assurez-vous que la structure de la réponse correspond à vos attentes
        this.equipesNFL = response.body;
        console.log(this.equipesNFL); // Pour le débogage
      },
      (error) => {
        console.error('Erreur lors de la récupération des équipes NFL :', error);
      }
    );
  }

  onSubmit() {
    // Gérer la soumission du formulaire ici...
    console.log('Équipe sélectionnée :', this.equipeSelectionnee);
    // Vous pouvez ajouter d'autres actions à effectuer lors de la soumission du formulaire.
  }

  getEquipeVille(nomEquipe: string): string {
    const equipe = this.equipesNFL.find(e => e.teamAbv === nomEquipe);
    return equipe ? equipe.teamCity : '';
  }

  getEquipeLogo(teamAbv: string): string {
    return `./assets/logos/${teamAbv}.webp`; // Utilisez le chemin relatif pour accéder au logo
  }

  afficherRoster() {
    if (this.equipeSelectionnee) {
      // Naviguez vers la page du roster avec l'équipe sélectionnée comme paramètre
      this.router.navigate(['/roster', this.equipeSelectionnee]);
    }
  }
}
