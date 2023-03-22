import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ICard } from '../../common';


export type CardProps ={
    card:ICard;
    handleOpenModal: (card:ICard) => void;
}

const CardComponent = ({card,handleOpenModal}:CardProps)=>{
    return(
        <Card sx={{ maxWidth: 300 }} className="m-auto">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={card.imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
        </CardContent>
        <CardActions>
     
            <Button color="primary" variant="contained" className="bg-teal-500" onClick={()=>{handleOpenModal(card)}}>Comprar</Button>
       
        </CardActions>
      </Card>
    )
}

export default CardComponent