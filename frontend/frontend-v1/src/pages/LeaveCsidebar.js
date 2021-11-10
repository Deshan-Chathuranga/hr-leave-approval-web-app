import React from 'react';
import {useHistory} from 'react-router-dom';
// import ShortHalfLeaves from '../components/ShortHalfLeaves';
// import Medicalcasualeaves from '../components/Medicalcasualleaves';
 


function LeaveCsidebar  ()  {

  const history = useHistory();

  const LeaveclerkDashbord = () => {
    history.push('./leaveclerkdashbord')
  }

  const AddEmployee = () =>{
    history.push('./addemployee')
  }

  const ClerkELeavesTable = () =>{
    history.push('./clerkemployeeleavestable')
  }

  const ShortHalfLeaves = () =>{
    history.push('./shorthalfleaves')
  }

  const MedicalCasualTable = () => {
    history.push('./medicalcasualtable')
  }

  const LeaveUpdatingTable = () => {
    history.push('./leaveupdatingtable')
  }

  const Login = () => {
    history.push('/login')
  }
    return (
        <div>
         
            <div>
      <div>
        <aside className="main-sidebar" >
          {/* Brand Logo */}

          <div className="sidebar-logo">
            <a href="index3.html" className="brand-link">
              <img src="/img/abc-logo.jpg" alt="ABC Logo" className="brand-image img-circle elevation-3" />
              <span className="brand-text font-weight-light" style={{ marginRight: "3rem" }}>ABC Pvt Ltd</span>
              <br />
            <hr/>
            </a>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image" >
                <img src="/img/login2.png" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block"><b>HR Manager</b></a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                            with font-awesome or any other icon font library */}
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={LeaveclerkDashbord}>
                      Dashboard
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={AddEmployee}>
                      Add Employee
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={ClerkELeavesTable}>
                      E-Leaves Table
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={ShortHalfLeaves}>
                    Short leaves and Half day Table
                    </p>   
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={MedicalCasualTable}>
                    Medical and Casual Leave Table
                    </p>
                 
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={LeaveUpdatingTable}>
                      Leave Updating Form
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={Login}>
                      Log out
                    </p>
                  </a>
                </li>
                
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    </div>
        </div>
    );
}
export default LeaveCsidebar;