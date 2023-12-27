import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  List,
  ListItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import Image from '../img/Rectangle 190.png';
import Manos from '../img/fluent-emoji-high-contrast_clapping-hands.png'
import { useDropzone } from 'react-dropzone';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function CardProfile() {
  const [isDropZoneOpen, setIsDropZoneOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisCompleted, setAnalysisCompleted] = useState(true);
  const navigate = useNavigate();

  const onDrop = async (acceptedFiles) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(acceptedFiles);
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
    } finally {
      setIsLoading(false);
      setAnalysisCompleted(false)
      setIsDropZoneOpen(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const openDropZone = () => {
    setIsDropZoneOpen(true);
  };

  const closeDropZone = () => {
    setIsDropZoneOpen(false);
  };

  const redirectToPerfil = () => {
    
    navigate('/Perfil');
  };

  return (

    <Box sx={{ width: 1437 }} style={{ display: 'flex', flexDirection: 'row', padding: '100px' }}>
        {analysisCompleted ? (
      <Card style={{ margin: 0 }}>
        <Box style={{ display: 'flex', flexDirection: 'row-reverse', padding: '50px', height:'450px' }}>
          <CardMedia component="img" height="600" width="442" image={Image} alt="Imagen de perfil" style={{ marginBottom: '8px' }} />
          <CardContent>
            <Typography variant="h3" component="div">
              Consultor de belleza
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam eligendi doloribus eveniet voluptatum. Ullam quas error quia harum, molestias dolorem voluptatum iusto eaque, fugiat at nobis porro provident deleniti?
            </Typography>
            <Box>
              <Typography variant="h4" component="div">
                Requerimientos
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">Rem iste ratione nisi asperiores omnis laborum eum corrupti numquam repellendus voluptatibus corporis debitis fugit maxime voluptate reprehenderit</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1">et animi nobis iusto?</Typography>
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Box>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#7E8EFF',
          }}
        >
          <Button onClick={openDropZone}>Sube tu foto</Button>
        </CardActions>

        <Dialog open={isDropZoneOpen} onClose={closeDropZone}>
          <DialogTitle>Sube tu foto</DialogTitle>
          <DialogContent>
            <div {...getRootProps()} style={{ border: '2px dashed #7E8EFF', padding: '100px', textAlign: 'center' }}>
              <input {...getInputProps()} />
              {isLoading ? (
                <Box>
                <Typography>Analizando</Typography>
                <CircularProgress sx={{ color: 'black' }} size={60} />
                </Box>
              ) : (
                <FileUploadIcon sx={{ color: 'black', fontSize: 60 }} />
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDropZone}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Card>):(
       <Card style={{ margin: 0 }}>
       <Box
         sx={{
            height:'450px',
           display: 'flex',
           justifyContent: 'center',
           flexDirection: 'column',
           alignContent: 'center',
           textAlign: 'center'
         }}
       >
         <CardMedia
           component="img"
           height="150px"
           image={Manos}
           alt="Imagen de perfil"
           style={{
             marginBottom: '8px',
             width: '150px',
             height: '150px',
             margin: 'auto', 
             display: 'block'
           }}
         />
         <Box style={{ padding: '20px' }}>
           <CardContent>
             <Typography variant="h3" component="div">
               El análisis ha sido finalizado con éxito!
             </Typography>
             <Typography gutterBottom variant="body2" color="text.secondary">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quisquam eligendi doloribus eveniet voluptatum. Ullam quas error quia harum, molestias dolorem voluptatum iusto eaque, fugiat at nobis porro provident deleniti?
             </Typography>
             <Typography gutterBottom variant="body2" color="text.secondary">
               Tus resultados se han añadido a tu perfil.
             </Typography>
           </CardContent>
         </Box>
       </Box>
       <CardActions
         sx={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           background: '#7E8EFF',
         }}
       >
        
         <Button onClick={redirectToPerfil}>Ir al perfil</Button>
       </CardActions>
     </Card>
     
      )}
    </Box>
  );
}
