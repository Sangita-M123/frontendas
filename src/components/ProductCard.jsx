import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, image, price, description }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          <strong>${price}</strong>
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;