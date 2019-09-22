import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import book from './reducers/bookReducer';

export default createStore(
    combineReducers({
        math,
        user,
        book
    }),
    {},
    applyMiddleware(logger)
);