import React from 'react';
import "./Home.css";

export const Home = () => {
    return (
        <div className="H-Home">
            <div className="logo">
               <img src="./img/abc-logo.jpg"/>
            </div>
            <div className="H-content">
                <div className="H-inner">
                    <h1> leave approval system</h1>
                    <p>Department of Human Resources of the ABC Company</p>
                </div>
            </div>
            <div className="H-footer">
                <p>ABC Company</p>
            </div>
        </div>
    )
}
export default Home;