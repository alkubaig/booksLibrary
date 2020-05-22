import React, { Component } from 'react'
import BookContainer from './BookContainer';
import Button from 'react-bootstrap/Button'
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getBooks,deleteBook} from '../Services/Services'
import {Constants} from '../Domains/Constants';

class Home extends Component {
   constructor(props) {
      super(props)
      this.state = {
        character: null,
         books: [],
         booksFiltered: [],
         error: null,
         loaded: false
      }

      this.handleDelete = this.handleDelete.bind(this)
      // this.state.booksFiltered = this.state.books
      this.bookFilterChange = this.bookFilterChange.bind(this)
   }

     componentDidMount() {
       fetch("http://localhost:3001/books")
         .then(res => res.json())
         .then(
           (result) => {
             console.log("loaded: true");
             this.setState({
               loaded: true,
               books: result,
               booksFiltered: result
             });
           },
           // Note: it's important to handle errors here
           // instead of a catch() block so that we don't swallow
           // exceptions from actual bugs in components.
           (error) => {
             this.setState({
               loaded: true,
               error: error
             });
           }
         )
     }

   bookFilterChange = (event)=>{

     let val =  event.target.value
     console.log("val: " + val);

     // let books = getBooks()
     let books = this.state.books
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

       if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.loaded) {
        return <div>Loading...</div>;
      } else {
       return (
          <div>
            <Link to={"/AddBookForm/new"}>
              <Button variant="primary" size="lg" id="AddBook" block> {Constants.addButt}</Button>
            </Link>
            <input type= "text" placeholder= "search" id="search" onChange={this.bookFilterChange}></input>

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
}

export default Home;


//for unique ids
// import { v4 as uuidv4 } from 'uuid';

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
