import React, { useRef, useState } from "react";
import DogCard from "./DogCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DogFilter from "../DogFilter/DogFilter";
import { Typography } from "@mui/material";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '.css-ahj2mt-MuiTypography-root',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };



const Dogs = ({ list, onFilterChange, setDogs, getSelectedId }, props) => {


    const dogs = list.map((item, index) => (
        <Grid item xs={2} sm={8} md={4} key={index}>
            <DogCard info={item} getSelectedId={getSelectedId} />
        </Grid>

    ))

    
    const drawer = (
        <div>
            <DogFilter dogList={list} onDogFilterChange={onFilterChange} setDogs={setDogs} />
        </div>
    )

    return (
        <>
            <Box sx={{
                width: "auto",
                backgroundColor: 'primary.main',
                padding: 5,
                paddingTop: 15,
                boxShadow: "1px 1px 15px 1px rgba(0, 0, 0, 0.15)"
            }} className="DogFilter">
                {drawer}
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container maxWidth="lg">
                    <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h2" className="subtitle" >Gazdira vágyó kutyák</Typography>
                            <br></br>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                {dogs}
                            </Grid>
                    </Box>
                </Container>
            </Box>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}

export default Dogs