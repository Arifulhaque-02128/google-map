import React from 'react';
import styles from '../dashboard.module.css';
import {FiArrowDownRight} from 'react-icons/fi';

const AmountSpent = ({channelName}) => {

    const [channel, setChannel] = channelName

    return (
        <div className={styles.cards}>
            <div className={ channel === "facebook" ? styles.activeCard : styles.cardStyle } onClick={() => setChannel("facebook")} >
                <h3>Facebook</h3>
                <p>Total Amount Spent</p>
                <h2 style={{color: "#0275d8"}}>$221.23</h2>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                    <div className={styles.bottomInfo}> -08% 
                        <span className={styles.arrowIcon}> <FiArrowDownRight size={20} color={"white"} /> </span> 
                    </div>
                    <span style={{marginLeft: "4px", fontSize: "15px"}}> than previous period</span>
                </div>
            </div>
            <div className={ channel === "google" ? styles.activeCard : styles.cardStyle } onClick={() => setChannel("google")}>
                <h3>Google</h3>
                <p>Total Amount Spent</p>
                <h2 style={{color: "#0275d8"}}>$1221.23</h2>
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

export default AmountSpent;