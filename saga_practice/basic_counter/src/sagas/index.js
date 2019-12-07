import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT_ASYNC, INCREMENT } from '../actions/type'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync(){
    console.log('in here')
    yield delay(1000)
    yield put({
        type: INCREMENT,
        payload: 1
    })
}

export default function* increment(){
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}