import React from 'react';
import {Form,Col } from 'react-bootstrap';

const Questionnare = () => {
  return (
    <div className="checklistBox">
    <fieldset>
    <h5 className="title"><i className="fas fa-list-alt"></i>  System Configuration (WebCTRL and I-Vu)</h5>
     <Form className="p-4">
     </Form>
          <Form.Group>
          <Form.Label>What version of WebCTRL or I-Vu are you currently running?</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group>
          <Form.Label>What is the IP of the WebCTRL or I-Vu server?</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group>
          <Form.Label>List all add-ons that are enabled (not built-in)</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group>
          <Form.Label>List any add-ons not currently running that are desired in the next 3-6 months?</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group>
          <Form.Label>What alert notification methods are used?</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Label>Do you depend on specific From: addresses in notifications?</Form.Label>
          <Form.Check 
              type="checkbox" 
              value="Yes"
              label="Yes"/>
              <Form.Check 
              type="checkbox" 
              value="No"
              label="No"/>
        </Form.Group>

        <Form.Group>
        <Form.Label>What brand database are you using and what version?</Form.Label>
        <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
        </Form.Group>

        <Form.Group>
        <Form.Label>Are you using Hierarchical servers?</Form.Label>
        <Form.Check 
            type="checkbox" 
            value="Yes"
            label="Yes"/>
            <Form.Check 
            type="checkbox" 
            value="No"
            label="No"/>
        </Form.Group>

        <h5 className="text text-primary">Size of Environment : </h5>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>System directory size (bytes):</Form.Label>
              <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Total Database size (bytes):</Form.Label>
              <Form.Control className="inputBox" as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
        </Form.Row>

        <h5 className="text text-primary">System Settings : System Statistics :</h5>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Number of controllers:</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
        </Form.Group>
    
         <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Number of points:</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
        </Form.Group>
        
         <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Number of Sources:</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
        </Form.Group>
        
         <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Number of Samples:</Form.Label>
          <Form.Control className="inputBox" type="text" placeholder="Enter Your Answer" />
        </Form.Group>
      </Form.Row>


     </fieldset>
     </div>
  )
}
export default Questionnare
