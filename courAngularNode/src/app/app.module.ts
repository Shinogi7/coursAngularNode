import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FichePersoAccueilComponent } from './components/fiche-perso-accueil/fiche-perso-accueil.component';
import { BoutonComponent } from './components/bouton/bouton.component';
import { CadreConnexionComponent } from './components/cadre-connexion/cadre-connexion.component';
import { CadreInscriptionComponent } from './components/cadre-inscription/cadre-inscription.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FichePersoAccueilComponent,
    BoutonComponent,
    CadreConnexionComponent,
    CadreInscriptionComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
