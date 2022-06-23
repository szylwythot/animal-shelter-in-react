import React from 'react';
import Button from '@mui/material/Button';





function SaveVisitButton({ handleCloseFunction }) {

    const bookAVisitEventHandler = (e) => {
        handleCloseFunction();
        console.log(e.target);
    };

    return (
        <Button size="large" variant="contained" onClick={bookAVisitEventHandler} sx={{ minWidth: "250px", letterSpacing: "1.5px"}}>Book</Button>
    );
};

export default SaveVisitButton;