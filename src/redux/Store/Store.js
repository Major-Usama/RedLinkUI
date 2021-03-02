import { createStore, combineReducers } from 'redux';
import Reducer from '../reducers/NotesReducer';
const AppReducers =combineReducers({
   Reducer
})

const rootReducer = (state,action)=>{
  return AppReducers(state,action)
}

const store = createStore(rootReducer);

export default store;