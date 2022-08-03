import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, tap } from "rxjs/operators";
import {
  editCourse,
  loadCourses,
  loadedCourses,
  updateEditedCourse,
} from "./course.action";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CourseEffects {
  loadAllCourses$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadCourses),
      concatMap((action) => this.courseService.findAllCourses()),
      map((courses) => loadedCourses({ courses }))
    )
  );

  editCourse$ = createEffect(() =>
    this.action$.pipe(
      ofType(editCourse),
      concatMap((action) =>
        this.courseService.saveCourse(action.course.id, action.course)
      ),
      map((course) => updateEditedCourse({ course: course }))
    )
  );

  updatedCourse$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(updateEditedCourse),
        tap(() => {
          this.courseService.courseUpdated.next(true);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private courseService: CoursesHttpService
  ) {}
}
