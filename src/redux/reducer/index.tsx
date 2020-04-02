import {combineReducers} from 'redux'
import data from './dataReducer'
import personalData from './personalDataReducer'

const reducer = combineReducers ({
    data,
    personalData
})

export default reducer;