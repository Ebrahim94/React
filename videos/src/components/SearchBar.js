import React from 'react'

class SearchBar extends React.Component {

    state={term: ''}

    onInputChange = (event) =>{
        this.setState({term: event.target.value})
    }

    render() {
        console.log(this.state)
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Videos</label>
                        <input value= {this.state.term} type="text" placeholder="Search" onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar