import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HODSidebar from "./HODSidebar";
import { DashBordNavebar } from "../components/DashBordNavebar";
import HODNavbar from "../components/HODNavbar";

import { axiosInstance } from "../services/service";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import user_service from "../services/user_service";
import { useHistory } from "react-router";

function HODEditeprofile() {
  const history = useHistory();

  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance.get("http://localhost:8080" + "/user/me").then((response) => {
      setUser(response.data);
    });
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = (data1) => {
    console.log(JSON.stringify(data1));

    user_service
      .updateUser(data1, user?.id)
      .then((res) => {
        alert("Your profile details are successfully updated!");
        window.location.reload();

      })
      .catch((error) => {
        alert("Try again!");
      });
  };

  return (
    <div>
      <div>
        <HODNavbar />
        <HODSidebar />
        <div className="content-wrapper">
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
          </section>

          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <div className="card card-primary card-outline">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src="/img/man.png"
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                        Head of Department
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
                          <i className="fas fa-envelope-square" /> Email
                        </strong>
                        <p className="text-muted">{user?.email}</p>

                        <hr />
                        <strong>
                          <i className="fas fa-phone-square-alt" />
                          Contact No
                        </strong>
                        <p className="text-muted">{user?.contactNo}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>

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
                            My Profile
                          </a>
                        </li>
                        {/*<li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Leave Form</a></li>*/}
                        {/*<li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Edite Profile</a></li>*/}
                      </ul>
                    </div>

                    <div className="card-body">
                      <div className="tab-content">
                        <div className="active tab-pane" id="activity">
                          <div className="post">
                            <div className="card">
                              <div className="card-header p-2">
                                <ul className="nav nav-pills">
                                  <h4 style={{ color: "#fff" }}>
                                    Edit Profile
                                  </h4>
                                </ul>
                              </div>

                              <div className="card-body">
                                <div className="tab-content">
                                  <div
                                    className="active tab-pane"
                                    id="activity"
                                  >
                                    <div className="post">
                                      <form
                                        role="form"
                                        onSubmit={handleSubmit(onSubmitForm)}
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
                                                  placeholder="First Name"
                                                  value={user?.fName}
                                                  name="fName"
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
                                             
                                              {/* <div class="form-group">
                                                                                                <label for="exampleInputEmail1">Department</label>
                                                                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Designation" />
                                                                                            </div> */}
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
                                                  value={user?.lName}
                                                  name="lName"
                                                  ref={register}
                                                />
                                              </div>
                                              <div class="form-group">
                                                <label for="exampleInputEmail1">
                                                  E-mail
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

                                    <div className="post clearfix"></div>
                                  </div>

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
export default HODEditeprofile;
