import { AnyAction } from "redux";
import { AxiosResponse, AxiosError } from "axios";
import {
  EmployeeFetchSuccessActionType,
  EmployeeSetFetch,
  employeeListTypeFetchErrorActionType,
  Types,
  AddSubordinatesActionType,
} from "./../../type/employee";
import { ThunkDispatch } from "redux-thunk";
import Fetch, { ServerProps } from "./../../libs/fetch";
import { NO_USER_FOUND } from "./../../config/constants";
import { EMPLOYEE_DETAIL_URL } from "./../../config/api";

export const isFetching = (isFetching: boolean): EmployeeSetFetch => {
  return { type: Types.SET_EMPLOYEE_FETCHING, isFetching };
};

export const FetchSubordinatesTree = (
  directSubordinates: Array<string>,
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  const dispatchAction = (
    title: string,
    subordinates: Array<string>,
    reportsTo: string
  ) => {
    const addSubordinates: AddSubordinatesActionType = {
      type: Types.ADD_SUBORDINATES,
      title,
      reportsTo,
      subordinatesName: subordinates,
    };
    dispatch(addSubordinates);
  };

  const fetchURL = (name: string) =>
    Fetch({
      url: `${EMPLOYEE_DETAIL_URL}${name}`,
    });

  const promiseArray = directSubordinates.map(fetchURL);

  Promise.all(promiseArray)
    .then((data) => {
      data.forEach((result, index) => {
        if (result.data) {
          dispatchAction(
            result.data[0],
            result.data[1]["direct-subordinates"] || [],
            directSubordinates[index]
          );
        }
      });
    })
    .catch((err) => {});
};

export const FetchSubordinates = (name: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const showLoader: EmployeeSetFetch = isFetching(true);
    dispatch(showLoader);
    const serverProps: ServerProps = {
      url: `${EMPLOYEE_DETAIL_URL}${name}`,
    };

    return Fetch(serverProps)
      .then((response: AxiosResponse) => {
        const directSubordinates =
          response.data[1]["direct-subordinates"] || [];
        const fetchEmployeeSuccess: EmployeeFetchSuccessActionType = {
          type: Types.FETCH_EMPLOYEE,
          title: response.data[0],
          subordinatesName: directSubordinates,
        };
        dispatch(fetchEmployeeSuccess);

        // Fetch Tree
        FetchSubordinatesTree(directSubordinates, dispatch);
      })
      .catch((err: AxiosError) => {
        const fetchEmployeeError: employeeListTypeFetchErrorActionType = {
          type: Types.FETCH_EMPLOYEE_ERROR,
          message: NO_USER_FOUND,
        };
        dispatch(fetchEmployeeError);
      })
      .finally(() => {
        const hideLoader: EmployeeSetFetch = isFetching(false);
        dispatch(hideLoader);
      });
  };
};
