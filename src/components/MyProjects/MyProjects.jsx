import React from "react";
import Project from "./Project";
import Recipe from "../../assets/apps/recipe.png";
import TodoApp from "../../assets/apps/TodoApp.png";
import SocialApp from "../../assets/apps/SocialApp.png";
import BookingApp from "../../assets/apps/BookingApp.png";
import Employee from "../../assets/apps/employee.png";
import { Col, Container, Row } from "react-bootstrap";
import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      name: "Recipe Book",
      logo: Recipe,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Bhavana-K-G/recipe-book",
      live: "https://recipe-book-zeta.vercel.app/",
      description: "Recipe Book built on web applications"
    },
    {
      name: "Todo App",
      logo: TodoApp,
      tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      github: "https://github.com/madan3242/React-Js/tree/main/Apps/TodoApp",
      live: "https://github.com/madan3242/React-Js/tree/main/Apps/TodoApp",
      description: "Todo application built on React"
    },
    {
      name: "Employee Management",
      logo: Employee,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/Employee-Management-System",
      live: "https://github.com/madan3242/Employee-Management-System",
      description: "Employee Management System is MERN app built to demonstrate the working of CRUD"
    },
    {
      name: "Social App",
      logo: SocialApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/MERN/tree/main/SocialApp",
      live: "https://github.com/madan3242/MERN/tree/main/SocialApp",
      description: "Social media application built using MERN stack"
    },
    {
      name: "Booking App",
      logo: BookingApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/madan3242/MERN/tree/main/BookingApp",
      live: "https://github.com/madan3242/MERN/tree/main/BookingApp",
      description: "Hotel booking application built using MERN stack"
    },
  ];
  return (
    <>
      <Container className="myprojects" id="myprojects">
        <Row>
          <Col>
            <h2 className="text-center">My Projects</h2>
          </Col>
        </Row>
        <Row>
          {projects.length > 0 ? (
            <>
              {projects.map((project) => {
                return <Project projectdetails={project} key={project.name} />;
              })}
            </>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </>
  );
};

export default MyProjects;
