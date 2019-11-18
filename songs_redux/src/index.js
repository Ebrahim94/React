//3rd party dependancies
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//My dependancies
import App from './components/App'
import reducers from './reducers'

//Render the application
ReactDOM.render(
    <Provider store ={createStore(reducers)}>
    <App />
    </Provider>, document.querySelector('#root'))