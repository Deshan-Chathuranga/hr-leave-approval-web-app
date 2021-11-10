import { getRoles } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { Form, Row,Container, Col, Navbar} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import user_service from '../services/user_service';
import { getRole } from '../util/web_storage';





export const ForgotPassword = () => {

    const { register, handleSubmit , errors } = useForm();
    const history = useHistory();
    const[etype,setEtype]=useState();
   

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

     if(etype==="Employee"){
        user_service
        .forgotPassword(data)
        .then((res) => {
          alert("Password Successfully Updated!");
          history.push('/login')
  
        })
        .catch((error) => {
          alert("Please input valid Username!");
        });
     }
       
   else if(etype==="HOD"){
        user_service
        .forgotPasswordHOD(data)
        .then((res) => {
          alert("Password Successfully Updated!");
          history.push('/login')
  
        })
        .catch((error) => {
          alert("Please input valid employee Id!");
        });
    }
   else{
    user_service
    .forgotPasswordLeaveClark(data)
    .then((res) => {
      alert("Password Successfully Updated!");
      history.push('/login')

    })
    .catch((error) => {
      alert("Please input valid employee Id!");
    });
   }
   
    

    
  };

  const onItemNoChange= (e) => {
    console.log(e.target.value);
    setEtype(e.target.value);
  };


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
                            <h2>Forget Password</h2>
                            <div className="input-group">
                                {/* <span><i className="fas fa-id-card-alt" aria-hidden="true" /></span> */}
                                <select
                                        class="form-control"
                                        name="type"
                                        onChange={onItemNoChange}
                                      >
                                        <option>--Select Type--</option>
                                        <option>Employee</option>
                                        <option>HOD</option>
                                        <option>Leave Clarke</option>
                                      </select>
                                </div>

                                
                            <Form onSubmit={handleSubmit(onSubmit)}>
                              
                                
                            <div className="input-group">
                                    <span><i className="fas fa-id-card-alt" aria-hidden="true" /></span>
                                    <input type="text" placeholder="Username" name="username" ref={register({required:true})}/>
                                </div>
                                <div className="input-group">
                                    <span><i className="fas fa-key" aria-hidden="true" /></span>
                                    <input type="password" placeholder="New Password" name="password" ref={register} />
                                </div>
                                <button className="btn btn-primary btn-block" type="submit" >Update Password</button>
                                
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default ForgotPassword;