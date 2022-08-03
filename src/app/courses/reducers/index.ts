import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { loadedCourses, updateEditedCourse } from "../course.action";
import { Course } from "../model/course";

export const coursesFeatureKey = "courses";

export interface CourseState {
  courses: Course[];
}

export const courseInitialState: CourseState = {
  courses: [],
};

export const coursesReducer = createReducer(
  courseInitialState,
  on(loadedCourses, (state, action) => {
    return {
      courses: action.courses,
    };
  }),
  on(updateEditedCourse, (state, action) => {
    const updatedCourse = state.courses.slice();
    const cindex = updatedCourse.findIndex((x) => x.id === action.course.id);
    updatedCourse[cindex] = action.course;
    return {
      courses: [...updatedCourse],
    };
  })
);

export const metaReducers: MetaReducer<CourseState>[] = !environment.production
  ? []
  : [];
