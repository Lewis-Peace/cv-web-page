import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { MaterialPackModule } from './Pages/material-pack.module';
import { MissingPageErrorComponent } from './Pages/missing-page-error/missing-page-error.component';
import { EventsComponent } from './Pages/home/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectComponent } from './Pages/projects/project/project.component';

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
