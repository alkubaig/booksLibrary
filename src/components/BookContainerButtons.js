import React from 'react'

import Button from 'react-bootstrap/Button';
import { XCircle } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import '../CSS/BookContainer.css';

function BookContainerButtons(props){

  const { id,bookName} = props.book //destructuring
  let handleDelete = props.handleDelete
  let index = props.index
   return (

     <div>
       <Button variant="light" id="deleteButt" onClick={() =>
         {
           if(window.confirm("(" + bookName + ") : هل ترغب في حذف الكتاب؟")){

             handleDelete(id,index)
         }
       }} >
       <XCircle color="red" />
       </Button>


       <Link to={"/AddBookForm/" + id}>
         <Button variant="light" id="editButt" onClick={e =>
           {
             if (!window.confirm("(" + bookName + ") :"+ "هل ترغب في تعديل الكتاب؟")){
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
