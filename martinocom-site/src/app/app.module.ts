import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { IngressComponent } from './pages/ingress/ingress.component';
import { UniversitaComponent } from './pages/universita/universita.component';
import { BananeComponent } from './pages/banane/banane.component';
import { ErrorComponent } from './pages/error/error.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IngressComponent,
    UniversitaComponent,
    BananeComponent,
    ErrorComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
