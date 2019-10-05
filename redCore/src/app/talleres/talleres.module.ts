import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TalleresPage } from './talleres.page';
import { PopinfoComponent } from './popinfo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: TalleresPage
  }
];

@NgModule({
  declarations: [TalleresPage, PopinfoComponent],
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
export class TalleresPageModule {}
