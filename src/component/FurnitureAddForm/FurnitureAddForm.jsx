import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import furniturePlaceholder from './furniturePlaceHolder.png';
import "./FurnitureAddForm.less";

const AddForm = () => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState(null);

  const handleFocus = (inputName) => {
    setFocused(inputName);
  };

  return (<>
  <div className='topPad'></div>
    <Card variant="outlined" sx={{ maxWidth: '90%', width: '600px',  margin: '0 auto', backgroundColor: "whitesmoke"}}>
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="textSecondary">
              Include a Picture:
            </Typography>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <input type="file" className="visually-hidden-input" />
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardMedia
        component="img"
        alt="Image Preview"
        height="500"
        image={furniturePlaceholder}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          Add a Description:  
          <input
            type="text"
            name="Description"
            placeholder="Describe your product..."
            onFocus={() => handleFocus('title')}
          />
          </div>
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body1" component="div" color="Primary">
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          Add a price:
          <input
            type="text"
            name="title"
            placeholder="Price"
            onFocus={() => handleFocus('title')}
            
          />
          </div>
        </Typography>
      </CardContent>
      <Button variant="outlined" onClick={() => navigate("/")} style=
      {{display: 'flex', justifyContent: "center",   alignItems: "center", margin: '0 auto', marginBottom: '10px'}}>Post</Button>
    </Card>
    </>
  );
}

export default AddForm;