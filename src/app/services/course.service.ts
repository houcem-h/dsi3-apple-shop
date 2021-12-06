import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  /**
   * Get all courses
   * @returns Observable<Course[]>
   */
  all() {
  }


  /**
   * Get a course with the given id
   * @param id : course id
   * @returns Observable<Course>
   */
  get(id: string) {
  }

  /**
   * Create a new course
   * @param course new course to create
   */
  create(course: any) {

  }

  /**
   * Update a course with the given id
   * @param id course id to update
   * @param course new course data
   */
  update(id: string, course: any) {
  }

  /**
   * Delete a course with the given id
   * @param id course id to delete
   */
  delete(id: string) {

  }
}
