import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }