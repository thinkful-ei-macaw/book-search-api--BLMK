import React from 'react';

import './Book.css';

class Book extends React.Component {

    render() {
        return (
          <li className="book">
            <img src={ this.props.imageUrl } alt={this.props.title}/>
            <div>
              <h2>{ this.props.title }</h2>
              <p>Author: { this.props.author }</p>
              <p>Price: { this.props.price }</p>
              <p>{ this.props.description }</p>
            </div>
          </li>
        );
    }

}


export default Book;