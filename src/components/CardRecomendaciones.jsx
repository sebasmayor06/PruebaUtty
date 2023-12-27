import {  Card, CardContent, CardMedia, Typography, Stack, Rating } from "@mui/material";
import ImagenRecomen from '../img/Rectangle 189.png'

export default function CardRecomendaciones() {
  return (
   <Card sx={{width:'351px', height:'379px'}}>
        <CardMedia component='img' image={ImagenRecomen} height='200' alt="imagen"/>
        <CardContent>
            <Typography variant="h4">Nombre</Typography>
            <Typography variant="body2">Marca</Typography>
            <Stack spacing={2}>
                <Rating></Rating>
            </Stack>
            <Typography variant="body2">Recomendado por Nombre y apellido</Typography>

        </CardContent>

   </Card>
  )
}
