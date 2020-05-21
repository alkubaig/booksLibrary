import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import {createBook, putBook, getBook} from '../Services/Services'
import {convertNumbers} from '../Services/ValidationMethods'

import AddBookForm from './AddBookForm';
import {Names, Book} from '../Domains/Book';
import {ErrorMsgs,Patterns} from '../Domains/Validation';

import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class ValidateBook extends Component {

   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = {
        newBook: props.match.params.newBookId ==  "new" ? Object.create(Book) : getBook(props.match.params.newBookId),
        validation: Object.create(Book),
        errorMsgs: Object.create(ErrorMsgs),
        patterns: Object.create(Patterns),
        Names: Object.create(Names),
        redirect : null,
        create: props.match.params.newBookId ==  "new" ? true : false
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
      let pattern =  this.state.patterns[name]
      let error =  this.state.errorMsgs[name]

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

      let editMsg =  "هل ترغب في تعديل الكتاب؟"
      let createMsg = "هل ترغب في إضافته ككتاب جديد"

     if(window.confirm(this.state.create ? createMsg : editMsg)){

       let newBook = this.state.newBook

       if (this.state.create){

         createBook(newBook)

       }else {

         putBook(newBook)

       }
          this.setState({ redirect: "/" });
     }
    }

    createFlag(){

      this.setState({
          create: true
      });

    }

    updateFlag(){
      this.setState({
          create: false
      });
    }

    render(){
       return (
           <AddBookForm header= {this.state.Names}  newBook={this.state.newBook}
           validation={this.state.validation} patterns = {this.state.patterns}
           redirect={this.state.redirect}
           create={this.state.create} createFlag={this.createFlag} updateFlag={this.updateFlag}
           handleChange={this.handleChange} handleSubmit={this.handleSubmit}  validateNumbers={this.validateNumbers} />
         )
    }
}

export default ValidateBook
