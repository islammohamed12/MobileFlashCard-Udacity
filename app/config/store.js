import reducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const middewares = [thunkMiddleware, logger];
const store = createStore(reducer, compose(applyMiddleware(...middewares)));
export default store;
