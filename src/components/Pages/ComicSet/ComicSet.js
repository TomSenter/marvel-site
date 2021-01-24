import './ComicSet.css';
import React from 'react';
import Comic from '../../Comic/Comic';

class ComicSet extends React.Component{
    componentDidMount(){
        this.props.getComics(this.props.match.params.id);
    }

    render(){
        return(
            <div className="comic-set">
             {this.props.comics.map(comic=>{
                 return <Comic key={comic.id} comic={comic}/>
             })}
             
            </div>
        );
    }
}

export default ComicSet;