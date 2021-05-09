import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import styles from '../styles/Dashboard.module.css';

const dashboard = () => {
    return (
        <div className={styles.container}>
            <h2>Dashboard</h2>
            <p>Click channel below to view in chart</p>
            <Dashboard />
        </div>
    );
};

export default dashboard;