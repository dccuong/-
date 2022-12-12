import { combineReducers } from "redux";
import arraySlice from "../page/Array/arraySlice";


const rootReducer = combineReducers({
 user:arraySlice
});
export default rootReducer;