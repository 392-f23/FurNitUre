import { useState } from 'react';
import FurnitureContactModal from "../FurnitureContactModal/FurnitureContactModal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./FurnitureItem.less";
import { useNavigate } from "react-router-dom";

const FurnitureItem = (props) => {
  const {itemId,item} = props;
  const navigate = useNavigate();

  const onFurnitureItemClicked = (e) => {
    e.stopPropagation();
    navigate(`/FurnitureDescription/${itemId}/detail`);
  };

  const [open, setContactOpen] = useState(false);

  const openContactModal = () => setContactOpen(true);
  const closeContactModal = () => setContactOpen(false);

  return (
    <Card className="furniture-item">
      <CardActionArea onClick={onFurnitureItemClicked}>
        <CardMedia
          component="img"
          height="200"
          // image={"https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg"}
          image={item.image}
          alt="Image "
        />
        <CardContent className="furniture-item-content">
          <Typography
            variant="h5"
            component="div"
            className="furniture-item-name"
          >
            {item.name}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className="furniture-item-price"
          >
            ${item.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="furniture-item-description"
          >
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="furniture-item-contact">
        <div>
        <Button
          size="small"
          color="primary"
          className="furniture-item-contact-button"
          disableRipple={true}
          onClick={openContactModal}
        >
          Contact
          
        </Button>

        <FurnitureContactModal open={open} close={closeContactModal}>
        </FurnitureContactModal>
        </div>
        
      </CardActions>
    </Card>
  );
};

export default FurnitureItem;
