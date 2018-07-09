import React, { Component } from 'react'
import axios from 'axios';
import MdSave from 'react-icons/lib/md/save'


class CanceledBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetched: false,
            book: []
        }

        this.getData = this.getData.bind(this)
        this.fetchCanceled = this.fetchCanceled.bind(this)
        this.showFetchedData = this.showFetchedData.bind(this);

    }

    // Showing the Fetched data (UI)
    showFetchedData() {
        return (
            this.state.book.map((book) => {
                return (
                    <div className="mx-auto">
                        <div className="card bg-light mb-3" style={{ 'max-width': "18rem", marginTop: '100px', textAlign: 'center' }}>
                            <div className="card-header">Cancelled Book</div>
                            <div className="card-body">
                                <p className="card-text">Book ID: {book.book_id}</p>
                                <p className="card-text">Book Name: {book.book_name}</p>
                                <p className="card-text">Book Autor: {book.book_autor}</p>
                                <p className="card-text">Book Category: {book.book_cat}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }

    // Fetching GET REQUEST
    fetchCanceled() {
        axios.get('http://customers-service-cancel.herokuapp.com/getCustomerCanceldBook/' + this.id.value + '/' + this.book.value)
            .then(response => {
                console.log(response);
                this.setState({
                    fetched: true,
                    book: response.data
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
                <p>Enter Book ID (ID-123 >>  12d OR 1dd | ID-232 >> ffd OR 1xd):</p>
                <input ref={
                    (input2) => {
                        this.book = input2;
                    }
                } /><p></p>
                <button type="button" onClick={this.fetchCanceled}><MdSave /></button>
            </form>
        );
    }

    render() {
        return (this.state.fetched ? this.showFetchedData() : this.getData())
    }
}

export default CanceledBooks;