import React from 'react';
import {Container} from "@mui/material";
import {InputTestFeild} from "../component/supplier/InputTestFeild.jsx";
import {SuplierDataFetchr} from "../component/supplier/TableSupplier.jsx";


export const Supplier = (props) => {

    return(
        <Container>

            <InputTestFeild/>

            <SuplierDataFetchr/>
        </Container>
    )

}



