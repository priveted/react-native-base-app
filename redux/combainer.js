import { combineReducers } from "redux";
import { defaultReducer } from "./reducers/default";
export const Combainer = combineReducers({
    default: defaultReducer
});