import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { MissingPageErrorComponent } from './missing-page-error/missing-page-error.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: MissingPageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
