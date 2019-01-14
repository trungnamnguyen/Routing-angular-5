import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student$: Observable<Student>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StudentService
  ) { }

  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
    );
  }

  goToStudents(student: Student) {
    let studentId = student ? student.id : null;
    this.router.navigate(['/student']);
  }

}
