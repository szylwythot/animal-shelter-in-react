import React from 'react'
import HappyDog from '../../images/HappyDog.png'
import Dialog from '@mui/material/Dialog';
import './BookAVisit.css';
import '../../index.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Confetti from 'react-confetti';

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
    ].join(','),
  },
});

theme.typography.h2 = {
  fontSize: 50,
  fontWeight: 800,
  color: "#4F0AA6"
};

theme.typography.h3 = {
  fontSize: 35,
  fontWeight: 600,
  letterSpacing: "1.5px",
  color: "#4F0AA6"
};

const ThankYouText = styled('div')(({ theme }) => ({
  position: "absolute",
  top: "25%",
  textAlign: "center",
  zIndex: 10,
}));

const ConfettiWrap = styled('div')(({ theme }) => ({
  position: "absolute",
  
}));

function ThankYouPopup(props) {

  const { open, handleClose } = props;

  return (
    <ThemeProvider theme={theme}>
      <ConfettiWrap>
        <Dialog className="thankyou-popup" open={open} onClose={handleClose}
        PaperProps={{ sx: { 
          position: "absolute", 
          top: "60px", 
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-end",
          m: 0, 
          minWidth: 1000, 
          minHeight: 600 } 
          }}>
            <ThankYouText>
                <Typography variant="h3" className="thankyou-title">Thank you for the booking!</Typography>
                <Typography variant="h2" className="thankyou-subtitle">We just can't wait to meet You!</Typography>
            </ThankYouText>
            < >
                <img src={HappyDog} alt="thanks" className="thanks" />
            </>
            <Confetti width={1000} height={600} numberOfPieces={40}/>
        </Dialog>
      </ConfettiWrap>
    </ThemeProvider>
  )
}

export default ThankYouPopup
