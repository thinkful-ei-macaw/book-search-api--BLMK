import React from 'react';
import './App.css';

import Search from './Components/Search';

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
      </div>
    );
  }
  
}

export default App;
