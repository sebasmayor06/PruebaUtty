import { AppBar, Box, Button, Toolbar} from "@mui/material";
import Utty from '../img/Utty.png'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();


  const redirectToPerfil = () => {
    
    navigate('/');
  };
  return (
    <AppBar position="static" sx={{background: "#F6F6F6"}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
        <img src={Utty} alt="Tu imagen" style={{  marginRight: '8px' }} />
        <Box>
            <Button onClick={redirectToPerfil} >Inicio</Button>
            <Button >Consultor</Button>
            <Button >Productos</Button>
            <Button >Descubre</Button>
            <Button >Blog</Button>
        </Box>
        <Box>
            <SearchIcon sx={{color:'black'}}></SearchIcon>
            <AccountBoxIcon sx={{color:'black'}}></AccountBoxIcon>
        </Box>
        </Toolbar>

    </AppBar>
  )
}
