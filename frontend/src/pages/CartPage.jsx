import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const CartPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Cart</Typography>
    <List>
      {/* Example cart item */}
      <ListItem>
        <ListItemText primary="Product Name" secondary="Quantity: 1" />
        <Button variant="contained" color="secondary">Remove</Button>
      </ListItem>
    </List>
    <Button variant="contained" color="primary">Checkout</Button>
  </Container>
);

export default CartPage;
