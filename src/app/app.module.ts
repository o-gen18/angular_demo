import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'event', loadChildren: ()=> import('./event/event.module').then(x => x.EventModule) },
      { path: 'home', loadChildren: ()=> import('./home/home.module').then(x => x.HomeModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
