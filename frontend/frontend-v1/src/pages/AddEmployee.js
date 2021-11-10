import React, { useEffect, useState } from "react";
import { DashBordNavebar } from "../components/DashBordNavebar";
import LeaveCsidebar from "./LeaveCsidebar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import EmployeeService from "../services/employeeService";
import employeeService from "../services/employeeService";

function AddEmployee(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    employeeService
      .createEmployee(data)
      .then((res) => {
        alert("Successfully Added!");
        window.location.reload();
      })
      .catch((error) => {
        alert("Try again!");
      });

    
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
                  <h1>Add Employee</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Dashbord</a>
                    </li>
                    <li className="breadcrumb-item active">Add Employee</li>
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
                            Add Employee Table
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
                                      Add Employee Form
                                    </h3>
                                    <div className="card-tools"></div>
                                  </div>
                                  {/* /.card-header */}

                                  {/* /.card-body */}
                                  <form
                                    role="form"
                                    onSubmit={handleSubmit(onSubmit)}
                                  >
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
                                              placeholder="First name"
                                              name="fName"
                                              ref={register({
                                                required: true,
                                                maxLength: 20,
                                                // pattern: /^[A-Za-z.]+$/i,
                                              })}
                                            />
                                            {errors.fName && (
                                              <p style={{ color: "red" }}>
                                               Please Check Your Input Agai!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              EMP ID
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="EMP_ID number"
                                              name="empid"
                                              ref={register({
                                                required:true,
                                                pattern:/^[0-9]+$/i ,
                                                 maxLength:5})}
                                            />{errors.empid && (
                                              <p style={{ color: "red" }}>
                                                Empid must contains digits
                                                 only.
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Username
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Username"
                                              name="username"
                                              ref={register({ required: true })}
                                            />
                                            {errors.username && (
                                              <p style={{ color: "red" }}>
                                                Username is required!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Designation
                                            </label>
                                            <select
                                              class="form-control"
                                              name="eType"
                                              ref={register({
                                                required:true
                                              })}
                                            >
                                              <option>None</option>
                                              <option>
                                                Technical Officer (Grade I)
                                              </option>
                                              <option>
                                                Technical Officer (Grade II)
                                              </option>
                                              <option>
                                                Technical Officer (Grade III)
                                              </option>
                                              <option>
                                                Management Assistant (Grade I)
                                              </option>
                                              <option>
                                                Management Assistan (Grade II)
                                              </option>
                                              <option>
                                                Management Assistant (Grade III)
                                              </option>
                                              <option>
                                                Lab Attendant (Supra Grade)
                                              </option>
                                              <option>
                                                Lab Attendant (Higher Grade)
                                              </option>
                                              <option>
                                                Lab Attendant (Lower Grade)
                                              </option>
                                              <option>
                                                Works Aid (Grade I)
                                              </option>
                                              <option>
                                                Works Aid (Grade II)
                                              </option>
                                              <option>
                                                Works Aid (Grade III)
                                              </option>
                                            </select>
                                            {errors.eType && (
                                              <p style={{ color: "red" }}>
                                                Designation is required!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Tel-Number
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="Telephone number"
                                              name="contactNo"
                                              ref={register({
                                                required: true,
                                                pattern: /^[0-9\b]+$/,
                                                maxLength: 10,
                                                minLength: 10,
                                              })}
                                            />
                                            {errors.contactNo && (
                                        <p style={{ color: "red" }}>
                                          Invalid number..!
                                        </p>
                                      )}
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
                                              placeholder="Last name"
                                              name="lName"
                                              ref={register({
                                                required: true,
                                                maxLength: 20,
                                                pattern: /^[A-Za-z]+$/i,
                                              })}
                                            />
                                            {errors.lName && (
                                              <p style={{ color: "red" }}>
                                                Name must contains alphabetic
                                                characters only.
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Address
                                            </label>
                                            <input
                                              type="text"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="Address"
                                              name="address"
                                              ref={register({
                                                required: true,
                                              })}
                                            />
                                             {errors.address && (
                                              <p style={{ color: "red" }}>
                                                Address is required!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Password
                                            </label>
                                            <input
                                              type="password"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="password"
                                              name="password"
                                              ref={register({
                                              required:true
                                              })}
                                            />
                                             {errors.password && (
                                              <p style={{ color: "red" }}>
                                                password is required!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Email
                                            </label>
                                            <input
                                              type="email"
                                              class="form-control"
                                              id="exampleInputEmail1"
                                              placeholder="Email address"
                                              name="email"
                                              ref={register({
                                                required: true,
                                                pattern: /^[A-Za-z0-9+_.-]+@(.+)$/i,
                                              })}
                                            />   {errors.email && (
                                              <p style={{ color: "red" }}>
                                                Please Check your email again!
                                              </p>
                                            )}
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleInputEmail1">
                                              Join Date{" "}
                                            </label>
                                            <input
                                              type="date"
                                              class="form-control"
                                              placeholder="Join date"
                                              name="joinDate"
                                              ref={register}
                                            ></input>
                                            
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
                                        Add
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
export default AddEmployee;
