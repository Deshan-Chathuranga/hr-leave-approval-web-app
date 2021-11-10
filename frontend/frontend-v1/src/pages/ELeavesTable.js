import React, { useEffect, useState } from "react";
import { DashBordNavebar } from "../components/DashBordNavebar";
import employeeService from "../services/employeeService";
import leaveService from "../services/leaveService";
import LeaveCsidebar from "./LeaveCsidebar";

function ELeavesTable() {
  var d = new Date();
  var n = d.getMonth();
  const [monthleaves, setMonthLeaves] = useState([]);
  const [monthIndex, setMonthIndex] = useState(n);


  const getMonthlyLeaves = async () => {
    try {
      const res = await leaveService.getMonthlyValues(monthIndex);
      setMonthLeaves(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  const [leaves, setLeaves] = useState([]);
  const [searchedLeaves, setSearchedLeaves] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    getMonthlyLeaves();
  }, [monthIndex]);



  useEffect(() => {
    if (searchStr.length === 0) {
      setSearchedLeaves([]);
    } else {
      setSearchedLeaves(
        monthleaves.filter((e) => e.empid.startsWith(searchStr.trim()))
      );
    }
  }, [searchStr]);

  const onMonthChange = (e) => {
    console.log(e.target.value);
    setMonthIndex(e.target.value);
  };


  //    const  selectedMonth = () => {

  //     }

  //  isTrue ? useCallback():callthis();
  const renderBody = () => {
    return (
      monthleaves &&
      (searchedLeaves.length !== 0 ? searchedLeaves : monthleaves).map(
        (monthLeave) => {
          return (
            <tr key={monthLeave.id}>
              <td>{monthLeave.empid}</td>
              <td>{monthLeave.fullName}</td>
              <td>{monthLeave.shortLeaves}</td>
              <td>{monthLeave.halfDays}</td>
              <td>{monthLeave.medical}</td>
              <td>{monthLeave.casual}</td>
              <td>{monthLeave.availableLeaves}</td>
              {/* <td className="opration">
                  <button
                    type="button"
                    className="btn bg-info btn-sm"
                    onClick={()=> HODEmorinfor(emp.empid)}
                  >
                    More
                  </button>
                </td> */}
            </tr>
          );
        }
      )
    );
  };

  // const renderBodyTableAnnual = () => {
  //     return emp && emp.map(emp => {
  //         return (
  //             <tr key={emp.id}>
  //                 <td>{emp.empid}</td>
  //                 <td>{emp.fName+" "+emp.lName}</td>
  //                 <td>{emp.eType}</td>
  //                 <td>{0}</td>
  //                 <td>{0}</td>
  //                 <td>{0}</td>
  //                 <td>{45}</td>

  //             </tr>
  //         )
  //     })
  // }

  return (
    <div>
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Employee Leaves Table</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Dashbord</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Employee Leaves table
                    </li>
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
                  <div className="card">
                    <div className="card-header p-2">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#activity"
                            data-toggle="tab"
                          >
                            Monthly Leaves
                          </a>
                        </li>
                        {/* <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Anual Leaves</a></li>*/}
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
                                      Employee Monthly Leaves Table
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
                                          onChange={(e) =>
                                            setSearchStr(e.target.value)
                                          }
                                        />
                                        <div className="input-group-append">
                                          <button
                                            type="submit"
                                            className="btn btn-default"
                                          >
                                            <i
                                              className="fas fa-search"
                                              style={{ color: "#fff" }}
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="card-tools">
                                      <div
                                        className="input-group1 input-group-sm"
                                        style={{
                                          width: 150,
                                          marginLeft: "2000px",
                                        }}
                                      >
                                        <select
                                          class="form-control"
                                          value={monthIndex}
                                          onChange={onMonthChange}
                                        >
                                          <option value={0}>jan</option>
                                          <option value={1}>Feb</option>
                                          <option value={2}>March</option>
                                          <option value={3}>April</option>
                                          <option value={4}>May</option>
                                          <option value={5}>June</option>
                                          <option value={6}>Julay</option>
                                          <option value={7}>Aug</option>
                                          <option value={8}>Sept</option>
                                          <option value={9}>Octom</option>
                                          <option value={10}>Nov</option>
                                          <option value={11}>Dec</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  {/* /.card-header */}
                                  <div className="card-body table-responsive p-0">
                                    <table className="table table-hover text-nowrap">
                                      <thead>
                                        <tr>
                                          <th>EID</th>
                                          <th>Full Name</th>
                                          <th>Short Leaves</th>
                                          <th>Half Day Leaves</th>
                                          <th>Medical Leaves</th>
                                          <th>Casual Leaves</th>
                                          <th>Available Leaves</th>
                                        </tr>
                                      </thead>
                                      <tbody>{renderBody()}</tbody>
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
                                  Anual Leaves Table
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
                                <div className="card-tools">
                                  <div
                                    className="input-group1 input-group-sm"
                                    style={{ width: 150, marginLeft: "2000px" }}
                                  >
                                    <select class="form-control">
                                      <option>2021</option>
                                      <option>2022</option>
                                      <option>2023</option>
                                      <option>2024</option>
                                      <option>2025</option>
                                      <option>2026</option>
                                      <option>2027</option>
                                      <option>2028</option>
                                      <option>2029</option>
                                      <option>2030</option>
                                      <option>2031</option>
                                      <option>2032</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              {/* /.card-header */}
                              <div className="card-body table-responsive p-0">
                                <table className="table table-hover text-nowrap">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>User</th>
                                      <th>Designation</th>

                                      <th>Medical</th>
                                      <th>Cesual</th>
                                      <th>Available Leaves</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* {renderBodyTableAnnual()} */}
                                  </tbody>
                                </table>
                              </div>
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
}
export default ELeavesTable;
