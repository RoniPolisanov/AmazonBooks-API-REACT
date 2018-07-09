import React, { Component } from 'react'
import Customer from './Customer'
//import data from '../data/data.json'

class CustomersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }

        this.eachCustomer = this.eachCustomer.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
        this.nextID = this.nextID.bind(this)
    }

    // Fetching the data before rendering
    componentWillMount() {
        const url = "https://customers-service-cancel.herokuapp.com/getAllCustomers";
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            var self = this;
            data.map((data) => {
                console.log('customer')
                self.add(data.customer_name, data.customer_id, data.books);
            })
        })
    }

    // Add all customers
    add(name, id, books) {
        this.setState(prevState => ({
            customers: [
                // ... = books[0].id = id, books[0].book = book, book[0].group = group ... book[n]
                ...prevState.customers,
                {
                    customer_id: id,
                    customer_name: name,
                    books: books
                }
            ]
        }))
    }

    // Unique id generator
    nextID() {
        this.uniqueID = this.uniqueID || 0;
        return this.uniqueID++
    }

    // Delete customer 
    delete(id) {
        console.log('delete at', id)
        this.setState(prevState => ({
            // The filter() method creates a new array with all elements that pass the test implemented by the provided function
            customers: prevState.customers.filter(customer => customer.customer_id !== id)
        }))
    }

    // Update customer name
    update(newCustomer, i) {
        // The setState() method = Render reload (Components & childs)
        this.setState(prevState => ({
            customers: prevState.customers.map(
                customer => (customer.customer_id !== i) ? customer : { ...customer, customer_name: newCustomer }
            )
        }))
    }

    // Exracting the books for each customer
    eachCustomer(customer, i) {
        return (
            <div className="card bg-light mb-3, mx-auto" style={{ width: 25 + 'rem', marginBottom: 7 + 'px' }} key={'container' + i}>
                <div class="card-header">Customers List</div>
                <div className="card-body">
                    <Customer consumer={customer} key={'customer' + i} index={i} onChange={this.update} onDelete={this.delete} >
                    </Customer>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="customersList">
                {this.state.customers.map(this.eachCustomer)}
            </div>
        )
    }
}

export default CustomersList;