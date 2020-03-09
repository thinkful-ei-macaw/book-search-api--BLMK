import React from 'react';

class Filters extends React.Component {

    render() {
        <div>
            <label htmlFor="filter">Filter</label>
            <select id="filter">
                <option value="all"> All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
            </select>
            <label htmlFor="type">Book Type</label>
            <select id="type">
                <option>No Filter</option>
                <option value="free-ebooks">Free E-Book</option>
                <option value="paid-ebooks">Paid E-Book</option>
            </select>
        </div>
    }
}

export default Filters;