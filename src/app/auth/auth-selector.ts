import { createFeatureSelector, createSelector } from "@ngrx/store";
import { createFeatureReducerFactory } from "@ngrx/store/src/utils";
import { AuthState } from "./reducers";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
