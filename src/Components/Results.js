import React from 'react';
import Book from './Book';

class Results extends React.Component {
  render() {
    const books = this.props.list.map(book => {
      return (
        <Book
          imageUrl={book.imageLinks.thumbnail}
          title={book.volumeInfo.title}
          author={book.volumneInfo.authors[0]}
          price={book.retailPrice.amount + book.retailPrice.currencyCode}
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