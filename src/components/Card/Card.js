import './Card.css';
import React from 'react';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <h2>{this.props.character.name}</h2>
                <p>{this.props.character.description}</p>
                <img src={this.props.character.pic + '/portrait_xlarge.'+this.props.character.extension}/>
                <button type="button">Get Comics</button>

            </div>
        );
    }
}

export default Card;