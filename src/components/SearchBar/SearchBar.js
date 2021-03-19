import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            input: 'Search Marvel Characters'
        };

        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this);
    }

    handleChange(e){
      let value = e.target.value;
      this.setState({
        input: value
      });
    }

    search(){
       this.props.search(this.state.input);

       this.setState({
           input: 'Search Marvel Characters'
       })
    }
    
    render(){
        return(
            <div className='search-bar'>
                <input type="text" value={this.state.input} onChange={this.handleChange} />
                <button class="search-bar-button" type="button" onClick={this.search}>Submit</button>
            </div>
        );
    }
}

export default SearchBar;