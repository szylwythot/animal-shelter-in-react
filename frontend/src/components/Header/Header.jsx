import React from 'react'
import { Typography, AppBar, Box, Toolbar } from '@mui/material';
import { AccessTime, MailOutline, PhoneIphone, Pets } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import { Link, animateScroll as scroll } from "react-scroll";
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}




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
      'Roboto'
    ].join(','),
  },
});

theme.typography.h2 = {
  fontSize: 20,
  textTransform: "uppercase"
};

theme.typography.h6 = {
  fontSize: 20,
  fontWeight: 400
};

const AppbarLogo = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "10px",
  marginLeft: 0,
  width: '20%',
}));

const ContactContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  columnGap: "35px",
  flexDirection: "row",
  marginLeft: 0,
  width: '80%',
}));

const ContainerItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "10px",
  alignItems: "center"
}));


function Header(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
          <AppBar position="fixed" color="secondary">
            <Toolbar>
              <AppbarLogo>
                <Link activeClass="active" to="welcomePage" spy={true} smooth={true} duration={1000}>
                  <Pets style={{ fontSize: "40px" }}/>
                </Link>
                <Typography variant="h2">Noah's Ark Animal Shelter Foundation</Typography>
              </AppbarLogo>
              <ContactContainer>
                <ContainerItem>
                  <AccessTime />
                  <Typography variant="h6">Mon-Sat: 10:00 - 15:00</Typography>
                </ContainerItem >
                <ContainerItem>
                  <MailOutline />
                  <Typography variant="h6">info@noeallatotthon.hu</Typography>
                </ ContainerItem>
                <ContainerItem>
                  <PhoneIphone />
                  <Typography variant="h6">+ 36 30 123 4567</Typography>
                </ ContainerItem>
              </ContactContainer>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </ThemeProvider>
  )
};

export default Header