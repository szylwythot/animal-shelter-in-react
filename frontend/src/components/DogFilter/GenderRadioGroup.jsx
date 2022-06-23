import React, {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';





function GenderRadioGroup({ dogList, onFilteredDog }) {
  
  
return (
  <FormControl sx={{ color: "#616161" }}>
    

    {onFilteredDog()}
    {/* <FormControlLabel control={<Checkbox />} label="Szuka" onChange={onFilteredDog(false)}/> */}
    {/* <FormControlLabel control={<Checkbox />} label="Kan" /> */}

    {/* <Typography sx={{ fontSize: 30, color: "#616161", paddingTop: 7 }}>Kor</Typography>

    <FormControlLabel control={<Checkbox />} label="Kölyök (9. hónapig)" />
    <FormControlLabel control={<Checkbox />} label="Fiatal felnőtt (4. évig)" />
    <FormControlLabel control={<Checkbox />} label="Érett felnőtt (8. évig)" />
    <FormControlLabel control={<Checkbox />} label="Idős (9.évig)" /> */}
  </FormControl>
);
}

export default GenderRadioGroup

