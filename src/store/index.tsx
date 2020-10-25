import React, { ReactNode } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import { reducers } from "./reducer";
import { Store as mainStore } from "../type/store";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store: mainStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

type Props = {
  children: ReactNode;
};

export function StoreProvider({ children }: Props): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
