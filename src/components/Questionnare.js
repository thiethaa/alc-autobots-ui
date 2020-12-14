import React from 'react';
import { useState } from 'react';
import {Form,Col,Row,Button,Modal} from 'react-bootstrap';
import axios from 'axios';

const Questionnare = () => {

    const [id,setId] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg,setErrMsg] =useState('');

/* system configuration */
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

/* site controller */
    const [controllerModel,setControllerModel] = useState('');
    const [controllerIpAddress,setControllerIpAddress]= useState('');
    const [controllerFirmware,setControllerFirmware]= useState('');
    const [bacNet,setBacNet]= useState('');

/* site networking */
    const [internetProxy,setInternetProxy] = useState('');
    const [hardwareVpn,setHardwareVpn] =useState('');

/* submit handler */
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
      sampleNo,
      controllerModel,
      controllerIpAddress,
      controllerFirmware,
      bacNet,
      internetProxy,
      hardwareVpn
    }
    console.log(newQuestionnareDate);
    if(id.length > 0){
      axios.post('http://localhost:7071/add-questionnare',newQuestionnareDate)
          .then(response => {
            setSuccessMsg("Data Saved Successfully!")
            setTimeout(() => {
             setSuccessMsg('')
            }, 3000);
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
    setControllerModel('');
    setControllerIpAddress('');
    setControllerFirmware('');
    setBacNet('');
    setInternetProxy('');
    setHardwareVpn('');
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
     <Form className="p-4">
     <h4 className="headerTitle">System Cloud Migration Questionnaire</h4>
     
        <div style={{color:'green',textAlign:'center',padding:'10px',margin:'5px'}}>{successMsg}</div>
        <div style={{color:'Red',textAlign:'center',padding:'10px',margin:'5px'}}>{errMsg}</div>

          <div>       
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label className="text text-info" column sm="3">
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

      <div className="title"><i className="fas fa-list-alt"></i>  System Configuration (WebCTRL and I-Vu)</div>

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

            <h6 className="text text-info">Size of Environment : </h6>
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

            <h6 className="text text-info">System Settings : System Statistics :</h6>
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

          <hr className="border"></hr>

          <div className="title"><i className="fas fa-list-alt"></i>  Site Controller</div>
          <h6 className="text text-info">List all controllers connected to the corporate Ethernet network : </h6>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Model :</Form.Label>
                <Form.Control className="inputBox" 
                      type="text"
                      value={controllerModel} 
                      onChange={(e)=>setControllerModel(e.target.value)}
                      placeholder="Enter Your Answer" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>IP Address :</Form.Label>
                <Form.Control className="inputBox" 
                      type="text" 
                      value={controllerIpAddress}
                      onChange={(e)=>setControllerIpAddress(e.target.value)}
                      placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Firmware Version :</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={controllerFirmware}
                    onChange={(e)=>setControllerFirmware(e.target.value)}
                    placeholder="Enter Your Answer" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
          <Form.Label>What BACnet/IP port(s) are used communicating with current WebCTRL or I-Vu</Form.Label>
          <Form.Control className="inputBox" 
                type="text" 
                value={bacNet}
                onChange={(e)=>setBacNet(e.target.value)}
                placeholder="Enter Your Answer" />
          </Form.Group>

          <hr className="border"></hr>

          <div className="title"><i className="fas fa-list-alt"></i>  Site Networking</div>
          
          <Form.Group>
          <Form.Label>Does the corporate network require a proxy for internet connectivity?</Form.Label>
          <Form.Control className="inputBox" 
                type="text" 
                value={internetProxy}
                onChange={(e)=>setInternetProxy(e.target.value)}
                placeholder="Enter Your Answer" />
          </Form.Group>

          <Form.Group>
          <Form.Label>Will the corporate IT department allow a hardware VPN appliance to be installed (Tosibox Lock)?</Form.Label>
          <Form.Check 
              type="checkbox" 
              value={hardwareVpn}
              onClick={()=>setHardwareVpn('Yes')}
              label="Yes"/>
              <Form.Check 
              type="checkbox" 
              value={hardwareVpn}
              onClick={()=>setHardwareVpn('No')}
              label="No"/>
          </Form.Group>

              <div style={{marginLeft:'40%'}}>
                <Button type="submit" onClick={submit} variant="info" style={{width:'200px',margin:'6px'}}>Submit</Button>
                <Button type="reset" onClick={handleShow} variant="secondary" style={{width:'200px'}}>Reset</Button>
  
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reseting Field</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Reseting will reset all the fields. Are you sure you want to reset?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="info" onClick={reset}>
                    Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
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

   