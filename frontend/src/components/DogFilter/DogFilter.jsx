import React from 'react'
import GenderRadioGroup from './GenderRadioGroup';
import BreedAutocomplete from './BreedAutocomplete';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
    },
    
});

const theme2 = createTheme({
    palette: {
        primary:{
            main: "#FFFFFF",
        },
        text: {
            primary: "#616161",
            secondary: '#616161',
        }
    },
    
})

function DogFilter({dogList, onDogFilterChange, setDogs}) {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme2}>
                <BreedAutocomplete dogList={dogList}/>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <GenderRadioGroup dogList={dogList} onFilteredDog={onDogFilterChange} setDogs={setDogs} />
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default DogFilter
