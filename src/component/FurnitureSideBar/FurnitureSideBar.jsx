import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FurnitureSideBar.less";
import { useAuthState } from "../../utilities/firebase.js";

const FurnitureSideBar = ({ onSearch, onFilter }) => {
  const navigate = useNavigate();
  const createListingHandler = (e) => {
    e.stopPropagation();
    navigate(`/createListing`);
  };
  const [user] = useAuthState();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="furniture-sidebar">
      <div className="furniture-sidebar-search-container">
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            fieldset: { border: "2px solid black" },
          }}
          label="Search"
          className="furniture-sidebar-search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="furniture-sidebar-filter-container">
        <Typography>Filter</Typography>
      </div>

      <div className="furniture-sidebar-accrodin-container">
        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Delivery Method</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="All"
                onChange={() => onFilter("All")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Local pickup"
                onChange={() => onFilter("Local pickup")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Shipping"
                onChange={() => onFilter("Shipping")}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Condition</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="New"
                onChange={() => onFilter("New")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Used - Like new"
                onChange={() => onFilter("Used - Like new")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Used - Good"
                onChange={() => onFilter("Used - Good")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Used - Fair"
                onChange={() => onFilter("Used - Fair")}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Brand</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="Ballard Designs"
                onChange={() => onFilter("Ballard Designs")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bernhardt Furniture"
                onChange={() => onFilter("Bernhardt Furniture")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Ethan Allen"
                onChange={() => onFilter("Ethan Allen")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Restoration Hardware"
                onChange={() => onFilter("Restoration Hardware")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Serena & Lily"
                onChange={() => onFilter("Serena & Lily")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Z Gallerie"
                onChange={() => onFilter("Z Gallerie")}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Decor Style</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="Mid-Century Modern"
                onChange={() => onFilter("Mid-Century Modern")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Industrial"
                onChange={() => onFilter("Industrial")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Scandinavian"
                onChange={() => onFilter("Scandinavian")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bohemian (Boho)"
                onChange={() => onFilter("Bohemian (Boho)")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Farmhouse"
                onChange={() => onFilter("Farmhouse")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Shabby Chic"
                onChange={() => onFilter("Shabby Chic")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Art Deco"
                onChange={() => onFilter("Art Deco")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Coastal/Hamptons"
                onChange={() => onFilter("Coastal/Hamptons")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Traditiona"
                onChange={() => onFilter("Traditiona")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Contemporary"
                onChange={() => onFilter("Contemporary")}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Finish</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="Distressed"
                onChange={() => onFilter("Distressed")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Mirrored"
                onChange={() => onFilter("Mirrored")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Painted"
                onChange={() => onFilter("Painted")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Stained"
                onChange={() => onFilter("Stained")}
              />
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion disableGutters className="furniture-sidebar-accrodin">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Material</Typography>
          </AccordionSummary>
          <AccordionDetails className="furniture-sidebar-accrodin-content">
            <div className="furniture-sidebar-accrodin-checkbox-container">
              <FormControlLabel
                control={<Checkbox />}
                label="Fabric"
                onChange={() => onFilter("Fabric")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Leather"
                onChange={() => onFilter("Leather")}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Metal"
                onChange={() => onFilter("Metal")}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      {user && (
        <div className="furniture-sidebar-publish-furniture">
          <Button
            size="small"
            className="furniture-sidebar-publish-furniture-button"
            disableRipple={true}
            onClick={createListingHandler}
          >
            Publish Furniture
          </Button>
        </div>
      )}
    </div>
  );
};

export default FurnitureSideBar;
