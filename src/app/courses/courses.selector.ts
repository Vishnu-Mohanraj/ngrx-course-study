import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { compareCourses } from "./model/course";
import { CourseState } from "./reducers";

export const selectCourses = createFeatureSelector<CourseState>("courses");

export const allCourses = createSelector(selectCourses, (course) =>
  course.courses.slice().sort(compareCourses)
);
