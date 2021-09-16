import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@ipoc/ui';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, UiModule, IonicModule.forRoot()],
  //providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
