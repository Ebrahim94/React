import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../actions'

const App = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <button className = "ui button primary" onClick = {() => props.incrementAsync()} >Increment</button>
                <button className = "ui button secondary" onClick = {() => props.decrement()} >Decrement</button>
                Value: {props.value}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { value: state.value }
}

export default connect(mapStateToProps, { increment, decrement, incrementAsync })(App)