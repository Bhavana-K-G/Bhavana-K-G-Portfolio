import React from "react";
import Project from "./Project";
import Recipe from "../../assets/apps/recipe.png";
import BMI from "../../assets/apps/bmicalc.png";
import ZibberApp from "../../assets/apps/zibberapp.png";
import SocialApp from "../../assets/apps/SocialApp.png";
import BookingApp from "../../assets/apps/BookingApp.png";
import Employee from "../../assets/apps/employee.png";
import GST from "../../assets/apps/gst.png"
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
      name: "BMI Calculator",
      logo: BMI,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Bhavana-K-G/BMI-Calculator",
      live: "https://bmi-calculator-blond-sigma.vercel.app/",
      description: "BMI Calculatorbuilt on web applications"
    },
    {
      name: "Zibber App",
      logo: ZibberApp,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      github: "https://github.com/Bhavana-K-G/Zibber-App",
      live: "https://zibber-app.vercel.app/",
      description: "zibber application built on React"
    },
    {
      name: "SocioPedia",
      logo: SocialApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/Bhavana-K-G/sociopedia-app",
      live: "",
      description: "Social media application built using MERN stack"
    },
    {
      name: "Booking App",
      logo: BookingApp,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/Bhavana-K-G/Booking-App",
      live: "",
      description: "Hotel booking application built using MERN stack"
    },
    {
      name: "GST-Search",
      logo: GST,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/Bhavana-K-G/GST-Search",
      live: "",
      description: "GST-Search is MERN app built to demonstrate the working of CRUD"
    },
    {
      name: "Employee Management",
      logo: Employee,
      tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
      github: "https://github.com/Bhavana-K-G/Employee-Management-System",
      live: "",
      description: "Employee Management System is MERN app built to demonstrate the working of CRUD"
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
