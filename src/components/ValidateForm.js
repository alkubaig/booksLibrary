import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import {createBookHTTP,updateBookHTTP} from '../Services/HttpCalls'
import {convertNumbers} from '../Services/ValidationMethods'

import AddBookForm from './AddBookForm';
import {Names, Book} from '../Domains/Book';
import {ErrorMsgs,Patterns} from '../Domains/Validation';
import {Constants} from '../Domains/Constants';

class ValidateForm extends Component {

   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {
        // newBook: props.match.params.newBookId ==  "new" ? Object.create(Book) : getBook(props.match.params.newBookId),
        newBook: props.match.params.newBookId ==  "new" ? Object.create(Book) : props.location.newBook,
        create: props.match.params.newBookId ==  "new" ? true : false,
        validation: Object.create(Book),
        redirect : null,
        createReq: true
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.validateNumbers = this.validateNumbers.bind(this)

      this.validateInput = this.validateInput.bind(this)
      this.setNewbook = this.setNewbook.bind(this)

      this.createFlag = this.createFlag.bind(this)
      this.updateFlag = this.updateFlag.bind(this)
    }

    validateInput(val,name){

      let validation = this.state.validation
      let pattern =  Patterns[name]
      let error =  ErrorMsgs[name]

      validation[name] = val.match(pattern) ? '' : error;

      this.setState({
          validation: validation
      });
    }

    setNewbook(val,name){

      let book = this.state.newBook;
      book[name] = val;

      this.setState({
          newBook: book
      });
    }

    validateNumbers(event){

      let val = event.target.value;
      let name = event.target.name;

      let convertedNumbers = convertNumbers(val);

      this.validateInput(convertedNumbers,name);
      this.setNewbook(convertedNumbers,name);
    }

    handleChange(event) {

      let val =  event.target.value;
      let name = event.target.name;

      this.validateInput(val,name);
      this.setNewbook(val,name);
    }

    handleSubmit(event) {

      event.preventDefault();

      let editMsg =  Constants.editAlert
      let createMsg = Constants.addAlert

      if(window.confirm(this.state.createReq ? createMsg : editMsg)){

         let newBook = this.state.newBook
         let success  = () => {this.setState({ redirect: "/" });}
         let fail = (error) => {alert(error)}

         this.state.createReq ?  createBookHTTP({newBook, success, fail}) : updateBookHTTP({newBook, success, fail})


      }
    }

    createFlag(){

      this.setState({
          createReq: true
      });

    }

    updateFlag(){
      this.setState({
          createReq: false
      });
    }

    render(){
       return (
           <AddBookForm
           newBook={this.state.newBook} redirect={this.state.redirect}
           validation={this.state.validation}
           create={this.state.create} createFlag={this.createFlag} updateFlag={this.updateFlag}
           handleChange={this.handleChange} handleSubmit={this.handleSubmit}  validateNumbers={this.validateNumbers} />
         )
    }
}

export default ValidateForm
