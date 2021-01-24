import './Home.css';
import React from 'react';
import SearchBar from '../../SearchBar/SearchBar';
import CardSet from '../../CardSet/CardSet';

class Home extends React.Component{
    render(){
        return(
            <div className="home-page">
                <h1>Home</h1>
                <SearchBar search={this.props.search}/>
                <CardSet characters={this.props.characters}/>
                
                

            </div>
        );
    }
}


export default Home;