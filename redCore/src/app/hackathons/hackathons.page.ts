import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from './popinfo/popinfo.component';

@Component({
  selector: 'app-hackathons',
  templateUrl: './hackathons.page.html',
  styleUrls: ['./hackathons.page.scss'],
})
export class HackathonsPage implements OnInit {

  constructor(public platform: Platform, public popoverCtr: PopoverController) { }

  public hackathonAds = [
    {
      title: 'Mamuthack',
      image: 'mamuthack.jpg',
      description: '',
      date: '05-10-2019'
    },
    {
      title: 'Balena',
      image: 'balena.jpeg',
      description: '',
      date: '26-10-2019'
    },
    {
      title: 'Blockchain Solutions World',
      image: 'blockchainSolutions.jpg',
      description: '',
      date: '16-10-2019'
    }
  ]

  public devWidth = (this.platform.width() > 992);

  async showPopover(ad){
    /*
    const popover = await this.popoverCtr.create({      //Buscar solocion compatible con
      component: PopinfoComponent,                      //los foros para popovers
      componentProps: ad
    });

    await popover.present();
    */
  }

  public clicktest(event: any) {
    console.log("himom");
  }

  ngOnInit() {
  }

}
