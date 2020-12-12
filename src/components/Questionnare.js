import React from 'react';
import { useState } from 'react';
import {Form,Col,Row,Button,Modal} from 'react-bootstrap';
import axios from 'axios';

const Questionnare = () => {

    const [id,setId] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg,setErrMsg] =useState('');

    const [webCtrlVersion,setWebCtrlVersion] = useState('');
    const [webCtrlIp,setWebCtrlIp] = useState('');
    const [addOnsList,setAddOnsList] = useState('');
    const [oldAddOns,setOldAddOns] = useState('');
    const [alertNotificationMethod,setAlertNotificationMethod] = useState('');
    const [addressesInNotification,setAddressesInNotification] = useState('');
    const [dbBrandAndVersion,setDbBrandAndVersion] = useState('');
    const [usingHierarchialServer,setUsingHierarchialServer] = useState('');
    const [directorySize,setDirectorySize] = useState('');
    const [dbSize,setDbSize] = useState('');
    const [controllerNo,setControllerNo] = useState('');
    const [pointsNo,setPointsNo] = useState('');
    const [sourceNo,setSourceNo] = useState(''); 
    const [sampleNo,setSampleNo] = useState('');

  const submit = (e) =>{
    e.preventDefault();
    const newQuestionnareDate ={
      id,
      webCtrlVersion,
      webCtrlIp,
      addOnsList,
      oldAddOns,
      alertMethod:alertNotificationMethod,
      inNotification:addressesInNotification,
      dbBrandAndVersion,
      usingHierarchial:usingHierarchialServer,
      directorySize,
      dbSize,
      controllerNo,
      pointsNo,
      sourceNo,
      sampleNo
    }
    console.log(newQuestionnareDate);
    if(id.length > 0){
      axios.post('http://localhost:7071/add-questionnare',newQuestionnareDate)
          .then(response => {
              setSuccessMsg("Data Saved Successfully!")
              // alert("Questionnare Saved Successfully!")
              // reset();
          })
  }else{
      setErrMsg ("Questionnare Id is Required!!!")
    }
  }

  const reset = () =>{
    setId('');
    setWebCtrlVersion('');
    setWebCtrlIp('');
    setAddOnsList('');
    setOldAddOns('');
    setAlertNotificationMethod('');
    setAddressesInNotification('');
    setDbBrandAndVersion('');
    setUsingHierarchialServer('');
    setDirectorySize('');
    setDbSize('');
    setControllerNo('');
    setPointsNo('');
    setSourceNo('');
    setSampleNo('');
    window.location.reload();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true)
  };

  return (
    <div className="checklistBox">
    <fieldset>
    <h5 className="title"><i className="fas fa-list-alt"></i>  System Configuration (WebCTRL and I-Vu)</h5>
     <Form className="p-4">

        <div style={{color:'green',textAlign:'center',padding:'10px',margin:'5px'}}>{successMsg}</div>
        <div style={{color:'Red',textAlign:'center',padding:'10px',margin:'5px'}}>{errMsg}</div>

          <div>       
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label className="text text-danger" column sm="3">
                Questionnare ID
              </Form.Label>
              <Col sm="9">
                <Form.Control className="inputBox"
                type="text" 
                value={id}
                onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('')}}
                placeholder="Questionnare ID" required/>
              </Col>
            </Form.Group>
          </div>

      <hr className="border"></hr>

              <Form.Group>
              <Form.Label>What version of WebCTRL or I-Vu are you currently running?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={webCtrlVersion}
                    onChange = {(e)=>setWebCtrlVersion(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>What is the IP of the WebCTRL or I-Vu server?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value ={webCtrlIp}
                    onChange={(e)=>setWebCtrlIp(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>List all add-ons that are enabled (not built-in)</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value ={addOnsList}
                    onChange={(e)=>setAddOnsList(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>List any add-ons not currently running that are desired in the next 3-6 months?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={oldAddOns}
                    onChange={(e)=>setOldAddOns(e.target.value)}
                    placeholder="Enter Your Answer"/>
              </Form.Group>

              <Form.Group>
              <Form.Label>What alert notification methods are used?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={alertNotificationMethod}
                    onChange={(e)=>setAlertNotificationMethod(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group id="formGridCheckbox">
              <Form.Label>Do you depend on specific From: addresses in notifications?</Form.Label>
                  <Form.Check 
                  type="checkbox" 
                  value={addressesInNotification}
                  onClick={()=>setAddressesInNotification('Yes')}
                  label="Yes"/>
                  <Form.Check 
                  type="checkbox" 
                  value={addressesInNotification}
                  onClick={()=>setAddressesInNotification('No')}
                  label="No"/>
            </Form.Group>

            <Form.Group>
            <Form.Label>What brand database are you using and what version?</Form.Label>
            <Form.Control className="inputBox" 
                  type="text" 
                  value={dbBrandAndVersion}
                  onChange={(e)=>setDbBrandAndVersion(e.target.value)}
                  placeholder="Enter Your Answer" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Are you using Hierarchical servers?</Form.Label>
            <Form.Check 
                type="checkbox" 
                value={usingHierarchialServer}
                onClick={()=>setUsingHierarchialServer('Yes')}
                label="Yes"/>
                <Form.Check 
                type="checkbox" 
                value={usingHierarchialServer}
                onClick={()=>setUsingHierarchialServer('No')}
                label="No"/>
            </Form.Group>

            <h5 className="text text-danger">Size of Environment : </h5>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>System directory size (bytes):</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text"
                        value={directorySize} 
                        onChange={(e)=>setDirectorySize(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Total Database size (bytes):</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={dbSize}
                        onChange={(e)=>setDbSize(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            </Form.Row>

            <h5 className="text text-danger">System Settings : System Statistics :</h5>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of controllers:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={controllerNo}
                        onChange={(e)=>setControllerNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of points:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={pointsNo}
                        onChange={(e)=>setPointsNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of Sources:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={sourceNo}
                        onChange={(e)=>setSourceNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of Samples:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text"
                        value={sampleNo} 
                        onChange={(e)=>setSampleNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
              </Form.Row>

              <div style={{marginLeft:'40%'}}>
                <Button type="submit" onClick={submit} variant="dark" style={{width:'200px',margin:'6px'}}>Submit</Button>
                <Button type="reset" onClick={handleShow} variant="danger" style={{width:'200px'}}>Reset</Button>
  
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reseting Field</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Reseting will reset all the fields. Are you sure you want to reset?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={reset}>
                      Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
          </Form>
      </fieldset>
    </div>
  )
}
export default Questionnare
