import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  err;

  constructor(private router: Router, private api: APIService, private storage: Storage) { }

  ngOnInit() {
  }

  register(form) {
    if (form.form.value.password === form.form.value.confirm) {
      this.api.registrarUsuario(form.form.value).subscribe((data) => {
        this.storage.set('EMAIL', form.form.value.email);
        this.storage.set('TOKEN', 'OK');
        this.router.navigateByUrl('core/home');
      });
    } else {
      this.err = 'Las contraseñas no coinciden';
    }
  }

  goBack() {
    this.router.navigateByUrl('login');
  }

}
