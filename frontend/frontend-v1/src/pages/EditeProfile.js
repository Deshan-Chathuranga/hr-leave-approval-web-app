import React from "react";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { DashBordNavebar } from "../components/DashBordNavebar";
import DashBordSideBar from "./DashBordSideBar";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../services/service";
import { useEffect, useState } from "react";
import employeeService from "../services/employeeService";
import { useHistory } from "react-router";

export const EditeProfile = () => {
  const [user, setUser] = useState();
  const history = useHistory()
  useEffect(() => {
    axiosInstance.get("http://localhost:8080" + "/user/me").then((response) => {
      setUser(response.data);
    });
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    employeeService
      .updateEmployee(data, user?.id)
      .then((res) => {
        alert("Your profile details are successfully updated!");
        history.push('./login')
      })
      .catch((error) => {
        alert("Try again!");
      });
  };

  return (
    <div>
      <div>
        <DashBordNavebar />
        <DashBordSideBar />
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Edit Profile</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Edit Profile</li>
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
                          Designation
                        </strong>
                        <p className="text-muted">{user?.eType}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="card">
                    <div className="card-header p-2">
                      <ul className="nav nav-pills">
                        <h4 style={{ color: "#fff" }}>Edit Profile</h4>
                      </ul>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="active tab-pane" id="activity">
                          {/* Post */}
                          <div className="post">
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
                                        placeholder="First name"
                                        name="fName"
                                        value={user?.fName}
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Username
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Username"
                                        name="username"
                                        value={user?.username}
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Email"
                                        name="email"
                                        ref={register({
                                          required: true,
                                          pattern: /^[a-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)$/,
                                        })}
                                      />
                                      {errors.email && (
                                        <p style={{ color: "red" }}>
                                          Invalid Email..!
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Contact No
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Contact No"
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
                                        value={user?.lName}
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Password"
                                        name="password"
                                        ref={register}
                                      />
                                    </div>
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Location
                                      </label>
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Location"
                                        name="address"
                                        ref={register}
                                      />
                                    </div>

                                    {/* <div class="form-group">
                                      <label for="exampleInputEmail1">
                                        Password
                                      </label>
                                      <input
                                        type="password"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Password"
                                        name="password"
                                        ref={register}
                                      />
                                    </div> */}
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
    </div>
  );
};
