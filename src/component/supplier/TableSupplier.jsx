import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Component, useEffect, useState} from "react";
import axios from "axios";
import {Container} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox.js";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(id, name, address, pnumber, sphoto) {
    return { id, name, address, pnumber, sphoto};
}

const rows = [


];


 export function SuplierDataFetchr(){
    const [tableData,setTableData] =  useState(rows);

    useEffect(()=> {
            const getData = async () => {

                try {
                    const response = await axios.get('http://localhost:8082/api/v1/supplier/getAllSup');
                    const data = await response.data;
                    setTableData(data);
                    console.log(data)

                } catch (error) {
                    // Handle any errors during API call
                    console.error('Error fetching data:', error);
                    // Consider displaying an error message to the user
                }
            };
            getData()
        },




            [])




    return (

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Supplier Id</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right">Phone Number</StyledTableCell>
                        <StyledTableCell align="right">Image</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData && tableData.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}

                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.address}</StyledTableCell>
                            <StyledTableCell align="right">{row.pnumber}</StyledTableCell>
                            <StyledTableCell align="right">{row.sphoto}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}