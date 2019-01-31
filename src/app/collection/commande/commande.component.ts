import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  Commande = {
      "idCommande":1,
      "dateDebut":"2015-03-01",
      "dateFin":"2015-03-02",
      "etatCommande":0,
      "client":{"idClient":14},
      "ligneCommandes":[{
        "quantite":1,
        "prix":200000,
        "produit":{
          "idProduit":0,
          "modele":{"idModel":19},
          "tissus":[{"idTissu":16}],
          "mesure":{
            "idMesure":137,
            "ligneMesures":[{"proprieteMesure":"COU","valeur":2.7},
              {"proprieteMesure":"BRAS","valeur":2.5}

            ]
          },
          "ligneProprietes":[{"propriete":{"idPropriete":62}}]

        }
      }]

  };

  constructor() { }

  ngOnInit() {
  }

}
