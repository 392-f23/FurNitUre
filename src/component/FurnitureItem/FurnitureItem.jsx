import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./FurnitureItem.less";

const FurnitureItem = () => {
  return (
    <Card className="furniture-item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn.jsdelivr.net/gh/Hongda-OSU/PicGo/image/table.jpg"
          alt="Image "
        />
        <CardContent className="furniture-item-content">
          <Typography
            variant="h5"
            component="div"
            className="furniture-item-name"
          >
            Furniture
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className="furniture-item-price"
          >
            $40
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="furniture-item-description"
          >
            Discover the essence of elegant living with this exquisitely
            handcrafted table, blending modern design with traditional
            craftsmanship. Its sleek lines and robust wooden structure infuse a
            touch of unique charm into your living space. Every detail is
            meticulously refined, ensuring it's not just a practical piece of
            furniture but an artistic statement. Moreover, its multifunctional
            design makes it suitable for various settings, be it a formal office
            environment or a cozy home ambiance. Choose our table and elevate
            your space with distinctive style.
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
