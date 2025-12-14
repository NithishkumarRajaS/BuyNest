import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const PaymentPage = () => (
  <Container maxWidth="xs">
    <Typography variant="h5" gutterBottom>Payment</Typography>
    <TextField label="Card Number" fullWidth margin="normal" />
    <TextField label="Expiry Date" fullWidth margin="normal" />
    <TextField label="CVV" fullWidth margin="normal" />
    <Button variant="contained" color="primary" fullWidth>Pay</Button>
  </Container>
);

export default PaymentPage;
