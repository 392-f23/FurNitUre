import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function ContactModal({ isModalOpen, handleCloseModal, contactDetails }) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="div">
          Contact Information
        </Typography>
        {contactDetails ?  <p>{contactDetails}</p>: <p>contact details go here</p>}
        <Button onClick={handleCloseModal} color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default ContactModal;