import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StudentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
