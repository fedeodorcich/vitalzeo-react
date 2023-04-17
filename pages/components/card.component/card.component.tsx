import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ICard } from '../../common';
import * as React from 'react';


export type CardProps ={
    primaryColor:string;
    card:ICard;
    handleOpenModal: (card:ICard) => void;
}


const CardComponent = ({card,handleOpenModal,primaryColor}:CardProps)=>{

    const getColor=(primaryColor:string)=>{
      switch(primaryColor){
        case "blue": return "bg-blue-500"
        case "teal": return "bg-teal-500"
        case "rose": return "bg-rose-500"
        default : return "bg-slate-200"
      }
    }

    return(
        <Card sx={{ maxWidth: 300 }} className="m-auto">
        <CardMedia
          component="img"
          height="140"
          image={card.imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
        </CardContent>
        <CardActions>
     
            <Button variant="contained" className={getColor(primaryColor)} onClick={()=>{handleOpenModal(card)}}>Comprar</Button>
       
        </CardActions>
      </Card>
    )
}

export default CardComponent