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

const initialFormState = {
  Item: "",
  Description: "",
  Price: "",
  Location: "",
  DeliveryMethod: "",
  Condition: "",
  Material: "",
  Finish: "",
};

const InputField = ({ name, text, state, change }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {text}
    </label>
    <input
      className="form-control"
      id={name}
      name={name}
      value={state[name]} 
      onChange={(e) => change({ ...state, [name]: e.target.value })}

    />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

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

const AddForm = ({ addFurniture }) => {
  const navigate = useNavigate();
  const [update, result] = useState("");
  const [focused, setFocused] = useState(null);
  const [state, change] = useState(initialFormState);
  const [showInputFields, setShowInputFields] = useState({
    DeliveryMethod: false,
    Condition: false,
    Material: false,
    Finish: false,
  });

  const toggleInputFields = (field) => {
    setShowInputFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      item: state.Item,
      image: null,
      price: state.Price,
      description: state.Description,
      
    };
/*    Location: state.Location,
      DeliveryMethod: showInputFields.DeliveryMethod ? state.DeliveryMethod : null,
      Condition: showInputFields.Condition ? state.Condition : null,
      Material: showInputFields.Material ? state.Material : null,
      Finish: showInputFields.Finish ? state.Finish : null, */
    console.log(formData);
    addFurniture(formData);
    navigate(-1);
    //alert("Submitted");
  };

  return (
    <>
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

        <form onSubmit={submit} noValidate className={state.errors ? "was-validated" : null}>
          <InputField name="Item" text="Item" state={state} change={change} />
          <InputField name="Description" text="Description" state={state} change={change} />
          <InputField name="Price" text="Price" state={state} change={change} />
          <InputField name="Location" text="Location" state={state} change={change} />
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
          <div className="bar">
            Add More Information:
          <button className="mx-auto " type="button"
            onClick={() => toggleInputFields("DeliveryMethod")}
          >
            Delivery Method
          </button>
          <button className="mx-auto" type="button" onClick={() => toggleInputFields("Condition")}>
            Condition
          </button>
          <button className="mx-auto" type="button" onClick={() => toggleInputFields("Material")}>
            Material
          </button>
          <button  className="mx-auto"type="button" onClick={() => toggleInputFields("Finish")}>
            Finish
          </button>
          </div>
          <ButtonBar message={result?.message} />
        </form>
      </Card>
    </>
  );
};

export default AddForm;
