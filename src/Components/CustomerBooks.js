import React, { Component } from 'react';
import axios from 'axios';
import MdSave from 'react-icons/lib/md/save';

class CustomerBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      customer: []
    };

    this.getData = this.getData.bind(this);
    this.fetchCustomerBooks = this.fetchCustomerBooks.bind(this);
    this.showFetchedData = this.showFetchedData.bind(this);
  }

  // Showing the Fetched data (UI)
  showFetchedData() {
    return (
      <div>
        {console.log("Roni 11111111111")}
        {this.state.customer.map(customer => {
          return customer.books.map(book => {
            return (
              <div className="mx-auto">
                <div
                  className="card bg-light mb-3"
                  style={{
                    "max-width": "18rem",
                    marginTop: "100px",
                    textAlign: "center"
                  }}
                >
                  <div className="card-header">Customer Books</div>
                  <div className="card-body">
                    <p className="card-text">Book ID: {book.book_id}</p>
                    <p className="card-text">Book Name: {book.book_name}</p>
                    <p className="card-text">Book Autor: {book.book_autor}</p>
                    <p className="card-text">Book Category: {book.book_cat}</p>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }

  // Fetching POST REQUEST
  fetchCustomerBooks() {
      axios.post('https://customers-service-cancel.herokuapp.com/getCustomerBooks/', {
        customer_id: this.id.value
      })
      .then(response => {
        console.log(response);
        this.setState({
          fetched: true,
          customer: response.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Inputs to collect data
  getData() {
    return (
      <form style={{ textAlign: 'center', marginTop: '100px' }}>
          <p>Enter Customer ID (123 OR 232):</p>
          <input ref={
              (input) => {
                  this.id = input;
              }
          } />
          <p></p>
          <button type="button" onClick={this.fetchCustomerBooks}><MdSave /></button>
      </form>
  );
  }

  render() {
    return (this.state.fetched ? this.showFetchedData() : this.getData())
  }
}

export default CustomerBooks;
