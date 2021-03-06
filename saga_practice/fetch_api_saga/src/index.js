import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import { fetchPostsSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(fetchPostsSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))