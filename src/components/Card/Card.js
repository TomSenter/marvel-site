import './Card.css';
import React from 'react';
// have a link around button that goes to cimics and passes character id
import {Link} from 'react-router-dom';
class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <h2>{this.props.character.name}</h2>
                {this.props.character.description && <p>{this.props.character.description}</p>}
                {!this.props.character.pic.includes('image_not_available')?<img src={this.props.character.pic + '/portrait_xlarge.'+this.props.character.extension}/>:<p id="filler">'Image lost in space'</p>}
                <Link to={`/comics/${this.props.character.id}`}><button type="button">Get Comics</button></Link>
               

            </div>
        );
    }
}

export default Card;