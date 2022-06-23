import React from 'react';
import Button from '@mui/material/Button';




function BookAVisitButton({ openBookVisitPopup }) {
    return (
        <Button size="large" variant="contained" className="BookAVisitBtn" onClick={openBookVisitPopup} >Visit me!</Button>
    );
};

export default BookAVisitButton