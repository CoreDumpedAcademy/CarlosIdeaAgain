import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  constructor() { }

  public jobOfferAds = [
    {
      puesto: 'Desarrollo Sorftware .NET',
      image: 'altran.png',
      empresa: 'Altran España',
      lugar: 'Barcelona'
    },
    {
      puesto: 'Comercial software B2B',
      image: 'michaelPage.png',
      empresa: 'Michael Page',
      lugar: 'Barcelona'
    },
    {
      puesto: 'Consulto/a funcional-implementación de software',
      image: 'axxon.jpeg',
      empresa: 'AXXON SELECTING ETT S.L.U.',
      lugar: 'Barcelona'
    }
  ]

  ngOnInit() {
  }

}
