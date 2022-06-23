import React from 'react';
import BookAVisitButton from './BookAVisitButton';
import GoBackToDogsButton from './GoBackToDogsButton';
import Typography from '@mui/material/Typography';
import BookVisitDialog from '../BookAVisitDialog/BookVisitDialog';


function DogProfileContent({ info }) {

    const { name, breed, age, img, gender, description } = info;


    const [openVisitDialog, setOpenVisitDialog] = React.useState(false);


    const openBookVisitPopup = () => {
        setOpenVisitDialog(true);
    };

    const handleClose = () => {
        setOpenVisitDialog(false);
    };

    return (
        <div className="dogProfileContent">
            <div className="LeftData">
                <img src={img} alt="#" className="dogProfileContentImg" ></img>
                <Typography variant="h4" color="text.second" className="dogProfileContentBreed" fontWeight='bold' >
                    {breed}
                </Typography>
                <Typography variant="h5" color="text.second" className="dogProfileContentSex" fontWeight='bold' >
                    {gender}
                </Typography>
                <Typography variant="h5" color="text.second" className="dogProfileContentBd" fontWeight='bold' >
                    {age}
                </Typography>
            </div>
            <div className="RightData" >
                <Typography gutterBottom variant="h3" component="div" className="dogProfileContentName" fontWeight='bold' color='secondary'>
                    {name}
                </Typography>
                <p className="dogProfileContentStory">
                    {description}
                </p>
                <div className="dogProfileContentButtons">
                    <BookAVisitButton openBookVisitPopup={openBookVisitPopup} />
                    <GoBackToDogsButton />
                </div>
                <BookVisitDialog open={openVisitDialog} handleCloseFunction={handleClose} info={info} />
            </div>
        </div>
    )
}

export default DogProfileContent


