import React,{useState,useEffect} from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Chart.css';
import employeeService from '../services/employeeService';

export const Chart = () => {

    const[casual,setCasual]=useState(0);
    const[medical,setMedical]=useState(0);

    const getCasualValues = async () => {
        const response = await employeeService.getCasualValues();
        console.log(response)
        setCasual(response.data);
     
       
      };

      const getMedicalValues = async () => {
        const response = await employeeService.getMedicalValues();
        console.log(response)
        setMedical(response.data);
        
       
      };
    
      useEffect(() => {
        getCasualValues();
      }, [casual]);

      useEffect(() => {
        getMedicalValues();
      }, [medical]);
    return (

        <div>
            {/* solid sales graph */}
            <div className="card bg-gradient">
                <div className="card-header border-0">
                    <h3 className="card-title" style={{color:"#fff"}}>
                        <i className="fas fa-th mr-1" style={{color:"#fff"}}/>
                        Leaves
                    </h3>
                    <div className="card-tools">
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                            <i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    {/* <canvas className="chart" id="line-chart" style={{ minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%' }} /> */}
                    <Row>
                        <Col sm={6}>
                        <div className="leave-chart">
                            <input type="text" className="knob" value={casual} data-skin="tron" data-thickness="0.2" data-width={250} data-height={250} data-fgcolor="#3c8dbc" data-readonly="true" data-max="23" />
                            <div className="knob-label"><b>Casual</b></div>
                        </div>
                        </Col>
                        <Col sm={6}>
                        <div className="leave-chart">
                            <input type="text" className="knob" value={medical} data-skin="tron" data-thickness="0.2" data-width={250} data-height={250} data-fgcolor="#3c8dbc" data-readonly="true" data-max="22"/>
                            <div className="knob-label"><b>Medical</b></div>
                        </div>
                        </Col>
                    </Row>
                </div>
                {/* /.card-body */}

            </div>
        </div>

    )
}
export default Chart;