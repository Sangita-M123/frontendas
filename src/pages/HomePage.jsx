import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    title: 'Product 1',
    image: 'https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg',
    price: 29.99,
    description: 'This is a great product.',
  },
  {
    id: 2,
    title: 'Product 2',
    image: 'https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg',
    price: 39.99,
    description: 'This product is awesome.',
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg',
    price: 49.99,
    description: 'You will love this product.',
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg',
    price: 49.99,
    description: 'You will love this product.',
  },
  {
    id: 3,
    title: 'Product 3',
    image: 'https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg',
    price: 49.99,
    description: 'You will love this product.',
  },
  // Add more products as needed
];

const HomePage = () => {
  return (
    <Container>
      <h1 className="my-4">Welcome to Our Shop</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <ProductCard 
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;