import React, { useState, useEffect } from 'react';
import DogProfilePage from './components/DogProfilePage/DogProfilePage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import Dogs from './components/DogCard/Dogs';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { SecurityUpdateGoodSharp } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Autocomplete from '@mui/material/Autocomplete';

class Dog{
    constructor(name, breed, age, img, gender, description, id){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.img = img;
        this.gender = gender;
        this.description = description;
        this.id = id;
    }

    static createDog(rawData){
        let sampleDogPhoto = "https://freesvg.org/img/Sitting-Dog-Silhouette.png";
        return new Dog(
            rawData.name,
            rawData.breeds.primary,
            rawData.age,
            rawData.photos.length === 0 ? sampleDogPhoto : rawData.photos[0].medium,
            rawData.gender,
            rawData.id
        );
    }
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
            'Roboto',
        ].join(','),
    },
});

function App() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [selectedDog, setSelectedDog] = useState({});
    const [selectedId, setSelectedId] = useState({});
    const [hasSelected, setHasSelected] = useState(false);
    const [unFiltered, setUnFiltered] = useState([])

    const apiKey = "5NF2ANS54FaNOBGWKHmd7Z9MgBZpb0FV62Bb7PQVS0o98jTIls";
    const secretKey = "UR7JEn38qNk0PMIvFjFqcZTHjd4U7cT6FXloh2J3";

    // const apiKey = "82tRjn2VyahGfRvy59hl4p5LHnY2zLnJE7zQvPEUieAb9b1vH8";
    // const secretKey = "3uLzTMwd6rzhc7Q495EfliyFAo7oshQJOBDDKN7E";

    useEffect(
        () => {
            // get token to authentification purposes of the dogs data fetch later
            const fetchData = async () => {
                const tokenResponse = await fetch('https://api.petfinder.com/v2/oauth2/token', {
                    method: 'POST',
                    body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + secretKey,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });

                const token = await tokenResponse.json();

                // fetch dog data with the above token
                const response = await fetch("https://api.petfinder.com/v2/animals?type=dog&page=2", {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token.access_token}`
                    },
                });

                const dataJSON = await response.json();
                // console.log(dataJSON);

                // set dogs with the correct dogs array fetched earlier
                setDogs(processDogs(dataJSON.animals));

                // this should be at hte end of the fetch!!!
                setUnFiltered(processDogs(dataJSON.animals))
                setLoading(false);
            };

            const processDogs = (rawDogs) => {
                console.log(rawDogs);
                return rawDogs.map((rawdog) => Dog.createDog(rawdog));
            }

            // call fetchData with error handling
            try {
                // setLoading(true);
                setLoading(true);
                fetchData();
                console.log(`dogs vaiable: ${dogs}`);
            }
            catch (error) {
                console.log(error);
            }
        },
        [] // initial value of dogs
    );

    const getSelectedId = (id, name) => {
        console.log(id);
        console.log(name);
        let myDog = dogs.filter((dog) => dog.id === id);
        // console.log(myDog);
        setSelectedId(myDog);
        setHasSelected(true);
    }

    const [value, setValue] = useState("");
    const filterDogs = (e) => {

        const handleChangeForGender = e => {
            if (e.target.checked) {
                setDogs(dogs => dogs.filter(dog => dog.gender === e.target.value))
            } else {
                setDogs(unFiltered)
            }
        };

        const handleChangeForAge = e => {
            if (e.target.checked) {
                setDogs(dogs => dogs.filter(dog => dog.age === e.target.value))
            } else {
                setDogs(unFiltered)
            }
        };


        const dogBreeds = dogs.map(dog => dog.breed)
        const uniqueDogBreeds = [...new Set(dogBreeds)];

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


        return (
            <>
                <FormLabel sx={{ fontSize: 30, color: "#616161" }}>Breed</FormLabel>
                <ThemeProvider theme={theme2}>
                    <Autocomplete
                        
                        id="outlined-basic"
                        
                        options={uniqueDogBreeds}
                        onChange={(event, newValue) => {
                            if(newValue){
                                setValue(newValue);
                                setDogs(dogs => dogs.filter(dog => dog.breed === newValue))
                            } else {
                                setDogs(unFiltered)
                            }                        
                        }}
                        sx={{ width: 300, paddingBottom: 6 }}
                        renderInput={(params) =>
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FFFFFF',
                                            borderRadius: '50px'
                                        },
                                    }
                                }} {...params} label="Breed" />
                        }
                    />
                </ThemeProvider>
                <FormControlLabel control={<Checkbox />} label="Male" value={"Male"} onChange={handleChangeForGender} />
                <FormControlLabel control={<Checkbox />} label="Female" value={"Female"} onChange={handleChangeForGender} />

                <Typography sx={{ fontSize: 30, color: "#616161", paddingTop: 7 }}>Age</Typography>

                <FormControlLabel control={<Checkbox />} label="Baby" value={"Baby"} onChange={handleChangeForAge} />
                <FormControlLabel control={<Checkbox />} label="Young" value={"Young"} onChange={handleChangeForAge} />
                <FormControlLabel control={<Checkbox />} label="Senior" value={"Senior"} onChange={handleChangeForAge} />
                <FormControlLabel control={<Checkbox />} label="Adult" value={"Adult"} onChange={handleChangeForAge} />
            </>
        )


    }



    const searchDogs = (e) => {


        return (
            <>

            </>
        )
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header />
                <WelcomePage />
                {   
                    loading ? 
                    <LoadingAnimation/> :
                    <Box sx={{ display: 'flex' }}>
                        <Dogs list={dogs} getSelectedId={getSelectedId} onFilterChange={filterDogs} setDogs={searchDogs}/>
                    </Box>
                }
                {/* {
                    !loading ? 
                    <DogProfilePage dogProfileData={selectedDog} getSelectedId={getSelectedId} /> : null
                } */}
                {
                    loading ? 
                    <LoadingAnimation/> : (
                        !hasSelected ?
                        <Typography variant="h2" sx={{height: 100}}>Choose a dog to see its details!</Typography>:
                        <DogProfilePage dogProfileData={dogs} selectedId={selectedId}/>
                    )
                    // <Typography>loaded</Typography>
                    // <DogProfilePage dogProfileData={dogs}/>
                    
                }
            </ThemeProvider>
        </div>
    )
}

export default App