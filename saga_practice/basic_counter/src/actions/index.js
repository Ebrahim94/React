import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from './type'

export const increment = () =>{
    return {
        type: INCREMENT,
        payload: 1
    }
}

export const decrement = () =>{
    return {
        type: DECREMENT,
        payload: -1
    }
}

export const incrementAsync = () =>{
    return{
        type: INCREMENT_ASYNC
    }
}
