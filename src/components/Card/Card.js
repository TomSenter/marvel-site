import './Card.css';
import React from 'react';
// have a link around button that goes to cimics and passes character id
import {Link} from 'react-router-dom';
class Card extends React.Component{
    render(){
        return(
            <div className="card">
               
                <h2>{this.props.character.name}</h2>
                <p>{this.props.character.description}</p>
                {!this.props.character.pic.includes('image_not_available')&&<img  src={this.props.character.pic + '/portrait_fantastic.'+this.props.character.extension}/>}
                <Link to={`/comics/${this.props.character.id}`}><button  type="button">See Comics</button></Link>
               

            </div>
        );
    }
}

export default Card;