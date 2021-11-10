import { DashBordNavebar } from '../components/DashBordNavebar';
import React from 'react';
import DashBordSideBar from './DashBordSideBar';
import { useEffect, useState } from 'react';
import leaveService from '../services/leaveService'
// import Employee from './Model/Employee';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {useForm} from 'react-hook-form';


const EmployeeNotification = () => {

    const [notification, setNotification] = useState([]);

    const getNotification = async () => {
        const response = await leaveService.getAllNotification()
        setNotification(response.data)
    }

    useEffect(() => {
        getNotification();
    }, []);

    const { register, handleSubmit, errors } = useForm();



    const renderNotification = () => {
        
        return (
            notification && notification.map((n, index) => {
                const onSubmit = (data) => {
                    console.log(JSON.stringify(data));
                
                    leaveService.updateActingOfficerLeaveStatus(data,n?.id).then((res) => {
                        alert("Succesfully Submitted!");
                        window.location.reload();
                      })
                      .catch((error) => {
                        alert("Try again!");
                      });
                  }
                return (
                    <div key={index}>
                        <div className="time-label">
                            <span className="date" style={{color: "red" , marginLeft: "18px"}}>{n.requestDate}</span>
                        </div>
                        {/* /.timeline-label */}
                        {/* timeline item */}
                        <div> 
                            {/*<i className="fas fa-envelope bg-blue" />*/}
                            <div className="timeline-item">
                                
                                <h4 className="timeline-header" style={{marginLeft:"18px" , marginTop: "5px"}}>Assigning leave requests</h4>
                                <form role="form" onSubmit={handleSubmit(onSubmit)} >
                  <div className="card-body">
                    <Row>
                      <Col ms={4}>
                        <div className="form-group">
                          <label>Emp ID:</label>
                          <input
                            type="text"
                            id="empid"
                            class="form-control"
                            value={n.empcode}
                          />
                        </div>
                        <div className="form-group">
                          <label>Request Date:</label>
                          <input
                            type="text"
                            id="reqdate"
                            class="form-control"
                            value={n.requestDate}
                          />
                        </div>
                        <div className="form-group">
                          <label>Employee Name:</label>
                          <input
                            type="text"
                            id="empname"
                            class="form-control"
                            value={n.fName + " " + n.lName}
                          />
                        </div>
                        <div className="form-group">
                          <label>Acting Officer Status:</label>
                          <select
                            class="form-control"
                            name="actingOfficerStatus"
                            ref={register}
                          >
                            <option>Accepted</option>
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
                            value={n.fromDate}
                          />
                        </div>
                        <div className="form-group">
                          <label>To:</label>
                          <input
                            type="text"
                            id="fromDate"
                            class="form-control"
                            value={n.toDate}
                          />
                        </div>
                        <div className="form-group">
                          <label>Reason For Leave:</label>
                          <textarea
                            type="text"
                            id="fromDate"
                            class="form-control"
                            value={n.reason}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return (

        <div>
            <DashBordNavebar />
            <DashBordSideBar />
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
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Notification</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
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
                                        </div>{/* /.card-header */}

                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="active tab-pane" id="activity">
                                                    {/* Post */}
                                                    <div className="post">

                                                        <div className="card">
                                                            <div className="card-header p-2">
                                                                <ul className="nav nav-pills">
                                                                    <h4 style={{ color: "#fff" }}>Notification</h4>
                                                                </ul>
                                                            </div>{/* /.card-header */}
                                                            <div className="card-body">
                                                                <div className="tab-content">
                                                                    <div className="active tab-pane" id="activity">
                                                                        {/* Post */}
                                                                        <div className="post">
                                                                            <section className="content">
                                                                                <div className="container-fluid">
                                                                                    {/* Timelime example  */}
                                                                                    <div className="row">
                                                                                        <div className="col-md-12">
                                                                                            {/* The time line */}
                                                                                            
                                                                                                
                                                                                                
                                                                                                  {renderNotification()}
                                                                                               
                                                                                            
                                                                                            {/* END timeline item */}
                                                                                            {/* timeline item */}

                                                                                            {/* END timeline item */}
                                                                                            {/* timeline item */}
                                                                                            {/* <div>
                                                                                                        <i className="fas fa-comments bg-yellow" />
                                                                                                        <div className="timeline-item">
                                                                                                            <span className="time"><i className="fas fa-clock" /> 27 mins ago</span>
                                                                                                            <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
                                                                                                            <div className="timeline-body">
                                                                                                                Take me to your leader!
                                                                                                                Switzerland is small and neutral!
                                                                                                                We are more like Germany, ambitious and misunderstood!
                                                                                                            </div>
                                                                                                            <div className="timeline-footer">
                                                                                                                <a className="btn btn-warning btn-sm">View comment</a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div> */}
                                                                                            {/* <div>
                                                                                                        <i className="fas fa-envelope bg-blue" />
                                                                                                        <div className="timeline-item">
                                                                                                            <span className="time"><i className="fas fa-clock" /> 12:05</span>
                                                                                                            <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                                                                                                            <div className="timeline-body">
                                                                                                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                                                                                                weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                                                                                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                                                                                                quora plaxo ideeli hulu weebly balihoo...
                                                                                                            </div>
                                                                                                            <div className="timeline-footer">
                                                                                                                <a className="btn btn-success btn-sm">Approve</a>
                                                                                                                <a className="btn btn-danger btn-sm">Reject</a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div> */}
                                                                                            <div>
                                                                                                <i className="fas fa-clock bg-gray" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* /.col */}
                                                                                </div>
                                                                             
                                                                            {/* /.timeline */}
                                                                            </section>
                                                                    </div>
                                                                    {/* /.post */}
                                                                    {/* Post */}
                                                                    <div className="post clearfix">


                                                                    </div>
                                                                    {/* /.post */}
                                                                    {/* Post */}


                                                                    {/* /.post */}
                                                                </div>
                                                                {/* /.tab-pane */}
                                                                <div className="tab-pane" id="timeline">
                                                                    {/* The timeline */}
                                                                    <div className="timeline timeline-inverse">
                                                                        <div className="card" style={{ color: " #070242" }}>
                                                                            <div className="card-header" >
                                                                                <h3 className="card-title" style={{ color: "#fff" }}>Application For Leave</h3>
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
                                                        </div>{/* /.card-body */}
                                                    </div>

                                                </div>
                                                {/* /.post */}
                                                {/* Post */}
                                                <div className="post clearfix">


                                                </div>
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
                                    </div>{/* /.card-body */}
                                </div>
                                {/* /.nav-tabs-custom */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        </div>{/* /.container-fluid */}
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

        </div >
    )

}

export default EmployeeNotification;