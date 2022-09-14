import {combineReducers} from "redux";
import donations from './donations';
import {loading} from "./loading";

export default combineReducers({donations, loading});