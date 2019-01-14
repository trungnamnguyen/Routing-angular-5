import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [StudentDetailComponent,StudentListComponent],
  imports: [
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
