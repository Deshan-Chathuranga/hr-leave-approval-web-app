import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { GaurdedRoute } from './components/GaurdedRoute';
import DashBord from "./components/DashBord";
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { EditeProfile } from './pages/EditeProfile';
import LeaveclerkDashbord from './pages/LeaveclerkDashbord';
import EmoreInfor from './pages/EmoreInfor';
import AddEmployee from './pages/AddEmployee';
import HODDashbord from './pages/HODDashbord';
import HODEditeprofile from './pages/HODEditeprofile';
import HODEleavesTable from './pages/HODEleavesTable';
import ClerkELeavTable from './pages/ClerkELeavTable';
import HODEmorinfor from './pages/HODEmorinfor';
import HODNotification from './pages/HODNotification';
import EmployeeNotification from './pages/employeeNotification';
// import ForgotPassword from './pages/ForgotPassword';
import { useEffect,useState } from 'react';
import leaveService from './services/leaveService';
import Employee from './Model/Employee';
import ShortHalfLeaves from './components/ShortHalfLeaves';
import MedicalCasualTable from './components/MedicalCasualTable';
import EmpShortLeaveHalfDay from './components/EmpShortLeaveHalfDay';
import LeaveUpdatingTable from './pages/LeaveUpdatingTable';
import HodNotificationTable from './pages/HodNotificationTable';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        
          <Route path= '/' exact component={Home}/>
          <Route path= '/login' component={Login}/>
          <Route path='/dashbord' component={DashBord}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/forgotpassword' component={ForgotPassword}/>
          <Route path='/editeprofile' component={EditeProfile}/>
          <Route path='/leaveclerkdashbord' component={LeaveclerkDashbord}/>
          <Route path='/employeemorinfor/:empid' component={EmoreInfor}/>
          <Route path='/addemployee' component={AddEmployee}/>
          <Route path='/clerkemployeeleavestable' component={ClerkELeavTable}/>
          <Route path='/hoddashbord' component={HODDashbord}/>
          <Route path='/hodediteprofile' component={HODEditeprofile}/>
          <Route path='/hodemployeeleavestable' component={HODEleavesTable}/>
          <Route path='/hodemployeemorinfor/:empid' component={HODEmorinfor}/>
          <Route path='/hodnotification/:id' component={HODNotification}/>
          <Route path='/enotification' component={EmployeeNotification}/>
          <Route path='/shorthalfleaves' component={ShortHalfLeaves}/>
          <Route path='/medicalcasualtable' component={MedicalCasualTable}/>
          <Route path='/empshorthalfleaves' component={EmpShortLeaveHalfDay}/>
          <Route path='/leaveupdatingtable' component={LeaveUpdatingTable}/>
          <Route path='/hodnotificationtable' component={HodNotificationTable}/>
        
      </Router>
    </>
  );
}

export default App;
