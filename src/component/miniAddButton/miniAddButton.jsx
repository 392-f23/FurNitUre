import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddForm from "../FurnitureAddForm/FurnitureAddForm";
import './miniAddButton.less';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 5,
  };
  
  export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button variant="outlined" onClick={handleOpen} >Create Listing</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-0"
          aria-describedby="modal-1"
        >
          <Box sx={style} id="modal-1">
           <AddForm/>
          </Box>
        </Modal>
      </div>
    );
  }