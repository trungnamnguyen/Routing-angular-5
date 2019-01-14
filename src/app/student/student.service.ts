import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService:MessageService) { }

  getStudents(): Observable<Student[]>{
    this.messageService.addMessage('Danh sach sinh vien:');
    return of(STUDENTS);
  }

  getHero(id: number|string){
    return this.getStudents().pipe(
      map((students:Student[])=> students.find(student=>student.id===+id))
    );
  }
}
