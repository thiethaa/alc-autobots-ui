import React, { useState } from 'react'
import { Button, Form,Row,Col,Modal } from 'react-bootstrap';
import axios from 'axios';

const CheckList = () => {
  const [id,setId] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg,setErrMsg] =useState('');

  /* deep dive meeting */
  const [sendQuestionnaire, setQuestionnareStatus] = useState(false);
  const [createHubPage, setHubPageStatus] = useState(false);
  const [scheduleDeepDive, setDeepDiveStatus] = useState(false);
  const [determineCustomer, setDetermineCustomerStatus] = useState(false);
  const [disscussAddons, setDisscussAddonsStatus] =useState(false);
  const [proxySetting,setProxySettingStatus] = useState(false);
  const [trendExport,setTrendExportStatus] = useState(false);
  const [explainCloudMigrationTool,SetExplainCloudMigrationToolStatus] = useState(false);
  const [networking,setNetworkingStatus] = useState(false);
  const [changeCloud,setChangeCloudStatus] = useState(false);
  const [actionUi,setActionUiStatus] = useState(false);
  const [patching,setPatchingStatus] = useState(false);
  const [siteBuilder,setSideBuilederStatus] = useState(false);
  const [workArounds,setWorkArroundsStatus] = useState(false);
  const [sourceTrees,setSourceTreesStatus] = useState(false);
  const [gap,setGapStatus] = useState(false);
  const [coming,setComingStatus] = useState(false);
  const [passwordNotify,setpasswordNotifyStatus] = useState(false);
  const [methodToMinimize,setMethodTominimizestatus] = useState(false);
  const [determineNetworking,setDetermineNetworkingStatus] = useState(false);
  const [changeRoute,setChangeRouteStatus] = useState(false);
  const [testingValidation,setTestingValidationStatus] = useState(false);
  const [targetDates,setTargetDatesStatus] = useState(false);
  const [addMember,setAddMemberStatus] = useState(false);

/* upgrade System */
const [webCtrlAccess,setWebCtrlAccessStatus] = useState(false);
const [webCtrlKey,setWebCtrlKeyStatus] = useState(false);
const [bacLicenses,setBacLicensesStatus] = useState(false);
const [upgradeSystem,setUpgradeSystemStatus] = useState(false);
const [cleanOutWebRoot,setCleanOutWebRootStatus] = useState(false);
const [notUsingDerby,setUsingDerbyStatus] = useState(false);
const [scheduleMigration,setScheduleMigration] = useState(false);

/* update drivers */
const [updateAllDevice,setUpdateAllDeviceStatus] = useState(false);

/* tosibox setup */
const [orderTosibox,setOrderTosiboxStatus]= useState(false);
const [digitalNetTicket,setDigitalNetTicketStatus]= useState(false);
const [staticIpAddress,setStaticIpAddressStatus] = useState(false);
const [switchPort,setSwitchPortStatus]= useState(false);
const [firewallRules,setFirewallRulesStatus]= useState(false);
const [configureTosibox,setConfigureTosiboxStatus]= useState(false);
const [shipTosibox,setShipTosiboxStatus]= useState(false);
const [veryfyTosiboxbyOwner,setVeryfyTosiboxbyOwner]= useState(false);
/* cloud sytem setup */
const [implementAwsNetwork,setImplementAwsNetStatus] = useState(false);
const [createEmptyAwsSystem,setCreateEmptySytemStatus] = useState(false);
const [giveToolAndPassword,setGiveToolAndPwdStatus] = useState(false);
const [giveOwnerWebCtrlUrl,setGiveOwnerWebCtrlurlStatus] = useState(false);

/* owner-premigration */
const [updateBbmd,setUpdateBbmdStatus] = useState(false);
const [changeDefaultRoute,setChangeDefaultRouteStatus] = useState(false);
console.log(changeDefaultRoute);
const [makeBbmdDevice,setMakeBbmdDeviceStatus] = useState(false);

