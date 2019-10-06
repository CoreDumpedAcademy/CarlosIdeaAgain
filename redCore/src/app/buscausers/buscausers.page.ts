import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { User2 } from '../interfaces/user2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscausers',
  templateUrl: './buscausers.page.html',
  styleUrls: ['./buscausers.page.scss'],
})
export class BuscausersPage implements OnInit {

  constructor(private api: APIService, private router: Router, private storage: Storage) { }

  hasLoaded = false;
  users: User2[];

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.api.getAllUsers().subscribe((data: {
      users: User2[]} ) => {
      this.users = data.users;
      this.hasLoaded = true;
    });
  }

  goBack() {
    this.router.navigateByUrl('core/home');
  }

  async doRefresh(event) {
    await this.loadUsers();
    event.target.complete();
  }

  loadProfile(user) {
    this.storage.set('VISITA', user);
    this.router.navigateByUrl('verperfil');
  }

}
