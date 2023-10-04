import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurendharComponent } from './surendhar/surendhar.component';
import { MscomponentComponent } from './mscomponent/mscomponent.component';
import { TopnavecomponentComponent } from './topnavecomponent/topnavecomponent.component';
import { MobeilcomponentComponent } from './mobeilcomponent/mobeilcomponent.component';
import { ElectronicescomponentComponent } from './electronicescomponent/electronicescomponent.component';
import { TravelcomponentComponent } from './travelcomponent/travelcomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { LogiencomponentComponent } from './logiencomponent/logiencomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SurendharComponent,
    MscomponentComponent,
    TopnavecomponentComponent,
    MobeilcomponentComponent,
    ElectronicescomponentComponent,
    TravelcomponentComponent,
    FootercomponentComponent,
    LogiencomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
