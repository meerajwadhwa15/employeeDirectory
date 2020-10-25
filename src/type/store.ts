import { Action as ReduxAction, Store as ReduxStore } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ReducerState as EmployeeReducerState } from "./employee";

export type Action<T extends string = string, P = void> = P extends void
  ? ReduxAction<T>
  : ReduxAction<T> & Readonly<{ payload: P }>;

export type State = {
  EmployeeReducer: EmployeeReducerState;
};

export type Dispatch = ThunkDispatch<State, void, Action>;

export type Store = ReduxStore<State, Action> & {
  dispatch: Dispatch;
};
