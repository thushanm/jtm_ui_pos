import React from 'react';
import {Button, Container} from "@mui/material";
import {ListNav} from "./ListNav.jsx";
import {useNavigate} from "react-router-dom";


export const FristPage = (props) => {
    const navigate = useNavigate();
const log = () =>{
  const navUrl = '/'
    window.close()
    navigate(navUrl)
}
    return(<Container >

        <nav >

            <img src="src/assets/1.png" alt="LOGO" style={{width:'10%'}}/>

        </nav>

        <img src="src/assets/699c12add537ebe553d4801186b587b4.gif" alt="welcomeGIf" style={{width:'80%'}}/>

        <Button onClick={log} variant="contained" color="success">
            Enter
        </Button>

    </Container>)

}