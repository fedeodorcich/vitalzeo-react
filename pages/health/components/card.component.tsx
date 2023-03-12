import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export type CardProps ={
    imagePath: string;
    title: string;
}

const CardComponent = ()=>{
    return(
        <Card sx={{ maxWidth: 300 }} className="m-auto">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/assets/images/hero.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
        <CardActions>
     
            <Button color="primary" variant="contained" className="bg-teal-500" onClick={()=>{}}>Comprar</Button>
       
        </CardActions>
      </Card>
    )
}

export default CardComponent