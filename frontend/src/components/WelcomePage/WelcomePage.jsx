import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import './WelcomePageCss.css';
import { styled, alpha } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, animateScroll as scroll } from "react-scroll";



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
      'Roboto', 'Eczar', 'Yeseva One'
    ].join(','),
  },
});

theme.typography.h1 = {
  fontSize: 70,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

theme.typography.h2 = {
  fontSize: 45,
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "#9d9d9d",
};

theme.typography.h3 = {
  fontSize: 26,
  fontWeight: 300,
  letterSpacing: 1,
  lineHeight: "35px",
  fontStyle: "italic"
};

const WelcomePageSection = styled('section')(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
}));

const WelcomeText = styled('div')(({ theme }) => ({
  position: "absolute",
  top: "35%",
  left: "65px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "55%",
  zIndex: 10,
}));

const WelcomeImg = styled('div')(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
  width: "45%",
}));

function WelcomePage() {

  return (
    <ThemeProvider theme={theme}>
      <WelcomePageSection className='welcomePage'>
        <WelcomeText className="text">
          <Typography variant="h1" className="title" sx={{fontSize : "60px"}}>Noah's Ark Animal Shelter</Typography>
          <Typography variant="h2" className="subtitle" sx={{fontSize : "45px"}}>Foundation</Typography>
          <Typography variant="h3" className="description" sx={{fontSize : "26px"}}>"Saving one dog will not change the world, but surely for that one dog, the world will change forever."</Typography>
          <Link activeClass="active" to="DogFilter" spy={true} smooth={true} duration={1000}>
            <Button variant="contained" className="fedezzfelbtn" style={{ fontSize: "20px" }}>Explore</Button>
          </Link>
        </WelcomeText>
        <WelcomeImg className="welcomePicture">
          <img src="https://user-images.githubusercontent.com/64097209/165717320-40275936-9b11-457a-ac17-0bf8b1ed91c3.jpg" alt='' />
        </WelcomeImg>
      </WelcomePageSection>
    </ThemeProvider>

  )
}

export default WelcomePage

//sx={{ position: 'absolute', left: '63px', bottom: '40px' }}sx={{ position: 'absolute', left: '63px', bottom: '40px' }}