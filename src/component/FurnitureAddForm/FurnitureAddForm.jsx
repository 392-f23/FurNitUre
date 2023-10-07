import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./FurnitureAddForm.less";


const AddForm = () => {
    const [focused, setFocused] = useState(null);
    const handleFocus = (inputName) => {
        setFocused(inputName);
    };
    return (
    <div>
    <Card className="furniture-listing">
      <CardActionArea>
        <CardContent className="furniture-listing-content">
          <Typography
            variant="body2"
            color="text.secondary"
            className="furniture-item-name"
          >
            Add a Description:

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
        <CardContent className="furniture-listing-content">
        <Typography
            variant="h5"
            component="div"
            className="furniture-item-name"
          >
            Include a picture:

             <input
                type="text"
                name="picture"
                placeholder="Picture URL"
                onFocus={() => handleFocus('picture')}
            />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className="furniture-listing">
      <CardActionArea>
        <CardContent className="furniture-listing-content">
        <Typography
            variant="h6"
            component="div"
            className="furniture-item-name"
          >
            Add a price: 

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
    <Button variant="outlined"> Post </Button> 
    </div>
    )
}
export default AddForm;




