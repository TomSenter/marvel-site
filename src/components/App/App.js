import React from 'react';
import './App.css';
import {HashRouter as Router,Route} from 'react-router-dom';

//util
import Marvel from '../../util/Marvel';

//pages
import Home from '../Pages/Home/Home';
import ComicSet from '../Pages/ComicSet/ComicSet';


// components
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      characters: [],
      comics: []
    };

    this.searchCharacter = this.searchCharacter.bind(this);
    this.getComics = this.getComics.bind(this);
  }

  searchCharacter(term){
    Marvel.searchCharacter(term).then(results=>{
      this.setState({
        characters: results
      });
      
    });
 }

  getComics(id){
    Marvel.getComics(id).then(results=>{
      this.setState({
        comics: results
      });
    })
  }

  


  render(){
    return (
      <Router>
        <div className="App">
          
            <Navbar/>
            <Route path='/' exact render={(props)=>(
            <Home {...props} search={this.searchCharacter} characters={this.state.characters}/>
             )}/>
            <Route path='/comics/:id/:name' exact render={(props)=>(
            <ComicSet {...props} getComics={this.getComics} comics={this.state.comics}/>
            )}/>
            <Footer/>
         
       
      
        </div>
      </Router>
    );
  }
}

export default App;


/*use to pass props through route render={(props)=>(
  <Home {...props} name='Tom'/>
  )}

*/