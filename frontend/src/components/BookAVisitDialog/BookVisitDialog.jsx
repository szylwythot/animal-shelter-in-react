import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import BookAVisitForm from './BookAVisitForm';
import Grid from '@mui/material/Grid';
import SaveVisitButton from '../buttons/SaveVisitButton';
import CancelButton from '../buttons/CancelButton';
import DogCardDetailed from './DogCardDetailed';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#FFCD29',
      },
      secondary: {
        main: '#373737',
      },
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Eczar',
        'Yeseva One'
      ].join(','),
    },
  });

  theme.typography.h5 = {
    fontSize: 25,
    fontWeight: 800,
    marginBottom: 12,
    marginTop: 20,
    color: "#9D9D9D"
  };

  theme.typography.h2 = {
    fontSize: 50,
    fontWeight: 800,
    textTransform: "capitalize",
    marginLeft: 15,
    marginTop: 15,
    color: "#616161"
  };

function BookVisitDialog({ info, open, handleCloseFunction, handleSaveCloseFunction }) {


    return (
        <div>
            <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleCloseFunction}
            PaperProps={{ sx:{
                minWidth: 900
            } }}>
                <Typography variant="h2">Visitor booking form</Typography>
                <Grid container /* spacing={2} */ sx={{
                    minWidth: 700,
                    height: 500,
                    alignItems: "center",
                }}>
                    <Grid item xs={6} md={8}>
                        <BookAVisitForm />
                    </Grid>
                    {/* <DialogContentText item xs={6} md={4}> */}

                    <Grid item xs={8} md={4}>
                        <Typography variant="h5">I'd like to visit...</Typography>
                        <DogCardDetailed info={info} firstButtonFunction={() => { }} />
                    </Grid>
                    {/* </DialogContentText> */}
                </Grid>
                <DialogActions sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 3}}>
                    <Stack direction="row" spacing={10} >
                        <SaveVisitButton handleCloseFunction={handleSaveCloseFunction} />
                        <CancelButton handleCloseFunction={handleCloseFunction} />
                    </Stack>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
        </div>
    );
}

export default BookVisitDialog