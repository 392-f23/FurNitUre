import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./FurnitureItem.less";
import React, { useState } from "react";
import ContactModal from "../FurnitureContact/FurnitureContact";
import { useNavigate } from "react-router-dom";

const FurnitureItem = (props) => {
  console.log(props);
  const { itemId, item } = props;
  const navigate = useNavigate();

  const onFurnitureItemClicked = (e) => {
    e.stopPropagation();
    navigate(`/FurnitureDescription/${itemId}/detail`);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card className="furniture-item">
      <CardActionArea onClick={onFurnitureItemClicked}>
        <CardMedia
          component="img"
          height="200"
          image={item.imageLink}
          alt="Image "
        />
        <CardContent className="furniture-item-content">
          <Typography
            variant="h5"
            component="div"
            className="furniture-item-name"
          >
            {capitalizeFirstLetter(item.furnitureName)}
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
      <Divider light />
      <CardActions className="furniture-item-contact">
        <div>
          <Button
            size="small"
            color="primary"
            className="furniture-item-contact-button"
            disableRipple={true}
            onClick={handleOpenModal}
          >
            Contact
          </Button>

          <ContactModal
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
          />
        </div>
      </CardActions>
    </Card>
  );
};

export default FurnitureItem;
