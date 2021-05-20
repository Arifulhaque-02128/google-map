import React, {useState} from 'react';
import AmountSpent from './Cards/AmountSpent';
import BottomCards from './Cards/BottomCards';
import Charts from './Charts/Charts';
import SearchInput from './SearchInput.js/SearchInput';
import Table from './Table/Table';

const Dashboard = () => {

    const [channel, setChannel] = useState("facebook")

    const fbData = {
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        impressionData : [65, 59, 80, 81, 56, 55, 40],
        engagementData : [25, 49, 50, 91, 36, 65, 80]
    }

    const googleData = {
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        impressionData : [15, 49, 20, 71, 46, 51, 29],
        engagementData : [65, 41, 30, 21, 66, 75, 40]
    }

    return (
        <div>
            <AmountSpent channelName={[channel, setChannel]} />
            <Charts data={ channel==="facebook" ? fbData : googleData } />
            <BottomCards /> 
            {/* <Table /> */}
            <SearchInput />
        </div>
    );
};

export default Dashboard;