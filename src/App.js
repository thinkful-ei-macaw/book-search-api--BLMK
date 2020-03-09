import React from 'react';
import './App.css';

import Search from './Components/Search';
import Results from './Components/Results';

class App extends React.Component {
  state = {
    results: []
  }

  handleGetResults = (data) => {
    if (data.totalItems > 0) {
      this.setState({
        results: data.items
      })
    } else {
      alert("No items matched your search");
    }
    
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
