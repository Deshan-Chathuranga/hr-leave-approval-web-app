import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Navbar, Form } from 'react-bootstrap';
import DashBordSideBar from '../pages/DashBordSideBar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import {getCurrentUser} from '../services/user_service'
import {axiosInstance} from '../services/service'

import './DashBord.css';
import { DashBordNavebar } from './DashBordNavebar';

function DashBord() {


    return (
        <div>
            <DashBordNavebar />
            <DashBordSideBar />
            <Profile/> 
        </div>
    )
}
export default DashBord;