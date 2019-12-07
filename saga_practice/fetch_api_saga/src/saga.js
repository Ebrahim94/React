import { put, takeLatest, select} from 'redux-saga/effects'
import api from './api'

function* fetchPostsAsync(){
    const state = yield select()
    const response = yield api.get(`/${state.route}`)
    console.log(state)
    yield put({type: "POSTS_FETCHED" , payload: response.data})
}

export function* fetchPostsSaga(){
    yield takeLatest('FETCH_POSTS', fetchPostsAsync)
}
