import { User } from './../interfaces/user';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { APIService } from '../api.service';

@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.page.html',
  styleUrls: ['./verperfil.page.scss'],
})
export class VerperfilPage implements OnInit {

  email: string;
  user: User;
  hasLoaded = false;
  balance: number;
  status: string;
  found = false;

  sliderConfig = {
    loop: false,
    initialSlide: 1,
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 4
  };

  constructor(private router: Router, private auth: AuthserviceService, private API: APIService, private storage: Storage) { }

  async loadData() {
    this.email = await this.storage.get('VISITA');
    this.API.tieneCuenta(this.email).then((promise) => {
      promise.subscribe(
        (data: User) => {
          this.user = data;
          this.alreadyFollowing();
        },
        () => {
          this.router.navigateByUrl('login');
        }
      );
    });
  }

  verInsignia(ins: {
    descripcion: string,
    nombre: string
  }) {
    console.log(ins);
  }

  // tslint:disable-next-line: use-life-cycle-interface
  async ngOnInit() {
    await this.loadData();
  }

  ionViewWillEnter() {
    this.loadData();
  }

  goBack() {
    this.router.navigateByUrl('buscausers');
  }

  async seguir() {
    const a = await this.storage.get('VISITA');
    const quien = await this.storage.get('EMAIL');
    const body = {
      email: a
    };
    this.API.seguir(quien, body).subscribe(() => {
      location.reload();
    }, () => {
      location.reload();
    });
  }

  async alreadyFollowing() {
    const current = await this.storage.get('EMAIL');
    this.user.user.seguidores.forEach(seguidor => {

      if (seguidor === current) {
        this.found = true;
      }
    });
    this.hasLoaded = true;
  }

  unfollow() {

  }

}
