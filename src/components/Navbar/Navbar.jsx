import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { GoMail } from "react-icons/go";
import './navbar.css';

const HomeNavbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Navbar style={{ position: "fixed"}}>
          <Container>
            <Nav className="text-center mx-auto">
              <Nav.Item className="mx-2">
                <a href="#home" className="nav-link">
                  <AiOutlineHome size={35} />
                </a>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <a href="#aboutme" className="nav-link">
                  <GrEmoji size={35} />
                </a>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <a href="#myprojects" className="nav-link">
                  <CgWebsite size={35} />
                </a>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <a href="#contactme" className="nav-link">
                  <GoMail size={35} />
                </a>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default HomeNavbar;
