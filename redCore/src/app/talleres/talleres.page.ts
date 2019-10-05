import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.page.html',
  styleUrls: ['./talleres.page.scss'],
})
export class TalleresPage implements OnInit {
  constructor(public platform: Platform) { }

  public workshopAds = [
    {
      title: 'Web Testing',
      image: 'WebTesting5.png',
      description: 'Aprende a usar bot para probar tus paginas web',
      date: '05-10-2019'
    },
    {
      title: ' Introducción Equipo de Hackathon',
      image: 'HackathonTeam.jpg',
      description: 'Aprede sobre nuestro equipo de Hackathon',
      date: '05-10-2019'
    },
    {
      title: 'Taller de C',
      image: 'tallerC.png',
      description: '¡Súbete a bordo de nuestro curso de C, grumete!',
      date: '18-10-2019'
    }
  ]

  public devWidth = (this.platform.width() > 992);

  ngOnInit() {
  }

}
