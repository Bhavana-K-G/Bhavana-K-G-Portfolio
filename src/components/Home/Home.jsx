import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Developer.", "Frappe Developer.", "Web Developer."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    })

    return () => {
      typed.destroy();
    }
  })
  return (
    <>
      <Container id="home">
        <Row>
          <Col>
            <div className="home text-center">
              <div className="heading">
                <h2 className="slide-up">Hello I'm</h2>
                <h1 className="slide-up">Bhavana K G</h1>
                <h2 className="slide-up">I'm a <span ref={el}></span></h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
