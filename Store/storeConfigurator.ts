import {createStore} from 'redux'
import {globalDispatcher} from "./Reducers/AppReducer";

export default createStore(globalDispatcher)