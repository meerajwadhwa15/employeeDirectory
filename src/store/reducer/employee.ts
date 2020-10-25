import { Reducer } from "redux";
import { ReducerState, ReducerAction, Types } from "./../../type/employee";

export const initialState: ReducerState = {
  list: [],
  title: "",
  subordinatesName: [],
  isFetching: false,
  errorMessage: "",
};

const EmployeeReducer: Reducer<ReducerState, ReducerAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case Types.SET_EMPLOYEE_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case Types.FETCH_EMPLOYEE:
      return {
        ...state,
        errorMessage: "",
        title: action.title,
        subordinatesName: action.subordinatesName.map((subordinate) => {
          return { name: subordinate, direct: true };
        }),
      };
    case Types.ADD_SUBORDINATES:
      const employeeMap = new Set(
        state.subordinatesName.map((subordinate) => subordinate.name)
      );
      action.subordinatesName = action.subordinatesName.filter(
        (subordinate) => {
          const isDuplicate = employeeMap.has(subordinate);
          if (!isDuplicate) {
            employeeMap.add(subordinate);
          }
          return !isDuplicate;
        }
      );
      return {
        ...state,
        errorMessage: "",
        subordinatesName: [
          ...state.subordinatesName,
          ...action.subordinatesName.map((subordinate) => {
            return {
              name: subordinate,
              direct: false,
              title: action.title,
              reportsTo: action.reportsTo,
            };
          }),
        ],
      };
    case Types.FETCH_EMPLOYEE_ERROR:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
};

export default EmployeeReducer;
