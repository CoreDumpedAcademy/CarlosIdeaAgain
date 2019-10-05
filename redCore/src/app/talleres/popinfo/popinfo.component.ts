import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})

export class PopinfoComponent implements OnInit {

  public data;

  constructor(public navParams: NavParams) { 
    this.data = this.navParams.data;
  }

  ngOnInit() {}

}
