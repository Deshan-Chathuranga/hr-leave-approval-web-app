import React, { useCallback, useEffect, useState } from "react";
import LeaveCsidebar from "../pages/LeaveCsidebar";
import leaveService from "../services/leaveService";
import { useHistory } from "react-router-dom";
import { DashBordNavebar } from "./DashBordNavebar";

const ShortHalfLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const getData = async () => {
    const response = await leaveService.getShorthalfleaves();
    setLeaves(response.data);
  };
  const [searchedLeaves, setSearchedLeaves] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchStr.length === 0) {
      setSearchedLeaves([]);
    } else {
      setSearchedLeaves(
        leaves.filter((e) => e.empid.startsWith(searchStr.trim()))
      );
    }
  }, [searchStr]);

  const renderBody = () => {
    return (
      leaves &&
      (searchedLeaves.length !== 0 ? searchedLeaves : leaves).map(
      (leaves) => {
        return (
          <tr key={leaves.id}>
            <td>{leaves.empid}</td>
            <td>{leaves.fName}</td>
            <td>{leaves.lName}</td>
            <td>{leaves.lType}</td>
            <td>{leaves.date}</td>
          </tr>
        );
      })
    );
  };

  const history = useHistory();

  return (
    <div>
      <div>
        <LeaveCsidebar />
        <DashBordNavebar/>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Short Leave and Half Day</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Short Leave and Half Day</li>
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
                <div className="col-md-12">
                  {/* Profile Image */}

                  {/* /.card */}
                  {/* About Me Box */}

                  {/* /.card */}
                </div>

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
                            Short Leave and Half Day Table
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
                                      Short Leave and Half Day
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
                                          onChange={(e)=> setSearchStr(e.target.value)}
                                        />
                                        <div className="input-group-append">
                                          <button
                                            type="submit"
                                            className="btn btn-default"
                                            //  onClick={getSingleEmp("1578")}
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
                                          <th>Leave type</th>
                                          <th>Date</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {/* <td>183</td>
                                                                                <td>John Doe</td>
                                                                                <td>Doe</td>
                                                                                <td>11-7-2014</td>
                                                                                <td><span className="tag tag-success">IT</span></td>
                                                                                <td>sampath98nipunperera@gmail.com</td>
                                                                                <button type="button" className="btn bg-info btn-sm" onClick={MoreInfor}>
                                                                                    More
                                                                                </button> */}

                                        {/*{renderBody()}*/}
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

export default ShortHalfLeaves;
