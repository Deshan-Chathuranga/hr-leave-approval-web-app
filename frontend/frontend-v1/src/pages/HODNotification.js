import React from "react";
import { useEffect, useState } from "react";
import HODNavbar from "../components/HODNavbar";
import HODSidebar from "./HODSidebar";
import leaveService from "../services/leaveService";
import { Col, Row } from "react-bootstrap";
import {useForm} from "react-hook-form";
import { useHistory, useParams } from "react-router";

function HODNotification() {
  const { id} = useParams();
  const [notification, setNotification] = useState([]);
  const history = useHistory();
  // const [searchedNotifications, setSearchedNotifications] = useState([]);
  // const [searchStr, setSearchStr] = useState("");

  const getNotification = async () => {
    const res = await leaveService.getIndividualHODNotification(id);
    setNotification(res.data);
  };

  useEffect(() => {
    getNotification();
  }, []);

  
  
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    //         console.log(JSON.stringify(data));
        
            leaveService.updateLeave(data,notification?.id).then((res) => {
                alert("Sucessfully Updated!");
                // window.location.reload();
                history.push('/hodnotificationtable')
              })
              .catch((error) => {
                alert("Try again!");
              });
          };


  return (
    <div>
      <HODNavbar />
      <HODSidebar />
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Notification</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Notification</li>
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
                        {/*<li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Leaves</a></li>*/}
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
                            <div className="card">
                              <div className="card-header p-2">
                                <ul className="nav nav-pills">
                                  <h4 style={{ color: "#fff" }}>
                                    My Notification
                                  </h4>
                                 
                                </ul>
                              </div>
                              {/* /.card-header */}
                              <div className="card-body">
                                <div className="tab-content">
                                  <div
                                    className="active tab-pane"
                                    id="activity"
                                  >
                                    {/* Post */}
                                    <div className="post">
                                      <section className="content">
                                        <div className="container-fluid">
                                          {/* Timelime example  */}
                                          <div className="row">
                                            <div className="col-md-12">
                                              
                                            <div >
            <div className="time-label">
              <span className="date" style={{color:"red" , marginLeft:"18px"}}></span>
            </div>
            {/* /.timeline-label */}
            {/* timeline item */}
            <div>
             
              <div className="timeline-item">
                <span className="time">
                  {/* <i className="fas fa-clock" /> */}
                </span>
                <h4 className="timeline-header" style={{ marginLeft:"18px"}}>Leave Request</h4>
                <form role="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <Row>
                      <Col ms={4}>
                        <div className="form-group">
                          <label>Emp ID:</label>
                          <input
                            type="text"
                            id="empid"
                            class="form-control"
                            value={notification.empcode}
                           
                          />
                        </div>
                        <div className="form-group">
                          <label>Request Date:</label>
                          <input
                            type="text"
                            id="reqdate"
                            class="form-control"
                            value={notification.requestDate}
                            
                          />
                        </div>
                        <div className="form-group">
                          <label>Employee Name:</label>
                          <input
                            type="text"
                            id="empname"
                            class="form-control"
                            value={notification.fName + " " + notification.lName}
                          />
                        </div>
                        <div className="form-group">
                          <label>HOD Status:</label>
                          <select class="form-control" name="hodStatus" ref={register}>
                          <option>Approved</option>
                            <option>Rejected</option>
                           
                            {/* <option>option 3</option>
                                          <option>option 4</option>
                                          <option>option 5</option> */}
                          </select>
                        </div>
                      </Col>

                      <Col ms={4}>
                        <div className="form-group">
                          <label>From:</label>
                          <input
                            type="text"
                            id="fromDate"
                            class="form-control"
                            value={notification.fromDate}
                           
                          />
                        </div>
                        <div className="form-group">
                          <label>To:</label>
                          <input
                            type="text"
                            id="fromDate"
                            class="form-control"
                            value={notification.toDate}
                          />
                        </div>
                        <div className="form-group">
                          <label>Reason For Leave:</label>
                          <textarea
                            type="text"
                            id="fromDate"
                            class="form-control"
                            value={notification.reason}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-footer">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Submit
                                </button>
                              </div>
                </form>
              </div>
            </div>
          </div>
      
                                               
                                            </div>
                                            {/* /.col */}
                                          </div>
                                        </div>
                                        {/* /.timeline */}
                                      </section>
                                    </div>
                                    {/* /.post */}
                                    {/* Post */}
                                    <div className="post clearfix"></div>
                                    {/* /.post */}
                                    {/* Post */}

                                    {/* /.post */}
                                  </div>
                                  {/* /.tab-pane */}
                                  <div className="tab-pane" id="timeline">
                                    {/* The timeline */}
                                    <div className="timeline timeline-inverse">
                                      <div
                                        className="card"
                                        style={{ color: " #070242" }}
                                      >
                                        <div className="card-header">
                                          <h3
                                            className="card-title"
                                            style={{ color: "#fff" }}
                                          >
                                            Application For Leave
                                          </h3>
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
                          </div>
                          {/* /.post */}
                          {/* Post */}
                          <div className="post clearfix"></div>
                          {/* /.post */}
                          {/* Post */}

                          {/* /.post */}
                        </div>
                        {/* /.tab-pane */}
                        <div className="tab-pane" id="timeline">
                          {/* The timeline */}
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
    </div>
  );
}
export default HODNotification;
