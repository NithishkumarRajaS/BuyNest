import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const ProductCatalogPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>Product Catalog</Typography>
    <Grid container spacing={2}>
      {/* Example product card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6">Product Name</Typography>
            <Typography variant="body2">Description</Typography>
            <Typography variant="body1">$99.99</Typography>
            <Button variant="contained" color="primary">Add to Cart</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default ProductCatalogPage;
