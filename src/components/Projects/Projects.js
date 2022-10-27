import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travel from "../../Assets/Projects/travel.jpg";
import drowsiness from "../../Assets/Projects/drowsiness.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import garage from "../../Assets/Projects/garage.jpg";
import geolocator from "../../Assets/Projects/geolocator.jpg";
import location from "../../Assets/Projects/location.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garage}
              isBlog={false}
              title="Home page for a car mobile app"
              description="Home Page build with React Native, Material-UI, and Context. Have features which allows user to interact with the mobile app."
              ghLink="https://github.com/Sisco-C/McarrfixUI"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="React E-commerce Website"
              description=" An e-commerce website built using Reactjs, Bulma CSS, and Context API.
              The E-commerce website is allows for users to purchase products and allow addition to cart, as well as shipping. "
              ghLink="https://github.com/Sisco-C/ReactEcommerce"
              demoLink="https://reactecommerce-sisco.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Bon Vivant Art and Travel Website"
              description="A full-stack website created using PHP, MySql html5, css, and javascript code. The website allows the user to upload, shop for art, books and book travel escapades. It also provides for the user to upload their travel blogs to the website. The database stores customer data to be processed."
              ghLink="https://github.com/Sisco-C/Bon-Vivant-Art-book-And-Travel-Website"
              demoLink="https://bonvivantapp.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="Device Location Finder"
              description="This is an application that helps a user track a phone using the ip address. It has been built using Pyhton3, and its libraries: Sockets, Figlet, and requests. The tests have been written and ran successfully using pytest. We also employ the use of Google maps API."
              ghLink="https://github.com/Sisco-C/dev-program/tree/main/Device%20LOcation%20Finder"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geolocator}
              isBlog={false}
              title="Geolocator Application"
              description="Using the Python library Nominatim, this application allows for a user to geolocate a destination, or place by just entering the latitude and longitude."
              ghLink="https://github.com/Sisco-C/dev-program/blob/main/day4/q4question3.py"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drowsiness}
              isBlog={false}
              title="AI Drowsiness Detection System"
              description="An AI model system the detects drowsiness in traffic drivers. Using Python libraries such as:Scipy Spatial, Imutils, Dlib and OpenCV2."
              ghLink="https://github.com/PrimeConsultancy/kusinzia-mshirika-dashibodi"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
