import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MaterialPackModule } from './material-pack/material-pack.module';
import { MissingPageErrorComponent } from './missing-page-error/missing-page-error.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MissingPageErrorComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialPackModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
