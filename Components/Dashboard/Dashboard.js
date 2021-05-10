import React from 'react';
import AmountSpent from './Cards/AmountSpent';
import BottomCards from './Cards/BottomCards';
import Charts from './Charts/Charts';
import Table from './Table/Table';

const Dashboard = () => {
    return (
        <div>
            <AmountSpent />
            <Charts />
            <BottomCards /> 
            <Table />
        </div>
    );
};

export default Dashboard;