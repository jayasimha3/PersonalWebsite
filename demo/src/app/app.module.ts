import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'extracurricular',
    component: ExtracurricularComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'work-experience',
    component: WorkExperienceComponent
  },
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ExtracurricularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
