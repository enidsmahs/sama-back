import {Component, Input, OnInit} from '@angular/core';
import {ServiceClientService} from '../../service/service-client.service';
import {ServiceUserService} from '../../service/service-user.service';

@Component({
  selector: 'app-sama-user',
  templateUrl: './sama-user.component.html',
  styleUrls: ['./sama-user.component.css']
})
export class SamaUserComponent implements OnInit {

  listeClient = [];
  listeUser = [];
  userRoles = [];

  client: any = {
    idClient: 0,
    nom: '',
    prenom: '',
    mail: '',
    telephone: '',
    adresses: {
      idAdresse: 0,
      numero: 0,
      telephone: '',
      ville: '',
      pays: ''
    }
  };

  user = {
    idUser: 0,
    nom: '',
    compteUser: {
      idCompteUser: 0,
      login: '',
      mdp: 'toorkee@123'
    },
    roles: []
  };

  constructor(
    private serviceClient: ServiceClientService,
    private serviceUser: ServiceUserService
  ) {}

  ngOnInit(): void {
    this.getAllClient();
    this.getAllUser();
    this.getAllRole();

  }

  getAllClient() {
    this.serviceClient.getAllClient()
      .subscribe((res: Array<any>) => {
        this.listeClient = res;
      },
        error1 => {
          console.log(error1);
        });
  }

  getAllRole() {
    this.serviceUser.getAllRole()
      .subscribe((res: Array<any>) => {
          this.userRoles = res;
        },
        error1 => {
          console.log(error1);
        });
  }

  getAllUser() {
    this.serviceUser.getAllUser()
      .subscribe((res:Array<any>) => {
          this.listeUser = res;
        },
        error1 => {
          console.log(error1);
        });
  }

  enregistrerUtilisateur(user) {

    let tabRolesActive: Array<any> = [];
    for (let r of this.userRoles) {
      if (r.selected === true) {
        tabRolesActive.push(r);
      }
    }
    console.log(tabRolesActive);

    this.serviceUser.saveUserRole({
      'nom': user.nom,
      'compteUser': {
        'idCompte': 0,
        'login': user.login,
        'mdp': 'toorkee@123'
      },
      'roles': tabRolesActive
    })
      .subscribe(
        (res) => {
          // alert('client enrégistré...');
          this.listeUser.push(res);
        },
        err => {
          console.log('Error');
        });
    /* this.user.id_user = 0;
    this.user.nom = user.nom;
    this.user.compte.login = user.login;


    console.log(this.user);
   /* this.serviceUser.setUser(this.user);
    this.serviceUser.saveUser()
      .subscribe(
        (res) => {
          // alert('client enrégistré...');
          this.listeUser.push(res);
        },
        err => {
          console.log('Error');
        }); */
  }

  deleteClient(id) {
    this.serviceClient.deleteClient(id).subscribe(
      (res) => {
        if (res == true) {
          this.deleteInTableau(id, this.listeClient);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteUser(id) {
    this.serviceUser.deleteUserById(id).subscribe(
      (res) => {
        if (res == true) {
          this.deleteInTableau(id, this.listeUser);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteInTableau(id: number, tab: Array<any>){
    const index = this.getIndexTabById(id, this.listeUser);
    if(index >= 0){
      tab.splice(index, 1);
    }
  }

  getIndexTabById(id: number, tab: Array<any>){
    const index = tab.findIndex(
      (s) => {
        return s.idUser === id;
      }
    );
    return index;
  }

  enregistrerClient(client) {
    this.client.idClient = 0;
    this.client.nom = client.nom;
    this.client.prenom = client.prenom;
    this.client.mail = client.mail;
    this.client.telephone = client.telephone;
    this.client.adresses.telephone = client.telephone;
    this.client.adresses.numero = client.numero;
    this.client.adresses.ville = client.ville;
    this.client.adresses.pays = client.pays;

    this.serviceClient.setClient(this.client);
    this.serviceClient.saveClient()
      .subscribe(
        (res) => {
         // alert('client enrégistré...');
          this.listeClient.push(res);
        },
        err => {
          console.log('Error');
        });
  }

}
