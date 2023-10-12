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
        <Button
          size="small"
          color="primary"
          className="furniture-item-contact-button"
          disableRipple={true}
        >
          Contact
        </Button>
      </CardActions>
    </Card>
  );
};

export default FurnitureItem;
