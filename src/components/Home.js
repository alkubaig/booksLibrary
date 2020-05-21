import React, { Component } from 'react'
import BookContainer from './BookContainer';
import Button from 'react-bootstrap/Button'
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {getBooks,deleteBook} from '../Services/Services'

// import Container from 'react-bootstrap/Container'

//for unique ids
// import { v4 as uuidv4 } from 'uuid';

class Home extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         books: getBooks(),
         booksFiltered: [],
      }

      this.handleDelete = this.handleDelete.bind(this)

       // let books = [
       //      { id: uuidv4(), serialNum: 1, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 2, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 3, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 4, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 5, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 6, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 7, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 8, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 9, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 10, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"},
       //      { id: uuidv4(), serialNum: 11, bookName: 'الصلاة', chapter: "القراءة", topic: 'الفقه', author: "الناصري", editor: "العراقي", publisher:"دار الحديث", part:4, year: 1440,group:"الرسالة"}
       //   ];
       //   localStorage.setItem('books', JSON.stringify(books));

       this.state.booksFiltered = this.state.books
       this.bookFilterChange = this.bookFilterChange.bind(this)
   }

   bookFilterChange = (event)=>{

     let val =  event.target.value
     console.log("val: " + val);

     let books = getBooks()
     this.setState({
       booksFiltered: books.filter(book => book.bookName.includes(val))
     });

   }

    handleDelete(id,index){

      let books =  this.state.booksFiltered
      this.state.booksFiltered.splice(index, 1)
      deleteBook(id)

      this.setState({
        booksFiltered: books
      });
    }
   render() {
     let bookFilterChange = this.bookFilterChange
     return (
        <div>

        <Link to={"/AddBookForm/new"}>
          <Button variant="primary" size="lg" id="AddBook" block> أضف كتاب</Button>
        </Link>
        <input type= "text" placeHolder= "search" id="search" onChange={bookFilterChange}></input>

        <div id='books'>
            {this.state.booksFiltered.map((book, index)=>
              {
                return (<BookContainer book={book} index={index} handleDelete={this.handleDelete}/>)
              }
            )}
        </div>
      </div>
    )
  }
}

export default Home;
