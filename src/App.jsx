import React from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Card,
  Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Navbar className="navbar1 shadow p-3 mb-5 bg-white rounded " expand="lg">
        <Container>
          <img
            src="https://i.pinimg.com/originals/82/ca/47/82ca47e16d1b19ee598a3e66e7d513de.jpg"
            alt="logo"
            className="img-logo"
            style={{
              width: '50px',
              height: '50px',
              paddingRight: '4px',
              marginRight: '4px',
            }}
          />
          <Navbar.Brand href="#home">SHOPPING WORLD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#productpage">Product Page</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contacts">Contacts us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={6} className="text-center text-md-left">
            <h1>SHOPPING SITE</h1>
            <p>Welcome to ShopEase! Discover a world of unparalleled style and convenience. From the latest fashion trends to essential home goods, we offer a curated selection of high-quality products that cater to every need and taste. Shop with confidence and enjoy a seamless shopping experience from start to finish.</p>
            <Button variant="primary" className="b1 m-4 pr-4">
              Get Started
            </Button>
            <Button variant="secondary" className="b1 ml-4 pl-4">
              Contact Us
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4bfEW5zQjzI1LfOwT-Mx22LqfeKHptxj3w&s"
              alt="Home"
              className="img-fluid"
              style={{ width: '500%', height: '95%' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE4W6KsnHP4zQ8QbzUbQDBc-nGJdOLAno0A&s"
              alt="Feature"
              className="img-fluid"
              style={{ width: '500%', height: '95%' }}
            />
          </Col>
          <Col md={6}>
            <h3>SHOP NOW</h3>
            <p className="text1">ShopSmarter, LiveBetter at TrendyThreads, where fashion meets function. Explore our exclusive collections, tailored just for you</p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h3>SHOP NOW</h3>
            <p>enjoy hassle-free returns, secure checkout, and 24/7 customer support. Elevate your shopping experience and find your new favorites today!</p>
          </Col>
          <Col md={6}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHieGRr9Pd7KLeVpQWDGNDPEIFcuAEff4zTg&s"
              alt="Feature"
              className="img-fluid"
              style={{ width: '500%', height: '95%' }}
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <h2
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4px',
            paddingBottom: '4px',
          }}
        >
          PRODUCTS
        </h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8vtM-LzoiA0rhdThn-W-CVi1K3aneLDcHQ&s"
                style={{ width: '100%', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>Dress</Card.Title>
                <Card.Text> Perfect for both formal events and casual outings, it offers effortless style and comfort.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Yf9FwIqUV29m8gdA0WwTm41kz_PgnvD_ow3-Qr28qM6bJrRu47vhEauYjBEXyBOkRmQ&usqp=CAU"
                style={{ width: '100%', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>Dress</Card.Title>
                <Card.Text> Perfect for both formal events and casual outings, it offers effortless style and comfort.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wnjlFwh1FEudzmVP0q62lkTBEjp72E958A&s"
                style={{ width: '100%', height: '400px' }}
              />
              <Card.Body>
                <Card.Title>Dress</Card.Title>
                <Card.Text> Perfect for both formal events and casual outings, it offers effortless style and comfort.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <Testimonials />
            {/* Add testimonials content here */}
          </Col>
        </Row>
      </Container>

      <Container style={{width:"80%"}} className="mt-5">
        <Row>
          <Col>
            <h2>Contact Us</h2>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="pt-4">

      <footer>
        <div className="container container-footer">
          <div className="footer1">
            <a href="#" className="footer-logo">
              <h4>CONTACT US</h4>
            </a>
            <h5>E mail</h5>
            <p>contact@shoppingsite.com</p>
            <h5>Phone</h5>
            <p>1234567890</p>
            <h5>Address</h5>
            <p>c-260 ,sector-73,Nagpur,M-440023</p>
          </div>

          <div className="footer2">
            <h4>COMPANY</h4>
            <ul className="permalinks">
              <li>
                <a href="#">About Us</a>{' '}
              </li>
              <li>
                <a href="#">Services</a>{' '}
              </li>
              <li>
                <a href="#">Career</a>{' '}
              </li>
              <li>
                <a href="#">Development Process</a>{' '}
              </li>
            </ul>
          </div>

          <div className="footer3">
            <h4>SERVICE</h4>
            <ul className="privacy">
              <li>
                <a href="#">Website Development</a>
              </li>
              <li>
                <a href="#">Moblie App Development</a>
              </li>
              <li>
                <a href="#">E-commerce Development</a>
              </li>
            </ul>
          </div>

          <div className="footer4">
            <h4>SUPPORT</h4>
            <div>
              <p>Contact</p>
              <p>Term & Policy</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <small>copyright &copy; SHOPPING</small>
        </div>
      </footer>
      </div>
     
      {/* <footer className="mt-5 bg-dark text-white text-center p-3">
        <Container>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </Container>
      </footer> */}
    </>
  );
};

export default App;
