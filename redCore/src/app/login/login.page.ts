import { Storage } from '@ionic/storage';
import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  err = '';

  constructor(
    private auth: AuthserviceService,
    private router: Router,
    private api: APIService,
    private storage: Storage
    ) { }

  async login(form) {
    this.api.logIn(form.value).subscribe(() => {
      this.storage.set('EMAIL', form.value.email);
      this.storage.set('TOKEN', 'OK'); // <---- horrible
      this.router.navigateByUrl('');
    }, (error) => {
      if (error.status === 404) {
        this.err = 'Usuario no encontrado; ¿Seguro que te has registrado?';
      } else if (error.status === 403) {
        this.err = 'Contraseña incorrecta.';
      } else { this.err = 'Error del servidor'; }
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

  ngOnInit() { }

}
