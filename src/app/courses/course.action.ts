import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadCourses = createAction("[Home Page] Load All Courses");

export const loadedCourses = createAction(
  "[Home Page] Loaded All Courses",
  props<{ courses: Course[] }>()
);

export const editCourse = createAction(
  "[ Edit dialog] Edit Course",
  props<{ course: Course }>()
);

export const updateEditedCourse = createAction(
  "[From Effect] Update Edited course",
  props<{ course: Course }>()
);
