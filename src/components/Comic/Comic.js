import './Comic.css';
import React from 'react';

class Comic extends React.Component{
    render(){
        return(
            <div className="comic">
                <h2>{this.props.comic.title}</h2>
                {this.props.comic.description==='' && <p>{this.props.comic.description}</p>}
                {!this.props.comic.pic.includes('image_not_available')&&<img src={this.props.comic.pic + '/portrait_fantastic.'+this.props.comic.extension}/>}

            </div>
        );
    }
}

export default Comic;