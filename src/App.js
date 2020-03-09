import React from 'react';
import './App.css';

import Search from './Components/Search';
import Results from './Components/Results';

class App extends React.Component {
  state = {
    results: [],
    searched: false
  }

  handleGetResults = (data) => {
    this.setState({
     results: data.items || [],
     searched: true
   })
  }

  render(){
    return (
      <div>
        <Search onGetResults={this.handleGetResults}/>
        <Results searched={this.state.searched} list={this.state.results}/>
      </div>
    );
  }
  
}

export default App;
