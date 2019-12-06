import { combineReducers } from 'redux'
import { FETCH_TODOS, FETCH_POSTS, REQUEST} from '../actions/types'

const dataStore = ( store = [], action ) =>{

    switch(action.type){
        case FETCH_TODOS:
            return action.payload
        case FETCH_POSTS:
            return action.payload
        default:
            return store
    }
}

const requestType = ( store = '', action) => {
    if (action.type === REQUEST){
        return action.payload
    }
    return store
}

export default combineReducers({
    data : dataStore,
    req: requestType
})

