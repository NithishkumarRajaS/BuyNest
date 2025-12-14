import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const OrderPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Orders</Typography>
    <List>
      {/* Example order item */}
      <ListItem>
        <ListItemText primary="Order #12345" secondary="Status: Delivered" />
      </ListItem>
    </List>
  </Container>
);

export default OrderPage;
