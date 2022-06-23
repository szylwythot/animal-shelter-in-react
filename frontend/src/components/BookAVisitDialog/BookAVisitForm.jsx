import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BookAVisitForm() {
    // const [value, setValue] = React.useState(new Date());
    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        // dateAdapter={AdapterDateFns}
        >
            <Box className='MuiTextField formElements'>
                <Box sx={{
                    '& .MuiTextField-root': { m: 2, width: '23ch' },
                }}>
                    <TextField id="date" label="Date" variant="outlined" />
                    <TextField id="time" label="Time" variant="outlined" />
                </Box>

                <TextField id="firstName" label="Surname" variant="outlined" />
                <TextField id="lastName" label="First name" variant="outlined" />
                <TextField id="phone" label="Phone number" variant="outlined" type="phone" />
                <TextField id="email" label="Email" variant="outlined" type="email" />

                {/* <TextField id="phone" label="Phone number" variant="outlined" /> */}
                {/* <TextField id="email" label="Email" variant="outlined"/> */}
            </Box>
        </Box>
    );
}

export default BookAVisitForm;