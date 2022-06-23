import React from 'react';
import Button from '@mui/material/Button';


function CancelButton({ handleCloseFunction }) {
    return (
        <Button variant="contained" size="large" color="secondary" onClick={handleCloseFunction}sx={{ minWidth: "250px", letterSpacing: "1.5px"}}>Cancel</Button>
    )
};

export default CancelButton