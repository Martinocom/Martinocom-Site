import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { IngressComponent } from './pages/ingress/ingress.component';
import { UniversitaComponent } from './pages/universita/universita.component';
import { BananeComponent } from './pages/banane/banane.component';
import { ErrorComponent } from './pages/error/error.component';
import { ZiopixelComponent } from './pages/ziopixel/ziopixel.component';
import { TelegramComponent } from './pages/telegram/telegram.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'ingress', component: IngressComponent },
  { path: 'ziopixel', component: ZiopixelComponent },
  { path: 'universita', component: UniversitaComponent },
  { path: 'telegramVSothers', component: TelegramComponent },
  { path: 'banane', component: BananeComponent },

  { path: 'ingress.html', redirectTo: 'ingress', pathMatch: 'full'},
  { path: 'veritaZiopixel.html', redirectTo: 'ziopixel', pathMatch: 'full'},
  { path: 'universita.html', redirectTo: 'universita', pathMatch: 'full'},
  { path: 'telegram.html', redirectTo: 'telegramVSothers', pathMatch: 'full'},
  { path: 'banane.html', redirectTo: 'banane', pathMatch: 'full'},
  { path: 'index', redirectTo: '', pathMatch: 'full'},
  { path: 'index.html', redirectTo: '', pathMatch: 'full'},

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
