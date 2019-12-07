import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from '../actions/type'

function values(value = 20, action){
    switch(action.type){
        case INCREMENT:
            return value + action.payload
        case DECREMENT:
            return value + action.payload
        default:
            return value
    }
}

export default combineReducers({value : values})