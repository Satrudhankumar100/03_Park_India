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

const CustomCard = () => {
  const [states,setStates]=useState(['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
      'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
      'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
      'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
      'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
      'Uttarakhand', 'West Bengal'])

  return (
    <Card className="custom-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={biharImg}
      />
      <CardContent>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Box>
        <Typography gutterBottom variant="h4" component="div">
          {states[3]}
        </Typography>
        </Box>
        <Box>
        <Typography gutterBottom sx={{fontWeight:"bold"}} variant="h6" component="div">
          Price Rs 1999/-
        </Typography>
        </Box>
      </Box>
        
        <Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Available District 40
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
          <span className='flex'> Review 4 <IoStarHalf /></span>
          </Typography>

          <Typography variant="body2" sx={{ color: "#3b8132", fontWeight:"bold" }}>
             slots : 2000

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