/* submit handler */
const submit = (e) =>{
  e.preventDefault();
  const newData = {
   id: id,
   /* deep dive meeting */
   sendQuestionnaire,
   createHubPage,
   scheduleDeepDiveMeeting: scheduleDeepDive,
   determineCustomer,
   disscussAddons,
   proxySetting,
   trendExport,
   explainCloudMigrationTool,
   networking,
   changeCloud,
   actionUi,
   patching,
   siteBuilder,
   workArounds,
   sourceTrees,
   gap,
   coming,
   passwordNotify,
   methodToMinimize,
   determineNetworking,
   changeRoute,
   testingValidation,
   targetDates,
   addMember,
/* upgrade system */
   webCtrlAccess,
   webCtrlKey,
   bacLicenses,
   upgradeSystem,
   cleanOutWebRoot,
   notUsingDerby,
   scheduleMigration,
/* update drivers */
   updateAllDevice,
/* tosibox setup */
    orderTosibox,
    digitalNetTicket,
    staticIpAddress,
    switchPort,
    firewallRules,
    configureTosibox,
    shipTosibox,
    veryfyTosiboxbyOwner,
/* cloud system setup */
    implementAwsNetwork,
    createEmptyAwsSystem,
    giveToolAndPassword,
    giveOwnerWebCtrlUrl,
/* owner pre-migration */
    updateBbmd,
    changeDefaultRoute,
    makeBbmdDevice
  }
   console.log(newData);

   if(id.length > 0){
     axios.post('http://localhost:7070/add-meeting',newData)
         .then(response => {
             // alert("Data Saved Successfully!")
           setSuccessMsg("Data Saved Successfully!")
             setTimeout(() => {
               setSuccessMsg('')
              }, 3000);
             // reset();
         })
    }else{
        setErrMsg ("CheckList Id is Required!!!")
      }
    }

const scheduleDeepDiveController = () => {
    setDeepDiveStatus(!scheduleDeepDive);
       resetChildValue();
  }

const resetChildValue = () => {
/* deep dive meeting */
    setDetermineCustomerStatus(false);
    setDisscussAddonsStatus(false);
    setProxySettingStatus(false);
    setTrendExportStatus(false);
    SetExplainCloudMigrationToolStatus(false);
    setNetworkingStatus(false);
    setChangeCloudStatus(false);
    setActionUiStatus(false);
    setPatchingStatus(false);
    setSideBuilederStatus(false);
    setWorkArroundsStatus(false);
    setSourceTreesStatus(false);
    setGapStatus(false);
    setComingStatus(false);
    setpasswordNotifyStatus(false);
    setMethodTominimizestatus(false);
    setDetermineNetworkingStatus(false);
    setChangeRouteStatus(false);
    setTestingValidationStatus(false);
    setTargetDatesStatus(false);
  }

const digitalNetTicketController = () => {
    setDigitalNetTicketStatus(!digitalNetTicket);
      resetTosiboxSetupChild();
  }

const resetTosiboxSetupChild = () => {
    setStaticIpAddressStatus(false);
    setSwitchPortStatus(false);
    setFirewallRulesStatus(false);
}

const resetParentValue = () => {
  /* deep dive meeting */
      setQuestionnareStatus(false);
      setHubPageStatus(false);
      setDeepDiveStatus(false);
      setAddMemberStatus(false);
  /* upgrade system */
      setWebCtrlAccessStatus(false);
      setWebCtrlKeyStatus(false);
      setBacLicensesStatus(false);
      setUpgradeSystemStatus(false);
      setCleanOutWebRootStatus(false);
      setUsingDerbyStatus(false);
      setScheduleMigration(false);
      /* update drivers */
      setUpdateAllDeviceStatus(false);

/* tosibox setup */
      setOrderTosiboxStatus(false);
      setDigitalNetTicketStatus(false);
      setConfigureTosiboxStatus(false);
      setShipTosiboxStatus(false);
      setVeryfyTosiboxbyOwner(false);
/* cloud sytem setup */
      setImplementAwsNetStatus(false);
      setCreateEmptySytemStatus(false);
      setGiveToolAndPwdStatus(false);
      setGiveOwnerWebCtrlurlStatus(false);

/* owner-premigration */
      setUpdateBbmdStatus(false);
      setChangeDefaultRouteStatus(false);
      setMakeBbmdDeviceStatus(false);
  }

 const reset = () => {
   resetParentValue();
   resetChildValue();
   resetTosiboxSetupChild();
   window.location.reload();
 }

