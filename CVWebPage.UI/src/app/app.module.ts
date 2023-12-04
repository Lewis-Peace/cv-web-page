import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { MaterialPackModule } from './material-pack/material-pack.module';
import { MissingPageErrorComponent } from './missing-page-error/missing-page-error.component';
import { EventsComponent } from './Components/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './Components/project/project.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MissingPageErrorComponent,
    EventsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialPackModule,
    BrowserAnimationsModule,
    MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
