import React from 'react';
import { DashBordNavebar } from '../components/DashBordNavebar';
import LeaveCsidebar from './LeaveCsidebar';
import EmployeeTable from './EmployeeTable';


function LeaveclerkDashbord  ()  {
    return (
        <div>
            <DashBordNavebar/>
            <LeaveCsidebar/>
            <EmployeeTable/>
        </div>
    )
}
export default LeaveclerkDashbord;