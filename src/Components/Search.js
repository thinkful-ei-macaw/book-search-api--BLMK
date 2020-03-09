import React from 'react';

class Search extends React.Component {
  handleSubmit(){
    // call api
    // call this.props.onGetResults
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="query">Search:</label>
          <input type="text" name="query" id="query" placeholder="ex, Harry Potter"></input>
          <input type="submit" value="Search"></input>
        </div>
        
      </form>
    )
  }
}

export default Search;