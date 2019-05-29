import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContaminacionDelAiresPage } from './contaminacion-del-aires.page';

const routes: Routes = [
  {
    path: '',
    component: ContaminacionDelAiresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContaminacionDelAiresPage]
})
export class ContaminacionDelAiresPageModule {}
