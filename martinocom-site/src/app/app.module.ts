import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngressComponent } from './pages/ingress/ingress.component';
import { UniversitaComponent } from './pages/universita/universita.component';
import { BananeComponent } from './pages/banane/banane.component';
import { ErrorComponent } from './pages/error/error.component';
import { SquareComponent } from './components/square/square.component';
import { ZiopixelComponent } from './pages/ziopixel/ziopixel.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IngressComponent,
    UniversitaComponent,
    BananeComponent,
    ErrorComponent,
    SquareComponent,
    ZiopixelComponent,
    NavigatorComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
