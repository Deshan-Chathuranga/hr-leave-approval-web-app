import React from "react";
import LeaveCsidebar from "./LeaveCsidebar";
import { DashBordNavebar } from "../components/DashBordNavebar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Chart from "./Chart";
import "./EmorInfor.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import employeeService from "../services/employeeService";
import { useForm } from "react-hook-form";
import leaveService from "../services/leaveService";

function EmoreInfor() {
  const { empid } = useParams();
  const [emp, setEmp] = useState();
  const [casual, setCasual] = useState(0);
  const [medical, setMedical] = useState(0);
 

  const getEmpDetails = async () => {
    const emp = await employeeService.getEmployeeByEmpId(empid);
    setEmp(emp.data);
  };

  const getCasualValues = async () => {
    const response = await employeeService.getEmployeeCasualValues(empid);
    console.log(response);
    setCasual(response.data);
  };

  const getMedicalValues = async () => {
    const response = await employeeService.getEmployeeMedicalValues(empid);
    console.log(response);
    setMedical(response.data);
  
  };

  

  useEffect(() => {
    getEmpDetails();
  }, []);

  useEffect(() => {
    getCasualValues();
  }, []);

  useEffect(() => {
    getMedicalValues();
  }, []);

 


 

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    leaveService
      .addshorthalfleave(data)
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert("Try again!");
      });

    
  };
  
  return (
    <div>
      <DashBordNavebar />
      <LeaveCsidebar />
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Employee More Information</h1>
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
                      {emp?.fName+' '+emp?.lName}
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
                      <p className="text-muted"> {emp?.fName+' '+emp?.lName}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" /> EMP ID
                      </strong>
                      <p className="text-muted">{emp?.empid}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        Department
                      </strong>
                      <p className="text-muted">IT Department</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        E-Type
                      </strong>
                      <p className="text-muted">{emp?.eType}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        Tel-Number
                      </strong>
                      <p className="text-muted">{emp?.contactNo}</p>
                      <hr />
                      <strong>
                        <i className="fas fa-pencil-alt mr-1" />
                        E-mail
                      </strong>
                      <p className="text-muted">
                        {emp?.email}
                      </p>
                      <hr />
                      <strong>
                        <i className="fas fa-map-marker-alt mr-1" /> Location
                      </strong>
                      <p className="text-muted">
                        {emp?.address}
                      </p>
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
                      {/*<li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Leave Form</a></li>*/}
                      {/*<li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Edite Profile</a></li>*/}
                    </ul>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="activity">
                        {/* Post */}
                        {/* BAR CHART */}

                        <div>
                          {/* solid sales graph */}
                          <div className="card bg-gradient">
                            <div className="card-header border-0">
                              <h3
                                className="card-title"
                                style={{ color: "#fff" }}
                              >
                                <i
                                  className="fas fa-th mr-1"
                                  style={{ color: "#fff" }}
                                />
                                Leaves
                              </h3>
                              <div className="card-tools">
                                <button
                                  type="button"
                                  className="btn bg-info btn-sm"
                                  data-card-widget="collapse"
                                >
                                  <i className="fas fa-minus" />
                                </button>
                                <button
                                  type="button"
                                  className="btn bg-info btn-sm"
                                  data-card-widget="remove"
                                >
                                  <i className="fas fa-times" />
                                </button>
                              </div>
                            </div>
                            <div className="card-body">
                              {/* <canvas className="chart" id="line-chart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} /> */}
                              <Row>
                                <Col sm={6}>
                                  <div className="leave-chart">
                                    <input
                                      type="text"
                                      className="knob"
                                      value={casual}
                                      data-skin="tron"
                                      data-thickness="0.2"
                                      data-width={250}
                                      data-height={250}
                                      data-fgcolor="#3c8dbc"
                                      data-readonly="true"
                                      data-max="23"
                                      
                                    />
                                    <div className="knob-label">
                                      <b>Casual</b>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={6}>
                                  <div className="leave-chart">
                                    <input
                                      type="text"
                                      className="knob"
                                      value={medical}
                                      data-skin="tron"
                                      data-thickness="0.2"
                                      data-width={250}
                                      data-height={250}
                                      data-fgcolor="#3c8dbc"
                                      data-readonly="true"
                                      data-max="22"
                                    />
                                    <div className="knob-label">
                                      <b>Medical</b>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            {/* /.card-body */}
                          </div>
                        </div>

                        

                        {/* /.post */}
                        {/* Post */}
                        <div className="post clearfix">
                          <div className="timeline timeline-inverse">
                            <div className="card" style={{ color: " #070242" }}>
                              <div className="card-header">
                                <h3
                                  className="card-title"
                                  style={{ color: "#fff" }}
                                >
                                 Short Leaves and Half Day Updating Form
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
                                         
                                          value={emp?.fName}
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
                                          value={emp?.eType}
                                          name="eType"
                                          ref={register}
                                        />
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">
                                          Leave type
                                        </label>
                                        <select class="form-control" name="lType" ref={register}>
                                          <option>--Select Type--</option>
                                          <option>Short Leave</option>
                                          <option>Half Day</option>
                                          <option>Nopay Leaves</option>
                                        </select>
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">
                                          Date{" "}
                                        </label>
                                        <input
                                          type="date"
                                          class="form-control"
                                          placeholder="Leave taken current year"
                                          name="date"
                                          ref={register({required:true})}

                                        ></input>
                                        {errors.date && (
                                        <p style={{ color: "red" }}>
                                          Enter Date Correctly!
                                        </p>)}
                                      </div>
                                    </Col>
                                    <Col ms={6}>
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">
                                          Last Name
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          value={emp?.lName}
                                          name="lName"
                                          ref={register}
                                        />
                                      </div>
                                      <div class="form-group">
                                        <label for="exampleInputEmail1">
                                          EID
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          value={emp?.empid}
                                          name="empid"
                                          ref={register}
                                        />
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
                                    Update
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        {/* /.post */}
                        {/* Post */}
                        <div className="card bg-gradient"></div>
                        {/* Calendar */}

                        {/* /.post */}
                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="timeline"></div>
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
}
export default EmoreInfor;
