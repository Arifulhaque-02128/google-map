import React from 'react';
import styles from '../dashboard.module.css';
import {Line} from 'react-chartjs-2';

const LineGraph = () => {


    const dataForGraph = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: "data",
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
            fill: 'origin',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ],
      };

    // const optionForGraph = {
    //     scales : {
    //         xAxes : [
    //             {
    //                 ticks : {
    //                     // display: false
    //                     fontSize: 10,
    //                     fontFamily: 'Gotham-Medium',
    //                     maxRotation: 0.00001,
    //                     padding: 8,
    //                     labelOffset: 30,
    //                     // callback(value, index) {
    //                     //     if (index % 2 == 0) return '';
    //                     //     return value;
    //                     // },
    //                 },
    //                 gridLines : {
    //                     display: false,
    //                     // borderDash: [1, 2],
    //                     // lineWidth : 1
    //                 }
    //             }
    //         ],
    //         yAxes : [
    //             {
    //                 ticks : {
    //                     min : 0,
    //                     max : 100,
    //                     stepSize: 10,
    //                     // callback: function (value) {
    //                     //     return `${value}`;
    //                     // },
    //                 },
    //                 gridLines : {
    //                     display: false
    //                 }
    //             }
    //         ]
            
    //     }
    // }
    // const options = {
    //     elements: {
    //         arc: {
    //             borderWidth: 1
    //         }
    //     },
    //     scales: {
    //         xAxes: [{
    //             ticks : {
    //                 // display: false
    //                 fontSize: 10,
    //                 fontFamily: 'Gotham-Medium',
    //                 maxRotation: 0.00001,
    //                 padding: 5,
    //                 labelOffset: 30,
    //                 // callback(value, index) {
    //                 //     if (index % 2 == 0) return '';
    //                 //     return value;
    //                 // },
    //             },
    //             gridLines: {
    //                 color: "rgba(0, 0, 0, 0)",
    //             }
    //         }],
    //         yAxes: [{
    //             gridLines: {
    //                 color: "rgba(0, 0, 0, 0)",
    //             }   
    //         }]
    //     }
    // }
    return (
        <div className={styles.lineGraph}>
            <Line data={dataForGraph} options={{title: {display: true, text: "hello, chart"}}} />
        </div>
    );
};

export default LineGraph;