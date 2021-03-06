import React from 'react'

import Button from 'react-bootstrap/Button';
import { XCircle } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Constants} from '../Domains/Constants';

import '../CSS/BookContainer.css';

function BookContainerButtons(props){

  const { id,bookName} = props.book //destructuring
  let handleDelete = props.handleDelete
   return (

     <div>
       <Button variant="light" id="deleteButt" onClick={() =>
         {
           if(window.confirm("(" + bookName + ") :" +  Constants.deleteAlert)){
             handleDelete(id)
         }
       }} >
       <XCircle color="red" />
       </Button>


       <Link to={{
         pathname: "/AddBookForm/" + id ,
          newBook: props.book
        }}>
         <Button variant="light" id="editButt" onClick={e =>
           {
             if (!window.confirm("(" + bookName + ") :"+ Constants.editAlert)){
               e.preventDefault()
             }
         }} >
         <PencilSquare color="blue" />
         </Button>
      </Link>
      </div>

   )
}


export default BookContainerButtons
