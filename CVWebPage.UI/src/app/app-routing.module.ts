import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { HomeComponent } from './Pages/home/home.component';
import { MissingPageErrorComponent } from './Pages/missing-page-error/missing-page-error.component';

const routes: Routes = [
  {path: 'projects', component: ProjectsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: MissingPageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
