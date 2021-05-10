import React from 'react';
import styles from '../dashboard.module.css';
import {FiArrowDownRight} from 'react-icons/fi';

const BottomCards = () => {
    return (
        <div className={styles.bottomCards}>
            
            <div className={styles.card} >
                <h3>CTR(Click Through Rate)</h3>
                <p>Total Amount Spent</p>
                <h2 style={{color: "#0275d8"}}>$9.72</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.bottomInfo}> -08% 
                        <span className={styles.arrowIcon}> <FiArrowDownRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px", fontSize: "15px"}}> than previous period</span>
                </div>
            </div>

            <div className={styles.card}>
                <h3>CPC(Cost Per Click)</h3>
                <h2 style={{color: "#0275d8"}}>$1.23</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.bottomInfo}> -08% 
                        <span className={styles.arrowIcon}> <FiArrowDownRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px", fontSize: "15px"}}> than previous period</span>
                </div>
            </div>

            <div className={styles.card}>
                <h3>Total Clicks</h3>
                <h2 style={{color: "#0275d8"}}>1082</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.bottomInfo}> -08% 
                        <span className={styles.arrowIcon}> <FiArrowDownRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px", fontSize: "15px"}}> than previous period</span>
                </div>
            </div>
        </div>
    );
};

export default BottomCards;