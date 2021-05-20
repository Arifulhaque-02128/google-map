import React from 'react';
import styles from '../dashboard.module.css';
import {FiArrowUpRight} from 'react-icons/fi';
import LineGraph from './LineGraph';

const Charts = ({data}) => {

    return (
        <div className={styles.chartContainer}>
            <div>
                <h4 style={{marginTop: "30px"}}>Impression</h4>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.impressionInfo}> +50% 
                        <span className={styles.arrowUpward}> <FiArrowUpRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px"}}> than previous period</span>
                </div>
                <br />
                <LineGraph labels={data.labels}
                    data={data.impressionData} 
                />
            </div>
            <div >
                <h4 style={{marginTop: "30px"}}>Engagement</h4>
                <div style={{display: "flex", justifyContent: "left", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.impressionInfo}> +50% 
                        <span className={styles.arrowUpward}> <FiArrowUpRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px"}}> than previous period</span>
                </div>
                <br />
                <LineGraph labels={data.labels}
                    data={data.engagementData} 
                />
            </div>
        </div>
    );
};

export default Charts;