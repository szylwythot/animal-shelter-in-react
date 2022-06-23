import React from 'react';
import Card from '@mui/material/Card';
import BookAVisitButton from '../DogProfilePage/BookAVisitButton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { height } from '@mui/system';


function DogCardDetailed({ info, firstButtonFunction }) {

    const { name, breed, sex, bd, img, story } = info

    return (
        <Card sx={{ width: 220, boxShadow: 7 }} className="dogCard">
            <CardMedia
                component="img"
                height="200"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="button" display="block" color="text.second">
                    {breed}
                </Typography>
                <Typography variant="button" display="block" color="text.second">
                    {sex}
                </Typography>
                <Typography variant="button" display="block" color="text.second">
                    Szül.: {bd}
                </Typography>
            </CardContent>
            {firstButtonFunction()}
        </Card>
    )
}

export default DogCardDetailed


