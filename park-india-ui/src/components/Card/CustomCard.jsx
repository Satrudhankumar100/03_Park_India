import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CustomCard.css';
import biharImg from '../../assets/golghar.png';
import { Box, Link } from '@mui/material';
import { IoStarHalf } from "react-icons/io5";

const CustomCard = ({landmark}) => {
  
  return (
    <Card className="custom-card" sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={landmark.image}
      />
      <CardContent>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Box>
        <Typography gutterBottom variant="h6" component="div">
          {landmark.state}
        </Typography>
        </Box>
        <Box>
        <Typography gutterBottom sx={{fontWeight:"bold"}} variant="h7" component="div">
          Price Rs 1999/-
        </Typography>
        </Box>
      </Box>
        
        <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Available District : {landmark.availableDistrict}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
          <span className='flex items-center gap-1'> Review : {landmark.review} <IoStarHalf color="#f82" /></span>
          </Typography>

          <Typography variant="body2" sx={{ color: "#3b8132", fontWeight:"bold" }}>
             slots : {landmark.slots}

          </Typography>

        </Box>
      
       
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"end"
}}>
        <Button  sx={{fontWeight:"bold",fontSize:"25px"}}  size="small">Book Now</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
