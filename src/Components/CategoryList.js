import React, {Component} from 'react'
import Category from './Category'
import "./Book.css";

class CategoryList extends Component{
    constructor(props){
        super(props)
        this.state = {}

        this.doSomething = this.doSomething.bind(this)
      }

      doSomething(){

      }

      render() {
        return this.state.editing ? this.renderForm() : this.renderUI()
      }    
}

export default CategoryList;