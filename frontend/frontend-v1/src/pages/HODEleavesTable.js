import React from 'react'
import { DashBordNavebar } from '../components/DashBordNavebar';
import HODSidebar from './HODSidebar';
import ELeavesTable from './ELeavesTable';
import HODNavbar from '../components/HODNavbar';

 function HODEleavesTable() {
    return (
        <div>
            <HODNavbar/>
            <HODSidebar/>
            <ELeavesTable/>
        </div>
    )
}
export default HODEleavesTable;