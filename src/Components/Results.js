import React from 'react';
import Book from './Book';

import './Results.css';

class Results extends React.Component {
  render() {
    const books = this.props.list.map(book => {
      let price = 'FREE';
      if (book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount > 0){
        price = book.saleInfo.retailPrice.amount + book.saleInfo.retailPrice.currencyCode;
      }
      return (
        <Book
          key={book.id}
          imageUrl={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unkown'}
          price={price}
          description={book.description}/>
      );
    });

    return (
      <ul className="results">
        {books}
      </ul>
    )
  }
}

export default Results;