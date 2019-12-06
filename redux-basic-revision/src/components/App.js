import React from 'react'
import FetchedData from './FetchedData'
import { request } from '../actions'
import { connect } from 'react-redux'

const App = () => {

        return (
            <div>
            <div className="ui raised very padded text container segment" style={{ marginTop: "10px", textAlign: "center" }}>
                <button onClick = {() => this.props.request('posts')} className="ui button primary">Fetch Posts</button>
                <button onClick = {() => this.props.request('todos')} className="ui button primary">Fetch ToDos</button>
            </div>
            <div className="ui raised very padded text container segment" style={{ marginTop: "10px", textAlign: "center" }}>
                    <FetchedData />
            </div>
            </div>
        )
    }



const mapStateToProps = (state) =>{
    return {req : state.req}
}

export default connect(mapStateToProps, {request})(App)