import {createStore} from 'redux'
import {toggleLogin} from './Reducers/LoginReducer'

export default createStore(toggleLogin)