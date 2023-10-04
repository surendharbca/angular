import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MscomponentComponent } from './mscomponent/mscomponent.component';
import { MobeilcomponentComponent } from './mobeilcomponent/mobeilcomponent.component';
import { ElectronicescomponentComponent } from './electronicescomponent/electronicescomponent.component';
import { TopnavecomponentComponent } from './topnavecomponent/topnavecomponent.component';
import { TravelcomponentComponent } from './travelcomponent/travelcomponent.component';
import { LogiencomponentComponent } from './logiencomponent/logiencomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'hom', component: TopnavecomponentComponent},
{path: 'bca', component: MscomponentComponent },

{ path: 'vs', component: MobeilcomponentComponent},

{ path: 'mass', component: ElectronicescomponentComponent },
{path: 'mss',component: TravelcomponentComponent},
{path: 'log',component: LogiencomponentComponent},
{path: 'footer', component: FootercomponentComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
