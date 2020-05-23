import React, { Component } from 'react'
import BookContainer from './BookContainer';
import Button from 'react-bootstrap/Button'
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Constants} from '../Domains/Constants';
import {getBooksHTTP,deleteBookHTTP} from '../Services/HttpCalls'

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
      this.bookFilterChange = this.bookFilterChange.bind(this)
   }

     componentDidMount() {

       getBooksHTTP({
         success: result =>{

           this.setState({
             loaded: true,
             books: result,
             booksFiltered: result
           })}
         ,
         fail: error =>
           {this.setState({
           loaded: true,
           error: error
         })}
       })
     }

   bookFilterChange = (event)=>{

     let val =  event.target.value
     console.log("val: " + val);

     let books = this.state.books
     this.setState({
       booksFiltered: books.filter(book => book.bookName.includes(val))
     });

   }

    handleDelete(id){

      let booksFiltered =  this.state.booksFiltered
      let books =  this.state.books

      var filterIdx = booksFiltered.findIndex(book => book.id ==id);
      var bookIdx = books.findIndex(book => book.id ==id);

      books.splice(bookIdx, 1)
      booksFiltered.splice(filterIdx, 1)

      deleteBookHTTP({
        id: id,
        success: result =>{

          this.setState({
            booksFiltered: booksFiltered,
            books: books
          })
        },
        fail: error =>{alert(error)}
      })
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
