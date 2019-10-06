import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {

  public data;

  constructor(public params: NavParams, private modalController: ModalController) {
    this.data = this.params.data;
   }

  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
