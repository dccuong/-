import { combineReducers } from "redux";
import arraySlice from "../page/Array/arraySlice";
import musicSlice from "../page/Audio/audioSlice";

const rootReducer = combineReducers({
 user:arraySlice,
 music:musicSlice.reducer
});
export default rootReducer;