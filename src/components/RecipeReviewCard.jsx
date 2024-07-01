import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button  from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useState,useEffect } from 'react';
import "./RecipeReviewCard.css";
const ExpandMore = styled((props) => {
  const { expand, 
    ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard()  {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var [output,setOutput] = React.useState([])
useEffect(()=>{

  axios.get("https://fakestoreapi.com/products")
.then((res)=>{
  console.log(res.data);
  setOutput(res.data);
})
.catch((error)=>{
  console.log(error);
});

},[])






  
return (

  <div className="container">

        {output.map((val,i)=> {

return(
<Card sx={{ maxWidth: 345 }} className='productcard' key={i} style={{backgroundColor:'#d7f5fa'}}>
      <CardHeader
    
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        
        title= {val.title}
        subheader="In Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={val.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {val.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontFamily:'sans-serif',fontSize:'18px',fontWeight:'bold'}}>
         #{val.category}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontFamily:'sans-serif',fontSize:'20px',fontWeight:'60px',color:'black'}}>
         Rating : {val.rating.rate}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color:'red'}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{color:'black'}}/>
        </IconButton>&nbsp;
        <Button className='but' variant="outlined">Buy Now</Button>
      </CardActions>
      
    </Card> 
    )


        })}
     

  </div>
);
}
  