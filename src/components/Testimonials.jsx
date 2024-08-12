import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonial.css'; // Make sure to import your CSS file

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, Company A',
      text: 'This product has revolutionized the way we work. The efficiency and ease of use are unmatched.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqce4wjXwaIb_Rz0IEqY2ipdzRtLm8AYbvlyUACU6akzWB3YRhgtU4buFAIbNG9n4dO0&usqp=CAU',
    },
    {
      name: 'Jane Smith',
      position: 'CTO, Company B',
      text: "An excellent tool that has significantly improved our team's productivity. Highly recommended!",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsLeaAmNV3mfj2Uo6embl-GwfhTky7-WxXg&s',
    },
    {
      name: 'Alex Johnson',
      position: 'Marketing Director, Company C',
      text: 'Fantastic service and support. The product exceeded our expectations and delivered great results.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV88pYXPdJXcBCzFFtQ3n_ituTWu9CVDYwQQ&s',
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="testimonial-card">
                <Card.Img
                  variant="top"
                  src={testimonial.img}
                  className="testimonial-img"
                />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {testimonial.position}
                  </Card.Subtitle>
                  <Card.Text>{testimonial.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
