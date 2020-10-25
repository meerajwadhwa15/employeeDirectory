import { combineReducers, Dispatch, Reducer } from 'redux'
import EmployeeReducer from './employee'

export interface ApplicationState {}

export const reducers: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
    EmployeeReducer,
})