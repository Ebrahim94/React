import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

    componentDidMount(){
        console.log(this.props.match.params.id)
    }

    actions(){
        return (
        <React.Fragment>
        <button className="ui negative button">Delete</button>
        <button className="ui button">cancel</button>
        </React.Fragment>
    ) 
}
    
    render(){

        return (<div>
            StreamDelete
            <Modal 
            title = 'Delete Stream'
            content= 'Are you sure you would like to delete this stream?'
            button = {this.actions()}
            onDismiss = {() => history.push('/')}
            />
            
        </div>)
    }
    
}

export default StreamDelete