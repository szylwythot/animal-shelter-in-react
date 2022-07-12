import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";


function GoBackToDogsButton() {
    return (
        <Link activeClass="active" to="DogFilter" spy={true} smooth={true} duration={1000}>
            <Button variant="contained" size="large" className="goBackToDogsBtn" color="secondary" >Back to Dogies</Button>
        </Link>
    )
};

export default GoBackToDogsButton