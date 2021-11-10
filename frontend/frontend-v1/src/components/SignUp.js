import React from 'react';
import { Form, Row,Container, Col} from 'react-bootstrap';
import "./SignUp.css";

export const SignUp = () => {
    return (
        <div>
            <Container fluid>
            <Row style={{ backgroundColor: 'red', minHeight: '100vh' }}>
                <Col md={8} className="bgleft-side">
                    <div className="bgleft-side-info">
                        <div className="ABC-logo">
                            <img src="./img/abc-logo.jpg" />
                        </div>
                        <div className="leftside-text-content">
                            <div className="leftside-text">
                                <h2>Leave Approval System</h2>
                                <h5>Information Technology University of Moratuwa</h5>
                            </div>
                        </div>

                    </div>
                </Col>
                <Col md={4} className="bgright-side">
                    <div className="right-loginform">
                        <div className="sign1-form">
                            <h2>Sign Up</h2>
                            <Form>
                                <div className="input-group">
                                    <span><i className="fas fa-user" aria-hidden="true" /></span>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-group">
                                    <span><i className="fas fa-user" aria-hidden="true" /></span>
                                    <input type="password" placeholder="Password"  />
                                </div>
                                <div className="input-group">
                                    <span><i className="fas fa-user" aria-hidden="true" /></span>
                                    <input type="password" placeholder="Confirm Password"  />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit" >Register</button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default SignUp;