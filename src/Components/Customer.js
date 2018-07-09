import React, { Component } from 'react';
import MdDelete from 'react-icons/lib/md/delete';
import MdSave from 'react-icons/lib/md/save';
import MdEdit from 'react-icons/lib/md/edit';
import BooksList from './BooksList';


class Customer extends Component {
  // Bind "this" for access from expression
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderUI = this.renderUI.bind(this)
  }

  // Change to editing mode
  edit() {
    this.setState({
      editing: true
    });
  }

  // Transfer parameters by delete
  delete() {
    this.props.onDelete(this.props.consumer.customer_id)
  }

  // Sace the changed data
  save(e) {
    e.preventDefault()
    this.props.onChange(this._newCustomer.value, this.props.consumer.customer_id)
    this.setState({
      editing: false
    })
  }

  renderForm() {
    return (
      <div>
        <form onSubmit={this.save}>
          <textarea ref={(input) => this._newCustomer = input}></textarea>
          <button> <MdSave onClick={this.save}> </MdSave> </button>
        </form>
      </div>
    )
  }

  renderUI() {
    return (
      <div className='customer'>
        <div>
          <h5 className="card-title"> Consumer ID: {this.props.consumer.customer_id} </h5>
          <h5 className="card-title"> Constumer Name: {this.props.consumer.customer_name} </h5>
          <div>
            <BooksList books={this.props.consumer.books}>
            </BooksList>
          </div>
        </div>
        <span>
          <button onClick={this.edit} className="btn btn-primary" style={{ marginRight: 7 + 'px' }}> <MdEdit> </MdEdit> </button>
          <button onClick={this.delete} className="btn btn-primary"> <MdDelete> </MdDelete> </button>
        </span>
      </div>
    )
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderUI()
  }
}

export default Customer;
