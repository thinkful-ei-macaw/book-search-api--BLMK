import React from 'react';

class Book extends React.Component {

    render() {
        <li>
            <img src={ this.propsimageUrl }/>
            <h2>{ this.props.title }</h2>
            <p>Author: { this.props.author }</p>
            <p>Price: { this.props.price }</p>
            <p>{ this.props.description }</p>
        </li>

    }

}


export default Book;