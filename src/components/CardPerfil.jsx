import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ImagenPerfil from '../img/image 3.png'
import ModeIcon from '@mui/icons-material/Mode';

export default function CardPerfil() {
  return (
    <Card sx={{display:'flex', flexDirection:'row', margin:'10px'}}>
    <CardMedia sx={{width:'125px', height:'125px'}} component='img' image={ImagenPerfil} alt="imagen"/>
    <CardContent>
        <Typography variant="h5">Nombre y Apellido</Typography>
        <Typography variant="body2">Datos lanzados por el consultor</Typography>
        <Typography variant="body2">Datos lanzados por el consultor</Typography>

    </CardContent>
    
    <ModeIcon sx={{pl:'750px'}}/>
   </Card>
  )
}
