import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const LoginPage = () => (
  <Container maxWidth="xs">
    <Typography variant="h5" gutterBottom>Login</Typography>
    <TextField label="Username" fullWidth margin="normal" />
    <TextField label="Password" type="password" fullWidth margin="normal" />
    <Button variant="contained" color="primary" fullWidth>Login</Button>
  </Container>
);

export default LoginPage;
