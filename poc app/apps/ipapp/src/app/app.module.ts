/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
//import { ListComponent } from 'libs/ui/src/lib/list/list.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ListComponent } from 'libs/ui/src/lib/List/list.component';
import { reducer } from '@papp/ipapp/data-access';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { uiEffects } from 'libs/ipapp/data-access/src/lib/+state/ui.effects';
import { AddComponent } from 'libs/ui/src/lib/Add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent],
  entryComponents: [],
  imports: [
    FormsModule, ReactiveFormsModule,
    HttpClientModule, BrowserModule, RouterModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, 
    //StoreModule.forRoot(reducer),
    StoreModule.forRoot({}),
    StoreModule.forFeature("ui",reducer),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'list', loadChildren: () => import('@papp/ipapp/data-access').then(m => m.UIDataAccessModule) }
    ]),
    EffectsModule.forRoot([uiEffects]),
    //!environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports:[AppRoutingModule, ListComponent, AddComponent]
})
export class AppModule {}
