import React from 'react';
import './App.css';

import Search from './Components/Search';
import Results from './Components/Results';

class App extends React.Component {
  state = {
    results: []
  }

  handleGetResults(){
    
  }

  render(){
    return (
      <div>
        <Search onGetResults={this.handleGetResults}/>
        <Results list={this.state.results}/>
      </div>
    );
  }
  
}

export default App;
