import React, { Component } from 'react'



class BookFiltering extends Component{

  state = {
    books: []
    inputVal: ''
  }

  bookFilterChange = (event)=>{
    this.setState({
      inputVal: event.target.value
    })
  }

  const filteredBooks = {

    this.state.books.filter( book=>{
      return book.bookName.toLowerCase().includes(this.state.inputVal.toLowerCase())
    })
  }

}
