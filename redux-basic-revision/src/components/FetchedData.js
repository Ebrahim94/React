import React from 'react'
import { connect } from 'react-redux'
import { getPosts, getToDos } from '../actions'

class FetchedData extends React.Component{

    
    showData () {
        return this.props.data.map(datum =>{
            return(
                <li>{datum.title}</li>
            )
        })
    }

    componentDidMount(){
        this.props.getPosts()
    }

    componentDidUpdate(prevProps){

        if (prevProps.req != this.props.req){
            if (this.props.req === "posts"){
                this.props.getPosts()
            }else if (this.props.req === "todos"){
                this.props.getToDos()
            }
        }
    }

    render(){
        if (!this.props.data){
            return(
                <div className = "ui active dimmer" style = {{ height : "100vh"}}>
                    <div className = "ui massive text loader">loading</div>
                </div>
            
            )
        }

        return(
            <div>
                {this.showData()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {data: state.data.data, req : state.req}
}

export default connect(mapStateToProps, {getPosts,getToDos})(FetchedData)