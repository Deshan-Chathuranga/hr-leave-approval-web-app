import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import Chart from "./Chart";
import "./Profile.css";
import { axiosInstance } from "../services/service";
import { useEffect, useState } from "react";
import leaveService from "../services/leaveService";
import employeeService from "../services/employeeService";
import { useForm } from "react-hook-form";

export const Profile = (props) => {
  const [user, setUser] = useState();
  const [employees, setEmployees] = useState([]);
  const[leaves,setLeaves] = useState([]);

  //For get employee list
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await employeeService.getEmployeesByCategory();
    console.log(response.data)
    setEmployees(response.data);
    
  };

  //For get employee individual data
  useEffect(() => {
    axiosInstance.get("http://localhost:8080" + "/user/me").then((response) => {
      setUser(response.data);
    });
  }, []);

  //for get employees individual leaves

  const getLeaves = async () => {
    const response = await leaveService.getEmployeeIndividualLeaves();
    setLeaves(response.data);
  };

  useEffect(() => {
    getLeaves();
  }, []);

  const renderBody=() =>{
    return leaves && leaves.map(leaves => {
      
      return (
          <tr key={leaves.id}>
              <td>{leaves.requestDate}</td>
              <td>{leaves.noOfDays}</td>
              <td>{leaves.hodStatus}</td>
              <td>{leaves.actingOfficerStatus}</td>
              <td>{leaves.type}</td>
              
              
          </tr>
      )
  })
  }

  //Request for leave

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    leaveService
      .applyLeave(data)
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };
 


  return (
    <div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
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
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img
                        className="profile-user-img img-fluid img-circle"
                        src="/img/login2.png"
                        alt="User profile picture"
                      />
                    </div>
                    <h3 className="profile-username text-center">
                      {user?.fName + " " + user?.lName}
                    </h3>

                    <div className="card-header">
                      <h3 className="card-title" style={{ color: "#fff" }}>
                        About Me
                      </h3>
                    </div>
                    <div className="card-body">
                      <strong>
                        <i className="fas fa-book mr-1" />
                        Name
                      </strong>
                      <p className="text-muted">
                        {user?.fName + " " + user?.lName}{" "}
                      </p>
                      <hr />
                      <strong>
                        <i className="fas fa-map-marker-alt mr-1" /> Location
                      </strong>
                      <p className="text-muted">{user?.address}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        Contact No
                      </strong>
                      <p className="text-muted">{user?.contactNo}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        E-Type
                      </strong>
                      <p className="text-muted">{user?.eType}</p>
                      <hr />

                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}

                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#activity"
                          data-toggle="tab"
                        >
                          Leaves
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#timeline"
                          data-toggle="tab"
                        >
                          Leave Form
                        </a>
                      </li>
                      {/*<li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Edite Profile</a></li>*/}
                    </ul>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity">
                        {/* Post */}
                        <div className="post">
                          <Chart />
                        </div>
                        {/* /.post */}
                        {/* Post */}
                        <div className="post clearfix"></div>
                        {/* /.post */}
                        {/* Post */}
                     {/*table start*/}
                     <div className="row">
                            <div className="col-12">
                              <div className="card">
                                <div className="card-header">
                                  <h3
                                    className="card-title"
                                    style={{ color: "#fff" }}
                                  >
                                    Leaves Status Table
                                  </h3>
                                  <div className="card-tools">
                                    <div
                                      className="input-group input-group-sm"
                                      style={{ width: 150 }}
                                    >
                                      {/* <input
                                        type="text"
                                        name="table_search"
                                        className="form-control float-right"
                                        placeholder="Search"
                                       // onChange={(e)=> setSearchStr(e.target.value)}
                                        
                                      /> */}
                                      <div className="input-group-append">
                                        {/* <button
                                          type="submit"
                                          className="btn btn-default"
                                        //  onClick={getSingleEmp("1578")}
                                        >
                                          <i className="fas fa-search" />
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body table-responsive p-0">
                                  <table className="table table-hover text-nowrap">
                                    <thead>
                                      <tr>
                                       
                                        <th>Date</th>
                                        <th>No.of Days Requested</th>
                                        <th>HOD Respond</th>
                                        <th>ActingOfficer Respond</th>
                                        <th>Leave type</th>
                                       
                                      </tr>
                                    </thead>
                                    <tbody >

                                          {renderBody()}   
                                   
                                    </tbody>
                                  </table>
                                </div>
                                {/* /.card-body */}
                              </div>
                              {/* /.card */}
                            </div>
                          </div>

                        {/* /.post */}
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline">
                        {/* The timeline */}
                        <div className="timeline timeline-inverse">
                          <div className="card" style={{ color: " #070242" }}>
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
                            <form role="form" onSubmit={handleSubmit(onSubmit)}>
                              <div className="card-body">
                                <Row>
                                  <Col ms={6}>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        First name
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={user?.fName}
                                        name="fName"
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Designation
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={user?.eType}
                                      />
                                    </div>

                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Number of daye leave applied for
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Number of daye leave applied for"
                                        name="noOfDays"

                                        ref={register({
                                          required: true,
                                          pattern: /^[0-9\b]+$/,
                                          maxLength: 10
                                        })}
                                      />
                                      {errors.noOfDays && (
                                        <p style={{ color: "red" }}>
                                          Invalid number..!
                                        </p>)}
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Leave taken current year
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={new Date().getFullYear()}
                                        name="currentYear"
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Date of commencing leave
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        placeholder="Leave taken current year"
                                        name="fromDate"

                                        ref={register({ required: true })}

                                      ></input>
                                      {errors.fromDate && (
                                        <p style={{ color: "red" }}>
                                          Commencing leave date is required!
                                        </p>
                                      )}
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Date of resuming duties
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        placeholder="Leave taken current year"
                                        name="toDate"

                                        ref={register({
                                          required: true,
                                        })}
                                      ></input>
                                      {errors.toDate && (
                                        <p style={{ color: "red" }}>
                                          Resuming date is required!
                                        </p>
                                      )}
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Reasons of leave
                                      </label>
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Enter ..."
                                        name="reason"
                                        ref={register({
                                          required: true,
                                          minLength: 10,
                                        })}
                                      ></textarea>
                                      {errors.reason && (
                                        <p style={{ color: "red" }}>
                                          Reason is required!
                                        </p>
                                      )}
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Address when on leave{" "}
                                      </label>
                                      <textarea
                                        class="form-control"
                                        rows="3"
                                        value={user?.address}
                                        name="address"
                                        ref={register}
                                      ></textarea>
                                    </div>
                                  </Col>
                                  <Col ms={6}>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Last name
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={user?.lName}
                                        name="lName"
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Emp Code
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={user?.empid}
                                        name="empcode"
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Leave type
                                      </label>
                                      <select
                                        class="form-control"
                                        name="type"
                                        ref={register}
                                      >
                                        <option>Casual</option>
                                        <option>Medical</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col sm={4}>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Assining acting officer name
                                      </label>
                                      <select
                                        name="actingOfficer"
                                        ref={register}
                                      >
                                        <option>--Select Employee--</option>
                                        {employees.map((emp) => (
                                          <option
                                            key={emp?.id}
                                            value={emp?.fName + " " + emp?.lName}
                                          >
                                            {emp?.fName + " " + emp?.lName}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    {/* <div class="form-group">
                                                                            <label for="exampleInputEmail1">Supervier reconmmendation</label>
                                                                            <select class="form-control">
                                                                                <option>Reconmmended</option>
                                                                                <option>Not Reconmmended</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Head of department</label>
                                                                            <select class="form-control">
                                                                                <option>Reconmmended</option>
                                                                                <option>Not Reconmmended</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Leave clerk</label>
                                                                            <select class="form-control">
                                                                                <option>Reconmmended</option>
                                                                                <option>Not Reconmmended</option>
                                                                            </select>
                                                                        </div> */}
                                  </Col>
                                  <Col sm={4}>
                                    {/* <div class="form-group">
                                                                            <label for="exampleInputEmail1">Acting officer signature</label>
                                                                            <div class="custom-file">
                                                                                <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Supervier signature</label>
                                                                            <div class="custom-file">
                                                                                <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Head of department signature</label>
                                                                            <div class="custom-file">
                                                                                <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label for="exampleInputEmail1">Leave clerk signature</label>
                                                                            <div class="custom-file">
                                                                                <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                                            </div>
                                                                        </div> */}
                                  </Col>
                                  <Col sm={4}>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Request Date{" "}
                                      </label>
                                      <input
                                        type="date"
                                        class="form-control"
                                        placeholder="Leave taken current year"
                                        name="requestDate"
                                        ref={register({ required: true })}
                                      ></input>
                                      {errors.requestDate && (
                                        <p style={{ color: "red" }}>
                                          Request date is required!
                                        </p>
                                      )}
                                    </div>

                                  </Col>
                                </Row>
                              </div>
                              {/* /.card-body */}
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
  );
};
export default Profile;
