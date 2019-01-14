import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student$: Observable<Student[]>;
  selectedId: number;
  constructor(
    private route: ActivatedRoute,
    private service: StudentService
  ) { }

  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getStudents();
      })
    );
  }

}
