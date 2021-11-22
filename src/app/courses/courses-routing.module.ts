import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [{ path: '', component: CoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CourseDetailsComponent
  ]
})
export class CoursesRoutingModule { }
