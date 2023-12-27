
import { Box, Grid, Typography } from '@mui/material';
import CardRecomendaciones from './CardRecomendaciones';

export default function Recomendaciones() {
  const numberOfCards = 3;

  return (
    <Box sx={{ background: 'white' }}>
      <Typography variant="h5" color="black">
        Recomendaciones de especialistas
      </Typography>
      <Grid container my={3} p={2}>
        {[...Array(numberOfCards)].map((_, index) => (
          <Grid item xs key={index} p={2}>
            <CardRecomendaciones />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
