import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.bookDetails = this.bookDetails.bind(this)
  }

  // Show Details for each book
  bookDetails() {
    return (
      <article key={'BOOK' + this.props.book.book_id}>
        {console.log("RONIRONI" + this.props.book.book_id)}
        <ul>
          <li>ID: {this.props.book.book_id}</li>
          <li>Author: {this.props.book.book_autor}</li>
          <li>Category: {this.props.book.book_cat}</li>
          <li>Name: {this.props.book.book_name}</li>
        </ul>
      </article>
    )

  }

  render() {
    // Rednering bookDetails
    return (this.bookDetails())
  }
}

export default Book;