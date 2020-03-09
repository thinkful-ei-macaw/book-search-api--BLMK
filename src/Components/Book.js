import React from 'react';

class Book extends React.Component {

    render() {
        return (
          <li>
            <img src={ this.propsimageUrl } alt={this.props.title}/>
            <h2>{ this.props.title }</h2>
            <p>Author: { this.props.author }</p>
            <p>Price: { this.props.price }</p>
            <p>{ this.props.description }</p>
          </li>
        );
    }

}


export default Book;