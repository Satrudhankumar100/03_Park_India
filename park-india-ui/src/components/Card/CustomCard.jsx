import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CustomCard.css';
import biharImg from '../../assets/golghar.png';

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
        <Typography gutterBottom variant="h4" component="div">
          {states[3]}
        </Typography>
      
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Available District 40</p>
          <p>Review 4 </p>
          <p>slot 2000</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button   size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
