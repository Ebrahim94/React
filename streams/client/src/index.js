//import libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createStore} from 'redux'


//importing local files
import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.querySelector('#root'))
