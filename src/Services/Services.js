//for unique ids
import { v4 as uuidv4 } from 'uuid';

export function getBooks(){
     let books = JSON.parse(localStorage.getItem('books'))
     return books
}

export function getBook(id){
  let books = getBooks()
  var idx = books.findIndex(book => book.id == id);
  return books[idx]
}

function setBooks(books){
  localStorage.setItem('books', JSON.stringify(books))
}

export function deleteBook(id){

  let origBooks = getBooks()
  origBooks =  origBooks.filter(book => (book.id != id))
  setBooks(origBooks)
}

export function createBook(newBook){

  let books = getBooks()
  newBook["id"] = uuidv4()
  books.push(newBook)
  setBooks(books)
}

export function putBook(newBook){

  let books = getBooks()
  var idx = books.findIndex(book => book.id == newBook.id);
  books[idx] = newBook
  setBooks(books)
}
