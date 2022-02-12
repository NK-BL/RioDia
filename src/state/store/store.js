import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import {
    epicMiddleware,
    runMiddleware
} from "../../observer/middleware/epicMiddleware.js";
import createRootReducer from "../reducers/index.js";


export const history = createBrowserHistory();


const getStoreByEnvironment = () => {
    let storeByEnv;

    storeByEnv = createStore(
        createRootReducer(history),
        {},
        compose(applyMiddleware(routerMiddleware(history), epicMiddleware))
    );

    return storeByEnv;
};

const store = getStoreByEnvironment();

runMiddleware(epicMiddleware);

export default store;