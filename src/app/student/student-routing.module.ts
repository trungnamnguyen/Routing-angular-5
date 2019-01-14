import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
const routes: Routes = [
  {path: 'student', component: StudentListComponent},
  {path: 'student/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
