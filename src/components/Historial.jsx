import { Box, Grid, Typography } from '@mui/material';
import CardHistorial from './CardHistorial';

export default function Historial() {
  const numberOfCards = 3;

  return (
    <Box sx={{ background: 'white' }}>
      <Typography variant="h5" color="black">
        Historial
      </Typography>
      <Grid container direction="column" my={3} p={2}>
        {[...Array(numberOfCards)].map((_, index) => (
          <Grid item xs key={index} p={2}>
            <CardHistorial />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}