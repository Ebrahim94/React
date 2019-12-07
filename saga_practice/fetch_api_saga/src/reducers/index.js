import { combineReducers } from 'redux'

function fetchedData(data=[], action){
    switch(action.type){
        case 'POSTS_FETCHED':
            return action.payload
        default:
            return data
    }
}

function route(data = 'posts', action){
    switch( action.type ){
        case 'FETCH_POSTS':
            return action.payload
        default:
            return data
    }
}

export default combineReducers({
    fetchedData,
    route
})