import React from 'react';
import { DashBordNavebar } from '../components/DashBordNavebar';
import LeaveCsidebar from './LeaveCsidebar';
import ELeavesTable from './ELeavesTable';

 function ClerkELeavTable() {
    return (
        <div>
            <DashBordNavebar/>
            <LeaveCsidebar/>
            <ELeavesTable/>
        </div>
    )
}
export default ClerkELeavTable;