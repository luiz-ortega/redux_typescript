import { applyMiddleware, createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
