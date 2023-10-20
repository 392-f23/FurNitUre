import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import furniturePlaceholder from "./furniturePlaceHolder.png";
import "./FurnitureAddForm.less";
import { getFirebaseStorage } from "../../utilities/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { getDatabase, ref, push } from "firebase/database";
import { database, useDbUpdate } from '../../utilities/firebase';


const initialFormState = {
  Item: "",
  Description: "",
  Price: "",
  Location: "",
  DeliveryMethod: "",
  Condition: "",
  Material: "",
  Finish: "",
  DecorStyle: "",
  Brand: "",
  Image: "", 
};


const InputField = ({ name, text, state, change }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    change({ ...state, [name]: newValue });
    
    if (isValidURL(newValue)) {
      setUploadedImage(newValue);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {text}
      </label>
      <input
        className="form-control"
        id={name}
        name={name}
        value={state[name] || ''} 
        onChange={handleChange}
      />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
  );
};

const ButtonBar = ({ message, disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="bar">
      <button type="button" className="btn btn-outline-dark mx-auto  me-2" onClick={() => navigate(-1)}>
        Cancel
      </button>
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>
        Submit
      </button>
      <span className="p-2">{message}</span>
    </div>
  );
};
function isValidURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + 
    '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + 
    '((\\d{1,3}\\.){3}\\d{1,3}))' + 
    '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + 
    '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + 
    '(\\#[-a-zA-Z\\d_]*)?$', 'i'); 

  return !!pattern.test(str);
}

const AddForm = ({ addFurniture }) => {
  const navigate = useNavigate();
  const [update, result] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [focused, setFocused] = useState(null);
  const [state, change] = useState(initialFormState);
  const [buttonClass, setButtonClass] = useState({
    DeliveryMethod: "",
    Condition: "",
    Material: "",
    Finish: "",
    Brand: "",
    DecorStyle: "",
    
  });
  const [showInputFields, setShowInputFields] = useState({
    DeliveryMethod: false,
    Condition: false,
    Material: false,
    Finish: false,
    Brand: false,
    DecorStyle: false,
  });

  const uploadImage = (image) => {
    if (image == null) {
      return Promise.resolve(null);
    }
    const storage = getFirebaseStorage();
    const imageRef = storageRef(storage, `images/${image.name + uuidv4()}`);

    return uploadBytes(imageRef, image).then(() => {
      return getDownloadURL(imageRef);
    });
  };

  const handleUploadImage = (e) => {
    uploadImage(e.target.files[0])
      .then((url) => {
        if (url) {
          setUploadedImage(url)
        }
      })
      .catch((error) => {
        console.error("Error during the image upload:", error);
      });
  }

  const toggleInputFields = (field) => {
    setShowInputFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
    setButtonClass((prevState) => ({
      ...prevState,
      [field]: !prevState[field] ? "green-button" : "",
    }));
  };

  const addData = (path, newItem) => {
    const newItemRef = ref(database, path);
    push(newItemRef, newItem)
      .then(() => {
        console.log("Furniture added successfully.");
      })
      .catch((error) => {
        console.error("Error adding furniture: ", error);
      });
  };
  

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      furnitureName: state.Item,
      imageLink: state.Image,
      description: state.Description, Location: state.Location,
      price: state.Price,
      sellerName: null,
      sellerAddress: null,
      sellerPhoneNumber: null,
      deliveryMethod: showInputFields.DeliveryMethod ? state.DeliveryMethod : null,
      condition: showInputFields.Condition ? state.Condition : null,
      brand : showInputFields.Brand ? state.Brand: null,
      decorStyle: showInputFields.DecorStyle ? state.DecorStyle: null,
      finish: showInputFields.Finish ? state.Finish : null,
      material: showInputFields.Material ? state.Material : null,    
    };
    console.log(formData);
    addFurniture(formData);

    addData('furniture/items', formData);

    navigate(-1);
    //alert("Submitted");
  };

  return (
    <div className="scrolling">
      <div className="topPad"></div>
    
      <Card
        variant="outlined"
        sx={{
          maxWidth: "90%",
          width: "600px",
          margin: "0 auto",
          backgroundColor: "whitesmoke",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" color="textSecondary">
                Include a Picture:
              </Typography>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <input type="file" className="visually-hidden-input"
                    onChange={handleUploadImage}/>
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
        <CardMedia
          component="img"
          alt="Image Preview"
          height="500"
          image={state.Image || uploadedImage || furniturePlaceholder}
        />

        <form onSubmit={submit} noValidate className={state.errors ? "was-validated" : null}>
          <InputField name="Item" text="Item" state={state} change={change} />
          <InputField name="Description" text="Description" state={state} change={change} />
          <InputField name="Price" text="Price" state={state} change={change} />
          
          {showInputFields.DeliveryMethod && (
            <InputField name="DeliveryMethod" text="Delivery Method" state={state} change={change} />
          )}
          {showInputFields.Condition && (
            <InputField name="Condition" text="Condition" state={state} change={change} />
          )}
          {showInputFields.Material && (
            <InputField name="Material" text="Material" state={state} change={change} />
          )}
          {showInputFields.Finish && (
            <InputField name="Finish" text="Finish" state={state} change={change} />
          )}
          {showInputFields.Brand && (
            <InputField name="Brand" text="Brand" state={state} change={change} />
          )}
          {showInputFields.DecorStyle && (
            <InputField name="DecorStyle" text="DecorStyle" state={state} change={change} />
          )}
          <div className="bar">
            Add More Information:
          <button className={`mx-auto ${buttonClass.DeliveryMethod}`} type="button"
            onClick={() => toggleInputFields("DeliveryMethod")}
          >
            Delivery Method
          </button>
          <button className={`mx-auto ${buttonClass.Condition}`} type="button" onClick={() => toggleInputFields("Condition")}>
            Condition
          </button>
          <button className={`mx-auto ${buttonClass.Material}`} type="button" onClick={() => toggleInputFields("Material")}>
            Material
          </button>
          <button  className={`mx-auto ${buttonClass.Finish}`} type="button" onClick={() => toggleInputFields("Finish")}>
            Finish
          </button>
          <button  className={`mx-auto ${buttonClass.DecorStyle}`} type="button" onClick={() => toggleInputFields("DecorStyle")}>
            Decor Style
          </button>
          <button  className={`mx-auto ${buttonClass.Brand}`}type="button" onClick={() => toggleInputFields("Brand")}>
            Brand
          </button>
          </div>
          <ButtonBar message={result?.message} />
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
