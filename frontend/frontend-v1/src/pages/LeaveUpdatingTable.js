import React, { useEffect, useState } from "react";
import LeaveCsidebar from "./LeaveCsidebar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { DashBordNavebar } from "../components/DashBordNavebar";
import employeeService from "../services/employeeService";
import leaveService from "../services/leaveService";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

function LeaveUpdatingTable() {
  const [employees, setEmployees] = useState([]);
  const [empName,setEmpName]=useState("");
  const [empId,setEmpId] = useState("");

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const getEmpId = async () => {
    try {
      const res = await employeeService.getEmployeeId(empName);
      setEmpId(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getEmpId();
  },[empName])

  
  const onEmpNameChange= (e) => {
    console.log(e.target.value);
    setEmpName(e.target.value);
  };



  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    leaveService
      .addELeaves(data)
      .then((res) => {
        alert("Successfully Added!");
        history.push('/leaveclerkdashbord')
      })
      .catch((error) => {
        alert("Try again!");
      });

    
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await employeeService.getEmployees();
    setEmployees(response.data);
  };
  return (
    <div>
      <DashBordNavebar />
      <LeaveCsidebar />
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Update Leaves</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Dashbord</a>
                    </li>
                    <li className="breadcrumb-item active">Update Leaves</li>
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
                            Leave Updating Form
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
                                      Leave Updating Form
                                    </h3>
                                    <div className="card-tools"></div>
                                  </div>
                                  {/* /.card-header */}

                                  {/* /.card-body */}
                                  <form role="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-body">
                                      <Row>
                                        <Col ms={6}>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Full name
                                            </label>
                                            <select
                                         className="form-control"
                                         name="fullName"
                                         
                                         ref={register}
                                         onChange={onEmpNameChange}
                                        
                                      >
                                        <option>--Select Employee--</option>
                                        {employees.map((emp) => (
                                          <option
                                            key={emp.id}
                                            value={emp.fName + " " + emp.lName}
                                          >
                                            {emp.fName + " " + emp.lName}
                                          </option>
                                        ))}
                                      </select>
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              EMP ID
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="EMP ID"
                                              name="empid"
                                              value={empId}
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                         
                                              })}
                                            />
                                            {errors.empid && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Short Leaves
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Short Leaves"
                                              name="shortLeaves"
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                               
                                              })}
                                            />
                                            {errors.shortLeaves && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Half Day Leaves
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Half Day Leaves"
                                              name="halfDays"
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                               
                                              })}
                                            />
                                            {errors.halfDays && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                        </Col>
                                        <Col ms={6}>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Medical Leaves
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="Medical Leaves"
                                              name="medical"
                                              ref={register}
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                          
                                              })}
                                            />
                                            {errors.medical && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Casual Leaves
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Casual Leaves"
                                              name="casual"
                                              ref={register}
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                              
                                              })}
                                            />
                                            {errors.casual && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Available Leaves
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              placeholder="Available Leaves"
                                              name="availableLeaves"
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                             
                                              })}
                                            />
                                            {errors.availableLeaves && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Updating Date
                                            </label>
                                            <input
                                              type="date"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="Date"
                                              name="updatingDate"
                                              ref={register}
                                              //   ref={register({
                                              //     required: true,
                                              //     pattern: /^[0-9\b]+$/,
                                              //   })}
                                            />
                                            {/* {errors.contactNo && (
                                              <p style={{ color: "red" }}>
                                                Invalid number..!
                                              </p>
                                            )} */}
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
          <strong>ABC Pvt Ltd Leave Approval System</strong>
        </footer>
      </div>
    </div>
  );
}

export default LeaveUpdatingTable;
