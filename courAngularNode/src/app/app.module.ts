import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { TestComponent } from './components/test/test.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ButtonComponent,
    TestComponent,
    AboutmeComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
