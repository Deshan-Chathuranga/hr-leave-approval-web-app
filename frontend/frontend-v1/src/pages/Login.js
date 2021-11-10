import React, { useContext, useEffect, useState, useRef } from 'react';
import { UserContext, LoginContext } from "../Store";
import { Form, Row, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory, Redirect } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import "./Login.css";
import ForgotPassword from '../components/ForgotPassword';
import AuthService from "../services/auth.service";
import { IoMdUmbrella } from 'react-icons/io';

function Login(props) {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const history = useHistory();
    // const userNameStatic = 'Nipun';
    // const passwordStatic = '12345678';

    // const handleOnChangeUsername = (e) => {
    //     e.preventDefault();
    //     setUsername(e.target.value);
    // }

    // const handleOnChangePassword = (e) => {
    //     e.preventDefault();
    //     setPassword(e.target.value);
    // }

    // const randomCodeGen = (length) => {
    //     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //     let code = '';
    //     for (let i = 0; i < length; i++) {
    //         code += letters.charAt(Math.floor(Math.random() * letters.length));
    //     }
    //     return code;
    // }

    // const Login = () => {
    //     if (username === userNameStatic && password === passwordStatic) {
    //         localStorage.setItem('token', randomCodeGen(32));
    //         history.push('/dashbord');
    //     }
    //     else {
    //         alert("user name or password incorrect!")
    //     }
    // }

    // const Signup =() =>{
    //     history.push('/signup')
    // }
    const Forgotpassword =() =>{
        history.push('/forgotpassword')
    }



    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        // form.current.validateAll(); 

        // if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                (data) => {
                    if(data.role === "EMPLOYEE"){
                        props.history.push("/dashbord");
                    window.location.reload();  
                    }
                    if(data.role==="HR_Manager"){
                        props.history.push("/leaveclerkdashbord");
                        window.location.reload();  
                    }
                    if(data.role==="HOD"){
                        props.history.push("/hoddashbord");
                        window.location.reload();  
                    }
                   
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false);
                    setMessage(resMessage);
                    alert("Please check your username and password again!");
                }
            );
        // } else {
        //     setLoading(false);
        // }
    };



    return (
        <Container fluid>
            <Row style={{ backgroundColor: 'red', minHeight: '100vh' }}>
                <Col md={8} className="bgleft-side">
                    <div className="bgleft-side-info">
                        <div className="uom-logo">
                            <img src="./img/abc-logo.jpg" />
                        </div>
                        <div className="leftside-text-content">
                            <div className="leftside-text">
                                <h2>Leave Approval System</h2>
                                <h5>Department of Human Resources of the ABC Company</h5>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col md={4} className="bgright-side">
                    <div className="right-loginform">
                        <div className="sign1-form">
                            <h2>Sign In</h2>
                            <Form onSubmit={handleLogin}>
                                <div className="input-group">
                                    <span></span>
                                    <input type="text" placeholder="Username" name="username"
                                        value={username}
                                        onChange={onChangeUsername} />
                                </div>
                                <div className="input-group">

                                    <input type="password" placeholder="Password" name="password"
                                        value={password}
                                        onChange={onChangePassword} />
                                </div>
                                <div className="form-row bottom">
                                    <div className="form-check">
                                        <input type="checkbox" id="remenber" name="remenber" value="remenber" />
                                        <label for="remenber">Remenber me?</label>
                                    </div>
                                    <a className="forgot" onClick={Forgotpassword} >Forgot password</a>
                                </div>
                                <button className="btn btn-primary btn-block" type="submit"  >Sign in</button>
                                {/* <div className="text-center">
                                    <span className="text1">Don't have an account?</span>
                                    <a className="text2" >Sign Up</a>
                                </div> */}
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;