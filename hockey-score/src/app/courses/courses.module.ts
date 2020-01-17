import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule
} from "@angular/material";



@NgModule({
  declarations: [CourseComponent, CourseListComponent],
  exports: [CourseComponent, CourseListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
  ]
})
export class CoursesModule { }
