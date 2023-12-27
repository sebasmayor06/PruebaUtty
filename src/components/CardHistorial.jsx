import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ImagenBlanca from '../img/Rectangle 187.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CardHistorial() {
  return (
   <Card sx={{display:'flex', flexDirection:'row'}}>
    <CardMedia sx={{width:'125px', height:'125px'}} component='img' image={ImagenBlanca} alt="imagen"/>
    <CardContent>
        <Typography variant="h5">Nombre</Typography>
        <Typography variant="body2">Marca</Typography>
        <Typography variant="body2">Descripcion</Typography>
        <Typography variant="body2">Ingredientes</Typography>

    </CardContent>
    <Box>
    <FavoriteBorderIcon sx={{ml:'800px'}}/>
    </Box>
   </Card>
  )
}
