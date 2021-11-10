import React from 'react';
import {useHistory} from 'react-router-dom';

 function HODNavbar() {

    const history = useHistory();
    const HODNotification = () =>{
        history.push('./hodnotification')
    }
    return (
        <div>
            <nav className="main-header navbar navbar-expand">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item1 d-none d-sm-inline-block">
                        <a href="index3.html" className="brand-link">
                            <img src="/img/abc-logo.jpg" alt="ABC Logo" className="brand-image img-circle elevation-3"/>
                            <p>Leave Approval System</p>
                        </a>
                        
                    </li>

                </ul>

                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Notifications Dropdown Menu */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge" style={{ marginRight: 15 }}>15</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new messages
                             <span className="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="#" className="dropdown-item dropdown-footer" onClick={HODNotification}>See All Notifications</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
                    </li> */}

                </ul>
            </nav>
        </div>
    )
}
export default HODNavbar;