import React, {useEffect, useState} from 'react';

import {Box, Container, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from "axios";

export const InputTestFeild = () => {

    const [sId, setsId] = useState(0)
    const [sName, setsName] = useState("")
    const [sAddress, setsAddress] = useState("")
    const [sPhoneNum, setsPhoneNum] = useState("")
    const [sImage, setsImage] = useState("")
    const [currentNumber, setCurrentNumber] = useState(1);

const handelClick=async (e) => {
    e.preventDefault();
    const supplier = {sId, sName, sAddress, sPhoneNum, sImage}
    console.log(supplier)
    const formData = new FormData();
    formData.append("id", sId);
    formData.append("name", sName);
    formData.append("address", sAddress);
    formData.append("pNumber", sPhoneNum);
    formData.append("sPhoto", sImage);



    try {
        const response = await axios.post('http://localhost:8082/api/v1/supplier/save', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Supplier saved successfully:', response.data);
        console.log(setsImage(sImage));
        console.log(setsName(sName));

    } catch (error) {
        console.error('Error saving supplier:', error);

    }
};





        const generateId = () => {
            const formattedNumber = currentNumber.toString().padStart(3, '0');
            const newId = `${formattedNumber}`;
            setsId(newId);
            setCurrentNumber(currentNumber + 1);
        };


        useEffect(() => {
            generateId();
        }, []);

        return (
            <Container>
                <h1>ADD SUPPLIER</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <h2 style={{backgroundColor: "black", color: "white", textAlign: "center"}} id="supId"
                     >Supplier Id:{sId} </h2>

                </Box>
                <form>
                    <TextField
                        id="supName"
                        label="Name"
                        type="text"
                        variant="filled"
                        value={sName}
                        onChange={(e)=>setsName(e.target.value)}
                    /><TextField
                    id="supAddress"
                    label="Address"
                    type="text"
                    variant="filled"
                    value={sAddress}
                    onChange={(e)=>setsAddress(e.target.value)}
                /> <TextField
                    id="pNumber"
                    label="phoneNumber"
                    type="number"
                    variant="filled"
                    value={sPhoneNum}
                    onChange={(e)=>setsPhoneNum(e.target.value)}
                /><TextField  type="file"
                              value={sImage}
                              onChange={(e)=>setsImage(e.target.value)}
                > <CloudUploadIcon/>
                </TextField>

                    <br/>
                    <br/>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto',
                        }}

                    > <Button sx={{backgroundColor: "black",marginBottom:"10px"}} variant="contained" endIcon={<AddBoxIcon/>} onClick={handelClick}>
                        Save Supplier
                    </Button>
                    </Box>
                </form>
            </Container>
        );
    }

