
import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, CardActionArea, CardActions } from "@mui/material";

import "./FurnitureAddForm.less";

const AddForm = () => {
  const [focused, setFocused] = useState(null);
  const handleFocus = (inputName) => {
      setFocused(inputName);
  };
  return (
  <div>
  <div classname="file-area">
  <Card className="furniture-listing2">
    <CardActionArea>
      <CardContent >
        <Typography
          variant="body1"
          color="text.secondary"
          className="furniture-item-name"
        >
          Include a Picture:
          <div></div>
          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
    Upload file
    <input type="file" className="visually-hidden-input"/>
  </Button>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
 
  </div>
  <div className= "bottom-description">
  <Card className="furniture-listing">
    <CardActionArea>
      <CardContent >
        <Typography
          variant="body2"
          color="text.secondary"
          className="furniture-item-name"
        >
          Add a Description:
          <div></div>
           <input
              type="text"
              name="Description"
              placeholder="Describe your product..."
              onFocus={() => handleFocus('title')}
          />
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card className="furniture-listing">
    <CardActionArea>
      <CardContent >
      <Typography
          variant="h6"
          component="div"
          className="furniture-item-name"
        >
          Add a price: 
          <div></div>
          <input
              type="text"
              name="title"
              placeholder="Price"
              onFocus={() => handleFocus('title')}
          />
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </div>
    <div>
      <Button variant="outlined"> Post </Button> 
  </div>
  </div>
  )
}
export default AddForm;