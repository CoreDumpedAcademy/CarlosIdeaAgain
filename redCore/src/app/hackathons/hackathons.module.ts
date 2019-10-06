import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HackathonsPage } from './hackathons.page';
import { PopinfoComponent } from './popinfo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: HackathonsPage
  }
];

@NgModule({ 
  declarations: [HackathonsPage, PopinfoComponent],
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class HackathonsPageModule {}
