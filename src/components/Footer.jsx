import { Box, Typography, List, ListItem } from "@mui/material";
import Twitter from "../img/Vector.png"
import Linkedin from "../img/Vector (1).png"
import Utty from '../img/Utty.png'


export default function Footer() {

  return (
    <Box sx={{p: 5, background: "#F6F6F6", display: 'flex', justifyContent: 'space-between', height: '150px'}}>
        <img src={Utty} alt="Tu imagen" style={{width:'80px', height:'50px' }} />
        <Box sx={{width: '200px', height: '150px'}}>
        <Typography sx={{
            fontSize: "20px",
            color:"#1C1C1D",
            fontWeight: "700",
            mb: 2,
            borderLeft: '2px solid black',
            paddingLeft: 2,
        }}>
            About us
        </Typography>
        <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, debitis. Iure, accusantium quam. Quis, eveniet eum! Voluptatum expedita, provident, eveniet quod qui ullam amet corrupti, quae numquam quisquam ipsum sequi.
        </Typography>
        </Box>
        <Box>
        <Typography sx={{
            fontSize: "20px",
            color:"#1C1C1D",
            fontWeight: "700"
        }}>
            Quick Links
        </Typography>
        <List>
                <ListItem sx={{ marginBottom: -1 }}>
                     <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>Home</Typography>
                </ListItem>
                <ListItem sx={{ marginBottom: -1 }}>
                     <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>About</Typography>
                    </ListItem>
                <ListItem sx={{ marginBottom: -1 }}> 
                      <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>Consultor</Typography>
                </ListItem>
                <ListItem sx={{ marginBottom: -1 }}>
                      <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>Blug</Typography>
                </ListItem>
                <ListItem sx={{ marginBottom: -1 }}>
                      <Typography sx={{color:'#1C1C1D', fontSize:'12px'}}>Productos</Typography>
                </ListItem>
         </List>
        </Box>
        <Box>
            <Box sx={{ marginBottom: 1 }}>
                <img src={Twitter} alt="Tu imagen" style={{  marginRight: '8px' }} />
                <img src={Linkedin} alt="Tu imagen" style={{  marginRight: '8px' }} />
            </Box>
            <Typography sx={{
            fontSize: "20px",
            color:"#1C1C1D",
            fontWeight: "700"
        }}>asdasd@asd.com</Typography>
        </Box>

    </Box>
  )
}
