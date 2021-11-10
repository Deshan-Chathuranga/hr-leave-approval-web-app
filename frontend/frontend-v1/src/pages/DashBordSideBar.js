import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashBord from '../components/DashBord';
import { useHistory } from 'react-router-dom';
import "./DashBordSideBar.css";
import { axiosInstance } from '../services/service'
import { useEffect, useState } from 'react';

function DashBordSideBar() {


  const [user, setUser] = useState();
    
   
  useEffect(() => {
      axiosInstance.get("http://localhost:8080" + "/user/me")
          .then((response) => {
              setUser(response.data);
          });


  }, []);

  const history = useHistory();
  const EditeProfile = () => {
    history.push('/editeprofile')
  }

  const Notification = () => {
    history.push('/enotification')
  }

  const Login = () => {
    history.push('/login')
  }

  const DashBord = () => {
    history.push('/dashbord')
  }
  const EmpShortLeaveHalfDay = () => {
    history.push('/empshorthalfleaves')
  }
  return (
    <div>
      <div>
        <aside className="main-sidebar" >
          {/* Brand Logo */}

          <div className="sidebar-logo">
            <a href="index3.html" className="brand-link">
              <img src="/img/abc-logo.jpg" alt="ABC Logo" className="brand-image img-circle elevation-3" />
              <span className="brand-text font-weight-light" style={{ marginRight: "3rem" }}>ABC Pvt Ltd</span>
              <br />

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
                <a href="#" className="d-block">{user?.fName + " " + user?.lName}</a>
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
                    <p onClick={DashBord}>
                      Dashboard
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={EditeProfile}>
                      Edit Profile
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={EmpShortLeaveHalfDay}>
                     ShortLeaves and HalfDay
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={Notification}>
                     Notification
                    </p>
                  </a>
                </li>
                <li className="nav-item " >
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p onClick={Login}>
                      Logout
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
  )
}
export default DashBordSideBar;