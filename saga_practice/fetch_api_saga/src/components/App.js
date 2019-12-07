import React , {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
const App = (props) => {

    const [ route, changeRoute ] = useState('posts')

    useEffect(() =>{
        props.fetchPosts(route)
    }, [route] )

    const showDataList = () =>{
        return(
        <ul>
            {props.data.map(datum => <li key={datum.id}>{datum.title}</li> )}
        </ul>
        )
    }
    
    return (
        <div>
            <div className="ui stacked segment" style={{ marginTop: "10px", textAlign: "center" }}>
                <button onClick = {()=> changeRoute('posts')} className="ui button primary">fetch posts</button>
                <button onClick = {()=> changeRoute('todos')} className="ui button primary">fetch toDos</button>
            </div>
            <div className="ui stacked segment" style={{ textAlign: "center", margin: "10px" }}>
                {
                    props.data ? showDataList() : "loading"
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {data: state.fetchedData}
}

export default connect(mapStateToProps, { fetchPosts })(App)