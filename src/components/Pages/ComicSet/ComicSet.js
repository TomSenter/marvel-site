import './ComicSet.css';
import React from 'react';
import Comic from '../../Comic/Comic';

import {Link} from 'react-router-dom';

class ComicSet extends React.Component{
    componentDidMount(){
        this.props.getComics(this.props.match.params.id);
    }

    render(){
        return(
            <div className="comic-set-div">
                <h1>{`${this.props.match.params.name} Comics`}</h1>
                <Link exact to='/'><button className="comic-set-button">Home</button></Link>
              <div className="card-set">
               {this.props.comics.map(comic=>{
                   return <Comic key={comic.id} comic={comic} />
               })}
             
              </div>
            </div>
        );
    }
}

export default ComicSet;