
//   // exports: [
//   //   ListComponent,
//   //   AddComponent
//   // ],

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { ListComponent } from './list/list.component';
// import { IonicModule } from '@ionic/angular';
// //import { AddComponent } from './add/add.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     //IonicModule,
//     RouterModule.forChild([
//       { path: '', component: ListComponent } 
//     ])
//   ],
//   declarations: [ListComponent],
// })
// export class UiModule {}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AddComponent } from './add/add.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { UIDataAccessModule } from '@papp/ipapp/data-access';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, BrowserModule, RouterModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ListComponent } 
    ]),
    UIDataAccessModule],
  declarations: [AddComponent, ListComponent],
  exports: [ AddComponent, ListComponent],
})
export class UiModule {}