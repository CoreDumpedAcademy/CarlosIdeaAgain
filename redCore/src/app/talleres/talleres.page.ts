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
      description: 'Learn to use bots for web testing!',
      date: '05-10-2019'
    },
    {
      title: 'Hackathon Team',
      image: 'HackathonTeam.jpg',
      description: 'Learn about our Hackathon team!',
      date: '05-10-2019'
    },
    {
      title: 'C workshop',
      image: 'tallerC.png',
      description: 'Enroll in an introductory course to C',
      date: '18-10-2019'
    }
  ]

  public devWidth = (this.platform.width() > 992);

  ngOnInit() {
  }

}