/* Modal */
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
       <h4 className="headerTitle">Migration Plan and Checklist</h4>

            <div style={{color:'green',textAlign:'center',padding:'10px',margin:'5px'}}>{successMsg}</div>
            <div style={{color:'Red',textAlign:'center',padding:'10px',margin:'5px'}}>{errMsg}</div>
            
              <div>       
                <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Label className="text text-info" column sm="2">
                  Meeting ID
                </Form.Label>
                <Col sm="10">
                  <Form.Control className="inputBox"
                  type="text" 
                  value={id}
                  onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('')}}
                  placeholder="CheckList ID" required/>
                </Col>
              </Form.Group>
            </div>

    <hr className="border"></hr>
    <div className="title"><i className="fas fa-list-alt"></i>  Deep Dive Meeting</div>
          <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={sendQuestionnaire}
                onClick={()=>setQuestionnareStatus(!sendQuestionnaire)}
                label="Send Questionnaire" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={createHubPage}
                onClick={()=>setHubPageStatus(!createHubPage)}
                label="Create Hub page with answers from questionnaire" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
                <Form.Check 
                type="checkbox" 
                value={scheduleDeepDive}
                onClick={scheduleDeepDiveController}
                label="Schedule Deep Dive and Planning meeting with system manager"/>  
          </Form.Group>

                { scheduleDeepDive ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={determineCustomer}
                      value={determineCustomer}
                      onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                      label="Determine customer name" />
                      <Form.Check 
                      type="checkbox" 
                      checked={disscussAddons}
                      value={disscussAddons}
                      onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                      label="Disscuss all addons and ensure compatibility" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group>
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={determineCustomer}
                        onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                        label="Determine customer name" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={disscussAddons}
                        onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                        label="Disscuss all addons and ensure compatibility" />
                    </Form.Group>
                  </div>
                }
                 { scheduleDeepDive && disscussAddons ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={proxySetting}
                        value={proxySetting}
                        onClick={()=>setProxySettingStatus(!proxySetting)}
                        label="Proxy settings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={trendExport}
                        value={trendExport}
                        onClick={()=>setTrendExportStatus(!trendExport)}
                        label="Trend Export" />
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={proxySetting}
                        onClick={()=>setProxySettingStatus(!proxySetting)}
                        label="Proxy settings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={trendExport}
                        onClick={()=>setTrendExportStatus(!trendExport)}
                        label="Trend Export" />
                    </Form.Group>
                  </div>
                }
                {scheduleDeepDive ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={explainCloudMigrationTool}
                      value={explainCloudMigrationTool}
                      onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                      label="Explain cloud migration tool" />
                      <Form.Check 
                      type="checkbox" 
                      checked={networking}
                      value={networking}
                      onClick={()=>setNetworkingStatus(!networking)}
                      label="Networking" />
                      <Form.Check 
                      type="checkbox" 
                      checked={changeCloud}
                      value={changeCloud}
                      onClick={()=>setChangeCloudStatus(!changeCloud)}
                      label="Change in the cloud" />
                  </Form.Group>
                </div>
                :
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={explainCloudMigrationTool}
                      onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                      label="Explain cloud migration tool" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={networking}
                      onClick={()=>setNetworkingStatus(!networking)}
                      label="Networking" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={changeCloud}
                      onClick={()=>setChangeCloudStatus(!changeCloud)}
                      label="Change in the cloud" />
                  </Form.Group>
                </div>
                }

                { scheduleDeepDive && changeCloud ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={actionUi}
                      value={actionUi}
                      onClick={()=>setActionUiStatus(!actionUi)}
                      label="Actions in UI are same on-prem and cloud" />
                      <Form.Check 
                      type="checkbox" 
                      checked={patching}
                      value={patching}
                      onClick={()=>setPatchingStatus(!patching)}
                      label="No longer patching" />
                      <Form.Check 
                      type="checkbox" 
                      checked={siteBuilder}
                      value={siteBuilder}
                      onClick={()=>setSideBuilederStatus(!siteBuilder)}
                      label="SiteBuilder - No direct Sitebuilder" />
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={actionUi}
                        onClick={()=>setActionUiStatus(!actionUi)}
                        label="Actions in UI are same on-prem and cloud" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={patching}
                        onClick={()=>setPatchingStatus(!patching)}
                        label="No longer patching" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={siteBuilder}
                        onClick={()=>setSideBuilederStatus(!siteBuilder)}
                        label="SiteBuilder - No direct Sitebuilder" />
                    </Form.Group>
                  </div>
                }
                {scheduleDeepDive && changeCloud && siteBuilder ?
                  <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox"
                        checked={workArounds} 
                        value={workArounds}
                        onClick={()=>setWorkArroundsStatus(!workArounds)}
                        label="Workarounds: clippings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={sourceTrees}
                        value={sourceTrees}
                        onClick={()=>setSourceTreesStatus(!sourceTrees)}
                        label="Source Trees" />
                        <Form.Check 
                        type="checkbox" 
                        checked={gap}
                        value={gap}
                        onClick={()=>setGapStatus(!gap)}
                        label="Gap: Network tree – can use clippings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={coming}
                        value={coming}
                        onClick={()=>setComingStatus(!coming)}
                        label="Coming: Admin tool to pull replicant and make backups" />
                      </Form.Group>
                  </div>
                  :
                  <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={workArounds}
                        onClick={()=>setWorkArroundsStatus(!workArounds)}
                        label="Workarounds: clippings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={sourceTrees}
                        onClick={()=>setSourceTreesStatus(!sourceTrees)}
                        label="Source Trees" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={gap}
                        onClick={()=>setGapStatus(!gap)}
                        label="Gap: Network tree – can use clippings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={coming}
                        onClick={()=>setComingStatus(!coming)}
                        label="Coming: Admin tool to pull replicant and make backups" />
                    </Form.Group>
                  </div>
                }
                
                {scheduleDeepDive ? 
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={passwordNotify}
                        value={passwordNotify}
                        onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                        label="Notify that all passwords will change and need to be reset" />
                        <Form.Check 
                        type="checkbox" 
                        checked={methodToMinimize}
                        value={methodToMinimize}
                        onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                        label="Methods to minimize time of outage - bigger trend buffers" />
                        <Form.Check 
                        type="checkbox" 
                        checked={determineNetworking}
                        value={determineNetworking}
                        onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                        label="Determine networking requirements (Tosibox or SC Hub)" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={passwordNotify}
                        onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                        label="Notify that all passwords will change and need to be reset" />
                        <Form.Check 
                        disabled
                        value={methodToMinimize}
                        onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                        label="Methods to minimize time of outage - bigger trend buffers" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={determineNetworking}
                        onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                        label="Determine networking requirements (Tosibox or SC Hub)" />
                    </Form.Group>
                  </div>
                }

                {scheduleDeepDive && determineNetworking ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={changeRoute}
                        value={changeRoute}
                        onClick={()=>setChangeRouteStatus(!changeRoute)}
                        label= "Can devices change default route or add static routes?"/>
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={changeRoute}
                        onClick={()=>setChangeRouteStatus(!changeRoute)}
                        label= "Can devices change default route or add static routes?"/>
                    </Form.Group>
                  </div>
                }

                {scheduleDeepDive ? 
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={testingValidation}
                        value={testingValidation}
                        onClick={()=>setTestingValidationStatus(!testingValidation)}
                        label="May have some programs to pre-load for migration validation testing" />
                        <Form.Check 
                        type="checkbox" 
                        checked={targetDates}
                        value={targetDates}
                        onClick={()=>setTargetDatesStatus(!targetDates)}
                        label="Determine target dates for upgrading to 8.0 and for migration" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={testingValidation}
                        onClick={()=>setTestingValidationStatus(!testingValidation)}
                        label="May have some programs to pre-load for migration validation testing" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={targetDates}
                        onClick={()=>setTargetDatesStatus(!targetDates)}
                        label="Determine target dates for upgrading to 8.0 and for migration" />
                    </Form.Group>
                  </div>
                }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={addMember}
                onClick={()=>setAddMemberStatus(!addMember)}
                label="Add members and start Conversation in Teams" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Upgrade System</div>
               
          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={webCtrlAccess}
              onClick={()=>setWebCtrlAccessStatus(!webCtrlAccess)}
              label="Give site access to required WebCTRL Build" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={webCtrlKey}
              onClick={()=>setWebCtrlKeyStatus(!webCtrlKey)}
              label="Generate WebCTRL 8.0 license key for system" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={bacLicenses}
              onClick={()=>setBacLicensesStatus(!bacLicenses)}
              label="Generate licenses for any other products deployed (BACnet/SC Hub etc.)" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={upgradeSystem}
              onClick={()=>setUpgradeSystemStatus(!upgradeSystem)}
              label="Upgrade system to 8.0 in place and confirm it is stable and fully functional" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={cleanOutWebRoot}
              onClick={()=>setCleanOutWebRootStatus(!cleanOutWebRoot)}
              label="After upgrade, clean out anything from your webroot/system directory that you don't need in the cloud. Everything in there gets copied to the cloud
              and takes time to move" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={notUsingDerby}
              onClick={()=>setUsingDerbyStatus(!notUsingDerby)}
              label="If not using Derby: remove databases directory if it exists" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={scheduleMigration}
              onClick={()=>setScheduleMigration(!scheduleMigration)}
              label="Schedule migration" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Update Drivers</div>
       
          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={updateAllDevice}
              onClick={()=>setUpdateAllDeviceStatus(!updateAllDevice)}
              label="Update all devices to latest driver" />
          </Form.Group>
      

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Tosibox Setup</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={orderTosibox}
              onClick={()=>setOrderTosiboxStatus(!orderTosibox)}
              label="Order Tosibox" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
                <Form.Check 
                type="checkbox" 
                value={digitalNetTicket}
                onClick={digitalNetTicketController}
                label="Tickets for Digital Networking Team"/>  
          </Form.Group>

                { digitalNetTicket ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={staticIpAddress}
                      value={staticIpAddress}
                      onClick={()=>setStaticIpAddressStatus(!staticIpAddress)}
                      label="Static IP address" />
                      <Form.Check 
                      type="checkbox" 
                      checked={switchPort}
                      value={switchPort}
                      onClick={()=>setSwitchPortStatus(!switchPort)}
                      label="Switch/Patch Port" />
                      <Form.Check 
                      type="checkbox" 
                      checked={firewallRules}
                      value={firewallRules}
                      onClick={()=>setFirewallRulesStatus(!firewallRules)}
                      label="Firewall rules" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={staticIpAddress}
                      onClick={()=>setStaticIpAddressStatus(!staticIpAddress)}
                      label="Static IP address" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={switchPort}
                      onClick={()=>setSwitchPortStatus(!switchPort)}
                      label="Switch/Patch Port" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={firewallRules}
                      onClick={()=>setFirewallRulesStatus(!firewallRules)}
                      label="Firewall rules" />
                    </Form.Group>
                  </div>
                }

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={configureTosibox}
              onClick={()=>setConfigureTosiboxStatus(!configureTosibox)}
              label="Configure Tosibox" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={shipTosibox}
              onClick={()=>setShipTosiboxStatus(!shipTosibox)}
              label="Ship to site with instructions on installation" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={veryfyTosiboxbyOwner}
              onClick={()=>setVeryfyTosiboxbyOwner(!veryfyTosiboxbyOwner)}
              label="Site owner install Tosibox and Dan verify function" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Cloud System Setup</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={implementAwsNetwork}
              onClick={()=>setImplementAwsNetStatus(!implementAwsNetwork)}
              label="Implement required network for connectivity to AWS" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={createEmptyAwsSystem}
              onClick={()=>setCreateEmptySytemStatus(!createEmptyAwsSystem)}
              label="Create empty system in AWS" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={giveToolAndPassword}
              onClick={()=>setGiveToolAndPwdStatus(!giveToolAndPassword)}
              label="Give Barry Admin Tool URL and Password" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={giveOwnerWebCtrlUrl}
              onClick={()=>setGiveOwnerWebCtrlurlStatus(!giveOwnerWebCtrlUrl)}
              label="Give Site Owner WebCTRL URL and default user password" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Owner Pre-Migration</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={updateBbmd}
              onClick={()=>setUpdateBbmdStatus(!updateBbmd)}
              label="Update device that will be BBMD to latest driver rev and confirm that driver doesn't have BBMD issues (LGR250 mb driver known issues)" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={changeDefaultRoute}
              onClick={()=>setChangeDefaultRouteStatus(!changeDefaultRoute)}
              label="Site owner change default route of IP devices to Tosibox IP" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={makeBbmdDevice}
              onClick={()=>setMakeBbmdDeviceStatus(!makeBbmdDevice)}
              label="Make one device a BBMD (In SiteBuilder check the Auto box) (Only one device can have the box checked)" />
          </Form.Group>


          <div style={{marginLeft:'40%'}}>
          <Button type="submit" onClick={submit} variant="info" style={{width:'200px',margin:'5px'}}>Submit</Button>
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

export default CheckList



