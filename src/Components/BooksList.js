import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.showBooks = this.showBooks.bind(this)
  }

  // Scanning the books and shows them
  showBooks() {
    return (
      <div>
        <p class="card-text"> BOOKS:</p>
        {this.props.books.map((book) => {
          return (
            <article key={book.book_id}>
              <Book book={book}>
              </Book>
            </article>
          )
        })}
      </div>
    )
  }

  render() {
    return this.showBooks();
  }
}

export default BooksList;