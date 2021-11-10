import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import HODNavbar from '../components/HODNavbar';
import leaveService from '../services/leaveService';
import HODSidebar from './HODSidebar'

function HodNotificationTable() {

  const [notification, setNotification] = useState([]);
  const [searchedNotifications, setSearchedNotifications] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  const getNotification = async () => {
    const res = await leaveService.getHODAllNotifications();
    setNotification(res.data);
  };

  

  useEffect(() => {
    getNotification();
  }, []);




  // useEffect(() => {
  //   sortDescending();
  // }, []);


  useEffect(() => {
    
    if(searchStr.length === 0){
      setSearchedNotifications([]);
    } else {
      setSearchedNotifications(notification.filter((n)=> n.empcode.startsWith(searchStr.trim())));
    }

  }, [searchStr]);

  const history = useHistory();

  const HODEmorinfor = (id) => {
    history.push(`/hodnotification/${id}`);
  };

//   const sortDescending = () => {
//     let sortedData = notification.sort((a, b) => b - a)
//     setNotification(sortedData)
// }

  const renderBody=()=>{

    return (
      notification &&
      (searchedNotifications.length !== 0 ? searchedNotifications : notification).map(
        (notify) => {
          return (
            <tr key={notify.id}>
              <td>{notify.empcode}</td>
              <td>{notify.fName}</td>
              <td>{notify.lName}</td>
              <td>{notify.requestDate}</td>
              <td>{notify.actingOfficerStatus}</td>
              <td>{notify.hodStatus}</td>
              <td>{notify.type}</td>
              
              <td className="opration">
                <button
                  type="button"
                  className="btn bg-info btn-sm"
                  onClick={()=> HODEmorinfor(notify.id)}
                >
                  More
                </button>
              </td>
            </tr>
          );
        }
      )
    );

  }
      
      
    return (
        <div>
          <HODNavbar/>
            <HODSidebar/>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>HOD Notification Table</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">HOD Notification Table</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}

                {/* /.card */}
                {/* About Me Box */}

                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#activity"
                          data-toggle="tab"
                        >
                          Notifications
                        </a>
                      </li>
                      {/*<li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Leave Form</a></li>*/}
                      {/*<li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Edite Profile</a></li>*/}
                    </ul>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity">
                        {/* Post */}
                        <div className="post">
                          {/*table start*/}
                          <div className="row">
                            <div className="col-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3
                                    className="card-title"
                                    style={{ color: "#fff" }}
                                  >
                                    HOD Notification Table
                                  </h3>
                                  <div className="card-tools">
                                    <div
                                      className="input-group input-group-sm"
                                      style={{ width: 150 }}
                                    >
                                      <input
                                        type="text"
                                        name="table_search"
                                        className="form-control float-right"
                                        placeholder="Search"
                                        onChange={(e) => setSearchStr(e.target.value)}

                                      />
                                      <div className="input-group-append">
                                        <button
                                          type="submit"
                                          className="btn btn-default"
                                        >
                                          <i className="fas fa-search" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body table-responsive p-0">
                                  <table className="table table-hover text-nowrap">
                                    <thead>
                                      <tr>
                                        <th>EMP ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Request Date</th>
                                        <th>Acting Officer Respond</th>
                                        <th>HOD Respond</th>
                                        <th>Leave Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                     {renderBody()}
                                    </tbody>
                                  </table>
                                </div>
                                {/* /.card-body */}
                              </div>
                              {/* /.card */}
                            </div>
                          </div>
                        </div>
                        {/* /.post */}
                        {/* Post */}
                        <div className="post clearfix"></div>
                        {/* /.post */}
                        {/* Post */}
                        <div className="card bg-gradient"></div>
                        {/* Calendar */}

                        {/* /.post */}
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline">
                        {/* The timeline */}
                        <div className="timeline timeline-inverse">
                          <div className="card" style={{ color: " #070242" }}>
                            <div className="card-header">
                             
                            </div>
                            {/* /.card-header */}
                            {/* form start */}
                          </div>
                        </div>
                      </div>
                      {/* /.tab-pane */}

                      {/* /.tab-pane */}
                    </div>
                    {/* /.tab-content */}
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.nav-tabs-custom */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      <footer class="main-footer">
        <div class="float-right d-none d-sm-block">
          <b>ABC</b>
        </div>
        <strong>ABC Pvt Ltd leave approval system</strong>
      </footer>
    </div>
    )
}

export default HodNotificationTable
