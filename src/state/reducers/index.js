import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";


const func = (history) =>
    combineReducers({
        router: connectRouter(history),
        layout: layoutReducer
    });

export default func;
