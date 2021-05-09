import React from 'react';
import AmountSpent from './Cards/AmountSpent';
import BottomCards from './Cards/BottomCards';
import Charts from './Charts/Charts';

const Dashboard = () => {
    return (
        <div>
            <AmountSpent />
            <Charts />
            <BottomCards /> 
        </div>
    );
};

export default Dashboard;