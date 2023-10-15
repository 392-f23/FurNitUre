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
import { useNavigate } from 'react-router-dom';
import "./FurnitureSideBar.less";

const FurnitureSideBar = () => {
  const navigate = useNavigate();
  const createListingHandler = (e) => {
    e.stopPropagation();
    navigate(`/createListing`);
  };

  return (
    <div className="furniture-sidebar">
      <div className="furniture-sidebar-search-container">
        <TextField
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
              <FormControlLabel control={<Checkbox />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Local pickup" />
              <FormControlLabel control={<Checkbox />} label="Shipping" />
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
              <FormControlLabel control={<Checkbox />} label="New" />
              <FormControlLabel
                control={<Checkbox />}
                label="Used - Like new"
              />
              <FormControlLabel control={<Checkbox />} label="Used - Good" />
              <FormControlLabel control={<Checkbox />} label="Used - Fair" />
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
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Bernhardt Furniture"
              />
              <FormControlLabel control={<Checkbox />} label="Ethan Allen" />
              <FormControlLabel
                control={<Checkbox />}
                label="Restoration Hardware"
              />
              <FormControlLabel control={<Checkbox />} label="Serena & Lily" />
              <FormControlLabel control={<Checkbox />} label="Z Gallerie" />
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
              />
              <FormControlLabel control={<Checkbox />} label="Industrial" />
              <FormControlLabel control={<Checkbox />} label="Scandinavian" />
              <FormControlLabel
                control={<Checkbox />}
                label="Bohemian (Boho)"
              />
              <FormControlLabel control={<Checkbox />} label="Farmhouse" />
              <FormControlLabel control={<Checkbox />} label="Shabby Chic" />
              <FormControlLabel control={<Checkbox />} label="Art Deco" />
              <FormControlLabel
                control={<Checkbox />}
                label="Coastal/Hamptons"
              />
              <FormControlLabel control={<Checkbox />} label="Traditiona" />
              <FormControlLabel control={<Checkbox />} label="Contemporary" />
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
              <FormControlLabel control={<Checkbox />} label="Distressed" />
              <FormControlLabel control={<Checkbox />} label="Mirrored" />
              <FormControlLabel control={<Checkbox />} label="Painted" />
              <FormControlLabel control={<Checkbox />} label="Stained" />
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
              <FormControlLabel control={<Checkbox />} label="Fabric" />
              <FormControlLabel control={<Checkbox />} label="Leather" />
              <FormControlLabel control={<Checkbox />} label="Metal" />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="furniture-sidebar-publish-furniture">
        <Button
          size="small"
          className="furniture-sidebar-publish-furniture-button"
          disableRipple={true}
          onClick = {createListingHandler}
        >
          Publish Furniture
        </Button>
      </div>
    </div>
  );
};

export default FurnitureSideBar;
