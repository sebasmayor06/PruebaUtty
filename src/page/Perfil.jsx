import { Box} from "@mui/material";
import Recomendaciones from "../components/Recomendaciones";
import Historial from "../components/Historial";
import CardPerfil from "../components/CardPerfil";


export default function Perfil() {
  return (
    <Box  height="100%" width="100%">
      <CardPerfil></CardPerfil>
    <Recomendaciones></Recomendaciones>
    <Historial/>
      
    </Box>
  )
}
