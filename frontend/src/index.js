import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DogProfilePage from './components/DogProfilePage/DogProfilePage';
// import BookAVisitForm from './components/BookAVisitPopup/BookAVisitForm'
import Data from './data'
import WelcomePage from './components/WelcomePage/WelcomePage';
import Header from './components/Header/Header';
import Dogs from './components/DogCard/Dogs';
import Box from '@mui/material/Box';
import DogFilter from './components/DogFilter/DogFilter';
import App from './App';


import { createTheme, ThemeProvider } from '@mui/material/styles';



const root = ReactDOM.createRoot(document.getElementById('root'));

/* sárga
FFCD29
sötét fekete szürke 373737
világos háttér szürke: F3F3F2
betű szürke 9D9D9D */


const apiKey = "5NF2ANS54FaNOBGWKHmd7Z9MgBZpb0FV62Bb7PQVS0o98jTIls";
const secretKey = "UR7JEn38qNk0PMIvFjFqcZTHjd4U7cT6FXloh2J3";

//  curl -d "grant_type=client_credentials&client_id=5NF2ANS54FaNOBGWKHmd7Z9MgBZpb0FV62Bb7PQVS0o98jTIls&client_secret=UR7JEn38qNk0PMIvFjFqcZTHjd4U7cT6FXloh2J3" https://api.petfinder.com/v2/oauth2/token







root.render(
  <React.StrictMode>
   <App /> 
  </React.StrictMode>
);
