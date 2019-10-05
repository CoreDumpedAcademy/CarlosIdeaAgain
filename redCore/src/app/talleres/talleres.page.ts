import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from './popinfo/popinfo.component';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.page.html',
  styleUrls: ['./talleres.page.scss'],
})
export class TalleresPage implements OnInit {
  constructor(public platform: Platform, public popoverCtr: PopoverController) { }

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

  async showPopover(){
    const popover = await this.popoverCtr.create({
      component: PopinfoComponent
    });

    await popover.present();
  }

  public clicktest(event: any) {
    console.log("himom");
  }

  ngOnInit() {
  }

}
