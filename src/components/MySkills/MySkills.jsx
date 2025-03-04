import React from "react";
import "./MySkills.css";
import { Skills } from "./Skills";

import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import js from "../../assets/logos/js.png";
import bs from "../../assets/logos/bs.png";
import react from "../../assets/logos/react.png";

import node from "../../assets/logos/node.png";
import mongodb from "../../assets/logos/mongodb.png";
import mysql from "../../assets/logos/mysql.png";
import git from "../../assets/logos/git.png";
import github from "../../assets/logos/github.png";
import Python from "../../assets/logos/Python.png";
import Frappe from "../../assets/logos/Frappe.png";
import redux from "../../assets/logos/redux.png";
import express from "../../assets/logos/express.png";
import Java from "../../assets/logos/Java.png";


import { Col, Container, Row } from "react-bootstrap";

const MySkills = () => {
  const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "Bootstrap", logo: bs },
    { name: "React", logo: react },
    { name: "Nodejs", logo: node },
    { name: "MongoDB", logo: mongodb },
    { name: "MySQL", logo: mysql },
    { name: "Git", logo: git },
    { name: "Github", logo: github },
    { name: "Python", logo: Python },
    { name: "Frappe", logo: Frappe}
  ];
  return (
    <>
      <Container className="my-4 myskills">
        <Row>
          <Col className="text-center">
            <h2>My Skills</h2>
          </Col>
        </Row>
        <Row>
          {skills.length > 0 ? (
            <>
              {skills.map((skill) => {
                return (
                  <Skills
                    name={skill.name}
                    logo={skill.logo}
                    key={skill.name}
                  />
                );
              })}
            </>
          ) : null}
        </Row>
      </Container>
    </>
  );
};

export default MySkills;
