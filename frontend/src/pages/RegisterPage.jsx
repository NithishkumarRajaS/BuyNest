import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const RegisterPage = () => (
  <Container maxWidth="xs">
    <Typography variant="h5" gutterBottom>Register</Typography>
    <TextField label="Username" fullWidth margin="normal" />
    <TextField label="Password" type="password" fullWidth margin="normal" />
    <TextField label="Role" fullWidth margin="normal" />
    <Button variant="contained" color="primary" fullWidth>Register</Button>
  </Container>
);

export default RegisterPage;
