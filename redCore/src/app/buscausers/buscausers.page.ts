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

  constructor(private api: APIService, private router: Router) { }

  hasLoaded = false;
  users: User2[];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.api.getAllUsers().subscribe((data: {
      users: User2[]} ) => {
      this.users = data.users;
      this.hasLoaded = true;
      console.log(this.users);
    });
  }

  goBack() {
    this.router.navigateByUrl('core/home');
  }

}
