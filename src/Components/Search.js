import React from 'react';
import Filters from './Filters';
import api from '../api';

import './Search.css';

class Search extends React.Component {
  state = {
    printType: 'all', // all | books | magazines
    filter: 'ebooks' // ebooks | free-ebooks | paid-ebooks
  }

  handleSubmit = e => {
    e.preventDefault();
    let query = "q=";
    query += document.querySelector("#query").value;

    Object.keys(this.state).forEach(key => {
      query += `&${key}=${this.state[key]}`
    });

    api.getBooks(query)
    .then((data) => this.props.onGetResults(data))
  }

  handleFilterChange = (property, value) => {
    this.setState({
      [property]: value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search">
          <label htmlFor="query">Search:</label>
          <input required type="text" name="query" id="query" placeholder="ex, Harry Potter"></input>
          <input type="submit" value="Search"></input>
        </div>
        <Filters onFilterChange={this.handleFilterChange}/>
      </form>
    )
  }
}

export default Search;