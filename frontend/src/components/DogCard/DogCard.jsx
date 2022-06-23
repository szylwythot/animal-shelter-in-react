import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import BookVisitDialog from '../BookAVisitDialog/BookVisitDialog';
import Link from 'react-scroll/modules/components/Link';
import ThankYouPopup from '../BookAVisitDialog/ThankYouPopup';

function DogCard({ info, getSelectedId }) {
    const [openVisitDialog, setOpenVisitDialog] = useState(false);
    const [openThankYouPopup, setOpenThankYouPopup] = useState(false);

    const { name, breed, age, img, gender, id } = info;

    const openBookVisitPopup = () => {
        setOpenVisitDialog(true);
    };

    const handleClose = () => {
        setOpenVisitDialog(false);
    };
    
    const handleSaveClose = () => {
        handleClose();
        setOpenThankYouPopup(true);
    };

    const closeThankYouPopup = () => {
        setOpenThankYouPopup(false);
    };


    function goToDogProfile(event) {
        getSelectedId(id, name);
    }


    return (
        <>
            <Card sx={{
                maxWidth: 280,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "1px 1px 20px 1px rgba(0, 0, 0, 0.15)"
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    sx={{ padding: 2, width: "90%", objectFit: "contain" }}
                />
                <CardContent sx={{ padding: 1, width: "90%" }}>
                    <Typography gutterBottom variant="h4" component="div" sx={{fontWeight: 800}}>
                        {name}
                    </Typography>
                    <Typography variant="button" display="block" color="text.second">
                        {breed}
                    </Typography>
                    <Typography variant="button" display="block" color="text.second">
                        {gender}
                    </Typography>
                    <Typography variant="button" display="block" color="text.second">
                        {age}
                    </Typography>
                </CardContent>
                <CardActions sx={{width: "90%", marginBottom: "10px"}}>
                    <Stack direction="row" spacing={6} sx={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Link activeClass="active" to="DogProfileSection" spy={true} smooth={true} duration={1000}>
                            <Button size="small" variant="contained" sx={{minWidth: "100px"}} onClick={goToDogProfile} >
                                Details
                            </Button>
                        </Link>
                        <Button size="small" variant="contained" color="secondary" sx={{minWidth: "100px"}} onClick={openBookVisitPopup}>
                            Visit me!
                        </Button>
                    </Stack>
                </CardActions>
            </Card>
            <BookVisitDialog open={openVisitDialog} handleCloseFunction={handleClose} handleSaveCloseFunction={handleSaveClose} info={info} />
            <ThankYouPopup open={openThankYouPopup} handleClose={closeThankYouPopup}/>
        </>
    )
}

export default DogCard




