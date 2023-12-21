import React from "react";
import "./ContactMe.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ContactMe = () => {
  return (
    <>
      <Container className="contactme" id="contactme">
        <Row>
          <Col><h2>Contact Me</h2></Col>
        </Row>
        <Row>
          <Col lg={6} className="mx-auto">
            <Form target="_blank" action="https://formsubmit.co/bhavanakgowda812@gmail.com" method="POST">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required/>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your Email" required/>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" cols="30" rows="5" placeholder="Your Message" required/>
              </Form.Group>
              <Button type="submit" className="contact-btn mt-3" variant="none">Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMe;
