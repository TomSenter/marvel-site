import React from 'react';
import './CardSet.css';

import Card from '../Card/Card';

class CardSet extends React.Component{
    render(){
        return(
            <div class='card-set'>
               {
                   this.props.characters.map(character=>{
                       return <Card key={character.id} character={character}/>;
                   })
               }

            </div>
        );
    }
}

export default CardSet;