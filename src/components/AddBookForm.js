import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Redirect } from "react-router-dom";

import FormField from './FormField';
import '../CSS/AddBookForm.css';

import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function AddBookForm(props){

       let header = props.header
       let newBook = props.newBook
       let validation = props.validation
       let patterns = props.patterns

       let handleChange = props.handleChange
       let handleSubmit = props.handleSubmit
       let validateNumbers = props.validateNumbers

       let editButt = props.create == false? <Button variant="primary" type="submit" onClick={props.updateFlag}>تعديل</Button> : '';

       const {serialNum, bookName, chapter, topic, author, editor, publisher,part,year, group} = newBook //destructuring

       if (props.redirect) {
         return <Redirect to={props.redirect} />
       }

       return (
         <div>
         <Link  to="/">
           <Button variant="primary" size="lg" id="AddBook" block> الرجوع للمكتبة</Button>
         </Link>

         <Jumbotron>

           <Form onSubmit={handleSubmit}>

             <Form.Row >
             <FormField  property={header.serialNum} propKey= "serialNum" func= {validateNumbers} val= {serialNum} isRequired={"required"} error={validation.serialNum} pattern={patterns.serialNum}/>
             <FormField  property={header.bookName} propKey= "bookName" func= {handleChange} val= {bookName} isRequired={"required"} error={validation.bookName} pattern={patterns.bookName}/>
             </Form.Row>


             <Form.Row>
              <FormField  property={header.year} propKey= "year" func= {validateNumbers} val= {year} error={validation.year} pattern={patterns.year}/>
              <FormField  property={header.publisher} propKey= "publisher" func= {handleChange} val= {publisher} error={validation.publisher} pattern={patterns.publisher}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={header.editor} propKey= "editor" func= {handleChange} val= {editor}  error={validation.editor} pattern={patterns.editor}/>
              <FormField  property={header.author} propKey= "author" func= {handleChange} val= {author} isRequired={"required"} error={validation.author} pattern={patterns.author}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={header.part} propKey= "part" func= {validateNumbers} val= {part}  error={validation.part} pattern={patterns.part}/>
              <FormField  property={header.chapter} propKey= "chapter" func= {handleChange} val= {chapter}  error={validation.chapter} pattern={patterns.chapter}/>
             </Form.Row>

             <Form.Row>
              <FormField  property={header.topic} propKey= "topic" func= {handleChange} val= {topic} error={validation.topic} pattern={patterns.topic}/>
              <FormField  property={header.group} propKey= "group" func= {handleChange} val= {group} error={validation.group} pattern={patterns.topic}/>
             </Form.Row>

              <Button variant="primary" type="submit" onClick={props.createFlag}>جديد</Button>
              {editButt}

            </Form>
            </Jumbotron>
            </div>
       )
}

export default AddBookForm
