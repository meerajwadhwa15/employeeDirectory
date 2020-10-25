export type employee = {};

export type employeeListType = employee[];

export type ReducerState = {
  list: employeeListType;
  title: string;
  subordinatesName: Array<{ name: string }>;
  isFetching: boolean;
  errorMessage: string;
};

export type ReducerAction = {
  type: string;
  list: employeeListType;
  title: string;
  subordinatesName: Array<string>;
  isFetching: boolean;
  message: string;
  reportsTo: string;
};

export type EmployeeFetchSuccessActionType = {
  type: Types.FETCH_EMPLOYEE;
  title: string;
  subordinatesName: Array<string>;
};

export interface EmployeeSetFetch {
  type: Types.SET_EMPLOYEE_FETCHING;
  isFetching: boolean;
}

export type employeeListTypeFetchErrorActionType = {
  type: Types.FETCH_EMPLOYEE_ERROR;
  message: string;
};

export type AddSubordinatesActionType = {
  type: Types.ADD_SUBORDINATES;
  title: string;
  reportsTo: string;
  subordinatesName: Array<string>;
};

export enum Types {
  SET_EMPLOYEE_FETCHING = "SET_EMPLOYEE_FETCHING",
  FETCH_EMPLOYEE = "FETCH_EMPLOYEE",
  FETCH_EMPLOYEE_ERROR = "FETCH_EMPLOYEE_ERROR",
  ADD_SUBORDINATES = "ADD_SUBORDINATES",
}
