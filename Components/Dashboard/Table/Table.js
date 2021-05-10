import React, { useState }from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import styles from './Table.module.scss';


function createData(campaign_name, placement, cost, impressions, engagements, ctr, cpc, total_clicks) {
  return {campaign_name, placement, cost, impressions, engagements, ctr, cpc, total_clicks };
}

const rows = [
    createData('April Campaign 1', 'Facebook' , 13.34, 41232, 1231, 2.32, 1.34, 543),
    createData('', 'Google' , 13.35, 41232, 1231, 2.32, 1.34, 543),
    createData('April Campaign 2', 'Facebook' , 13.36, 41232, 1231, 2.32, 1.34, 543),
    createData('', 'Google' , 13.37, 41232, 1231, 2.32, 1.34, 543),

];

let index=0;
export default function BasicTable() {

  const [searchParam, setSearchParam] = useState('');

  return (
    <div >
      <br /> <br /> <br />
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3 style={{paddingBottom:'20px'}}> All Campaign Data</h3> 
        <div className={styles.search} style={{margin:'0'}}>
            <div className={styles.searchInput}>
              <input
                type='text'
                value={searchParam}
                placeholder='Search Campaigns'
                onChange={(e) => setSearchParam(e.target.value)}
              />
              <div className={styles.searchIcon}>
                <SearchIcon />
              </div>
            </div>
        </div>
      </div>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead >
                <TableRow >
                    <TableCell className={styles.table_style}>Campaign Name</TableCell>
                    <TableCell className={styles.table_style} align="right">Placement</TableCell>
                    <TableCell className={styles.table_style} align="right">Cost</TableCell>
                    <TableCell className={styles.table_style} align="right">Impressions</TableCell>
                    <TableCell className={styles.table_style} align="right">Engagements</TableCell>
                    <TableCell className={styles.table_style} align="right">CTR</TableCell>
                    <TableCell className={styles.table_style} align="right">CPC</TableCell>
                    <TableCell className={styles.table_style} align="right">Total Clicks</TableCell>
                </TableRow>
                </TableHead>
                <TableBody >           
                {rows.map((row,index) => (
                    <TableRow  key={row.cost}  >
                    <TableCell component="th" scope="row" className={styles.table_style} >
                        {row.campaign_name}
                    </TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.placement} </TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }}align="right">{row.cost}</TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.impressions}</TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.engagements}</TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.ctr}</TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.cpc}</TableCell>
                    <TableCell style ={ index % 2? { color : "red" }:{ color : "blue" }} align="right">{row.total_clicks}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}