import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  // { path: 'student', component: StudentListComponent },
  { path: 'teacher', component: TeacherListComponent },
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
