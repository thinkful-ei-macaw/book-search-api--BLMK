import React from 'react';
import './Filters.css';

class Filters extends React.Component {

  handleChange = e => {
    const property = e.target.name;
    const val = e.target.value;
    this.props.onFilterChange(property, val);
  }

  render() {
    return (
      <div className="filters">
        <label htmlFor="printType">Print Type: </label>
        <select id="printType" name="printType" onChange={this.handleChange}>
          <option value="all"> All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="filter">Book Type</label>
        <select id="filter" name="filter" onChange={this.handleChange}>
          <option value="ebooks">No Filter</option>
          <option value="free-ebooks">Free E-Book</option>
          <option value="paid-ebooks">Paid E-Book</option>
        </select>
      </div>
    );
  }
}

export default Filters;