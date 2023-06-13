import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

const routes: Routes = [
    {
    path:'',
    component:AboutmeComponent
    },
    {
    path:'card',
    component:CardComponent
    },
    {path:'experiences',
    component:ExperiencesComponent
    } 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
