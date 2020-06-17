import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, ExtraOptions, NavigationExtras } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
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
    component: HomeComponent
  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  //onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled'
  //relativeLinkResolution: 'corrected'
  // ...any other options you'd like to use
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ExtracurricularComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
