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

  client = {
    idClient: 0,
    nom: '',
    prenom: '',
    mail: '',
    telephone: '',
    compte: {
      idCompte: 0,
      login: '',
      mdp: ''
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
  }

  enregistrerClient(client) {

    console.log(client);

    this.serviceClient.saveClient({
      'nom': client.nom,
      'prenom': client.prenom,
      'mail': client.mail,
      'telephone': client.telephone,
      'compte': {
        'idCompte': 0,
        'login': client.login,
        'mdp': client.mdp
      }
    }).subscribe(
        (res) => {
         // alert('client enrégistré...');
          this.listeClient.push(res);
        },
        err => {
          console.log('Error');
        });
  }

  deleteClient(id) {
    this.serviceClient.deleteClient(id).subscribe(
      (res) => {
        if (res == true) {
          this.deleteInTableauClient(id, this.listeClient);
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
          this.deleteInTableauUser(id, this.listeUser);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteInTableauUser(id: number, tab: Array<any>){
    const index = this.getIndexTableUserById(id, tab);
    if(index >= 0){
      tab.splice(index, 1);
    }
  }

  deleteInTableauClient(id: number, tab: Array<any>){
    const index = this.getIndexTableClientById(id, tab);
    if(index >= 0){
      tab.splice(index, 1);
    }
  }

  getIndexTableUserById(id: number, tab: Array<any>){
    const index = tab.findIndex(
      (s) => {
        return s.idUser === id;
      }
    );
    return index;
  }

  getIndexTableClientById(id: number, tab: Array<any>){
    const index = tab.findIndex(
      (s) => {
        return s.idClient === id;
      }
    );
    return index;
  }

}
