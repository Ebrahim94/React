import api from '../api'
import { FETCH_POSTS, FETCH_TODOS, REQUEST } from './types'

export const getPosts = () => async (dispatch) => {
    const response = await api.get('/posts')
    dispatch( {
        type: FETCH_POSTS,
        payload: response
    })
}

export function getToDos() {
    return async (dispatch) =>{
        const response = await api.get('/todos')
    dispatch({
        type: FETCH_TODOS,
        payload: response
    })
    }
}

export const request = (route) =>{
    return{
        type: REQUEST,
        payload: route
    }
}