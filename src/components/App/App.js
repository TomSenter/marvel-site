import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

//util
import Marvel from '../../util/Marvel';

//pages
import Home from '../Pages/Home/Home';
import Comics from '../Pages/Comics/Comics';


// components
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      character: []
    };

    this.searchCharacter = this.searchCharacter.bind(this);
  }

  searchCharacter(term){
    Marvel.searchCharacter(term).then(results=>{
      this.setState({
        character: results
      });
      
    });
 }

  


  render(){
    return (
      <Router>
        <div className="App">
          
            <Navbar/>
            <Route path='/' exact  component={Home}/>
            <Route path='/comics' component={Comics}/>
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