import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "./FurnitureContact.css"

function ContactModal({
  isModalOpen,
  handleCloseModal,
  name,
  phoneNumber,
  address,
}) {
  if (!isModalOpen) {
    return null;
  }

  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="div">
          Contact Information
        </Typography>
        <div className="contact-details">
  {name ? (
    <p className="contact-info">
      <span className="info-label">Name:</span> {name}
    </p>
  ) : (
    <p className="info-not-provided">Seller name is not provided</p>
  )}

  {phoneNumber ? (
    <p className="contact-info">
      <span className="info-label">Phone:</span> <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </p>
  ) : (
    <p className="info-not-provided">Seller phone number is not provided</p>
  )}

  {address ? (
    <p className="contact-info">
      <span className="info-label">Address:</span> {address}
    </p>
  ) : (
    <p className="info-not-provided">Seller address is not provided</p>
  )}
</div>

        <Button onClick={handleCloseModal} color="primary">
          Close
        </Button>
      </Box>
    </Modal>
  );
}

export default ContactModal;
