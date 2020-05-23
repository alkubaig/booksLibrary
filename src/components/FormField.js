import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';
import {regToString} from '../Services/ValidationMethods'

function FormField(props) {

  // console.log("props",props);

    var pattern = regToString(props.pattern);

    return (
      <Form.Group as={Col} md="6">
        <Row>

          <Col md="2">
            <Form.Label column="lg"  id = "validate"> {props.error} </Form.Label>

          </Col>

          <Col md="6">
            <Form.Control name={props.propKey} size="lg" type="text" id = "formLabel"
            placeholder= {props.property}
            onChange= {props.func} value={props.val}
            required = {props.isRequired? true : false }
            pattern= {pattern}
            />
          </Col>
          <Col md="4">
            <Form.Label column="lg" id = "formField"> {props.property} </Form.Label>
          </Col>

        </Row>
      </Form.Group>
    )
}


export default FormField
