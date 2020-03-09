import React from 'react';
import Book from './Book';

class Results extends React.Component {
  render() {
    const books = this.props.list.map(book => {
      return (
        <Book
          key={book.id}
          imageUrl={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors[0]}
          price={book.saleInfo.retailPrice.amount + book.saleInfo.retailPrice.currencyCode}
          description={book.description}/>
      );
    });

    return (
      <ul>
        {books}
      </ul>
    )
  }
}

export default Results;