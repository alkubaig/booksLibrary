import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Redirect } from "react-router-dom";
import {Constants} from '../Domains/Constants';
import {Names} from '../Domains/Book';
import {Patterns} from '../Domains/Validation';

import FormField from './FormField';
import '../CSS/AddBookForm.css';

import  {BrowserRouter as Router, Link} from 'react-router-dom';

function AddBookForm(props){

       let newBook = props.newBook
       let validation = props.validation

       let handleChange = props.handleChange
       let handleSubmit = props.handleSubmit
       let validateNumbers = props.validateNumbers

       let editButt = props.create == false? <Button variant="primary" type="submit" onClick={props.updateFlag}> {Constants.editButt} </Button> : '';

       const {serialNum, bookName, chapter, topic, author, editor, publisher,part,year, group} = newBook //destructuring

       if (props.redirect) {
         return <Redirect to={props.redirect} />
       }

       return (
         <div>
         <Link  to="/">
           <Button variant="primary" size="lg" id="AddBook" block> {Constants.backToLibraryButt}</Button>
         </Link>

         <Jumbotron>

           <Form onSubmit={handleSubmit}>

             <Form.Row >
             <FormField  property={Names.serialNum} propKey= "serialNum" func= {validateNumbers} val= {serialNum} isRequired={"required"} error={validation.serialNum} pattern={Patterns.serialNum}/>
             <FormField  property={Names.bookName} propKey= "bookName" func= {handleChange} val= {bookName} isRequired={"required"} error={validation.bookName} pattern={Patterns.bookName}/>
             </Form.Row>


             <Form.Row>
              <FormField  property={Names.year} propKey= "year" func= {validateNumbers} val= {year} error={validation.year} pattern={Patterns.year}/>
              <FormField  property={Names.publisher} propKey= "publisher" func= {handleChange} val= {publisher} error={validation.publisher} pattern={Patterns.publisher}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={Names.editor} propKey= "editor" func= {handleChange} val= {editor}  error={validation.editor} pattern={Patterns.editor}/>
              <FormField  property={Names.author} propKey= "author" func= {handleChange} val= {author} isRequired={"required"} error={validation.author} pattern={Patterns.author}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={Names.part} propKey= "part" func= {validateNumbers} val= {part}  error={validation.part} pattern={Patterns.part}/>
              <FormField  property={Names.chapter} propKey= "chapter" func= {handleChange} val= {chapter}  error={validation.chapter} pattern={Patterns.chapter}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={Names.topic} propKey= "topic" func= {handleChange} val= {topic} error={validation.topic} pattern={Patterns.topic}/>
              <FormField  property={Names.group} propKey= "group" func= {handleChange} val= {group} error={validation.group} pattern={Patterns.topic}/>
             </Form.Row>

              <Button variant="primary" type="submit" onClick={props.createFlag}>{Constants.createButt}</Button>
              {editButt}

            </Form>
            </Jumbotron>
            </div>
       )
}

export default AddBookForm
