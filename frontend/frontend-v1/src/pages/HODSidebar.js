import React from 'react';
import { useHistory } from 'react-router-dom';

function HODSidebar() {
    const history = useHistory();

    const LeaveclerkDashbord = () => {
        history.push('/hoddashbord')
    }

    const HODEditeprofile = () => {
        history.push('/hodediteprofile')
    }

    const HODELeavesTable = () => {
        history.push('/hodemployeeleavestable')
    }

    const HODNotifications = () => {
        history.push('/hodnotification')
    }

    const HodNotificationTable =() =>{
        history.push('/hodnotificationtable')
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
                                <hr />
                            </a>
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar">
                            {/* Sidebar user panel (optional) */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image" >
                                    <img src="/img/man.png" className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block"><b>HOD</b></a>
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
                                            <p onClick={HODEditeprofile}>
                                                Edit Profile
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item " >
                                        <a href="#" className="nav-link active">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p onClick={HODELeavesTable}>
                                                E-Leaves Table
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item " >
                                        <a href="#" className="nav-link active">
                                            <i className="nav-icon fas fa-tachometer-alt" />
                                            <p onClick={HodNotificationTable}>
                                            HOD Notification Table
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
        </div>
    )
}
export default HODSidebar;