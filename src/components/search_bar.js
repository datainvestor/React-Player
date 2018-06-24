import React, { Component } from 'react'

//extends give functionality from react.component to the class
//class component is when we want something that has internal record keeping so it can interact more with other components
class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state={term: ''}
    } //this creates state for the function

    //create render method for the class:
    render() {
        // onChange (check for others in react cods) reference to the event, and then reference to the method or event handler we write
        // we update component(term) with event.target value and we gate state.term is udpated
        //we need to declare state in the value so that it changes based on onchange not that onchange is the value, this solution enables
        //us to set default value or to read value of the uinput easy
        return (
        <div className="search-bar">
            
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/> 
            
        </div> 
        )
    }
    // here is a function when we write something it fires op props onsearrchteamchange which is passed in index.js, then in index js it is programmed to do search
    onInputChange (term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;