import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { InMemoryDataService } from './app.db';
import {HomeComponent} from "./home/containers/home/home.component";
import {initialState, spinnerReducer} from "./state/spinner/spinner.reducer";
import {Store, StoreModule} from "@ngrx/store";
import {State} from "./state/state";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'event', loadChildren: ()=> import('./event/event.module').then(x => x.EventModule) },
      { path: 'home', loadChildren: ()=> import('./home/home.module').then(x => x.HomeModule) }
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{ delay: 100 }),
    StoreModule.forRoot({ spinner: spinnerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
