import loggedReducer from './signIn'
import changes from './onChange'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    loggedReducer,
    changes
})

export default reducer