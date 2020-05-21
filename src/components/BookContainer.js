import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import '../CSS/BookContainer.css';
import {Names} from '../Domains/Book';
import BookContainerButtons from './BookContainerButtons';

function BookContainer(props) {

  let header = Object.create(Names)
  let {handleDelete} = props
  let index = props.index
  const { id,serialNum, bookName, chapter, topic, author, editor, publisher,part,year, group, visible} = props.book //destructuring
   return (

       <Card key={id} id= "bookCard">
       <Card.Header>
          <BookContainerButtons book={props.book} index={index}  handleDelete={handleDelete}/>
          {bookName}
      </Card.Header>

        <Card.Body>

          <Card.Text>{header.topic} - {topic}</Card.Text>

          <ListGroup variant="flush">
          <ListGroup.Item>{header.author} - {author}</ListGroup.Item>
          <ListGroup.Item>{header.chapter} - {chapter}</ListGroup.Item>
          <ListGroup.Item>{header.editor} - {editor}</ListGroup.Item>
          <ListGroup.Item>{header.group} - {group}</ListGroup.Item>
          </ListGroup>

          <ListGroup horizontal>
          <ListGroup.Item><p >{header.year}</p> {year}</ListGroup.Item>
          <ListGroup.Item><p>{header.publisher}</p> {publisher}</ListGroup.Item>
          <ListGroup.Item><p>{header.part}</p> {part} </ListGroup.Item>
          </ListGroup>

        </Card.Body>

        <Card.Footer className="text-muted">{header.serialNum} {serialNum}</Card.Footer>
      </Card>
   )
}


export default BookContainer
