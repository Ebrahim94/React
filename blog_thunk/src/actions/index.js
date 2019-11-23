import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS' , payload: response.data})
}

// export const fetchUser = (id) => (dispatch) => {
//      _fetchUser(id, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`)

//     dispatch({type:'FETCH_USER', payload:response.data})
// })

export const fetchUser = (id) => async (dispatch) => {
   const response = await jsonPlaceholder.get(`/users/${id}`)

   dispatch({type:'FETCH_USER', payload:response.data})
}

//the function below is the only one being dispatched so if you were to pass this in the component
// the actions in the body of the function will not be dispatched
// therefore we will have to dispatch them manually
export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    // to make sure no other logic is being done while the list of posts is being fetched we
    //  prepend the dispatch function with the await keyword
    await dispatch(fetchPosts())
    
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    console.log(userIds)
    userIds.forEach(id => dispatch(fetchUser(id)))
    dispatch(fetchUser)
}