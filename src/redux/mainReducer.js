import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11114573Reducer from '../features/SignIn11114573/redux/reducers'
import SignIn2114498Reducer from '../features/SignIn2114498/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11114573: SignIn11114573Reducer,
SignIn2114498: SignIn2114498Reducer,

});