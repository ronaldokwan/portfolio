import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import foodie from "../../Assets/Projects/foodie.png";
import iceCream from "../../Assets/Projects/ice-cream.png";
import note from "../../Assets/Projects/note.png";
import socialMediaMobile from "../../Assets/Projects/social-media-mobile.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  const { ref, inView } = useInView();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div
          className={`${inView ? "animate__animated animate__fadeInDown" : ""}`}
          ref={ref}
        >
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iceCream}
              isBlog={false}
              title="Ice Cream Shop"
              description="An e-commerce shop that allows customers to browse and purchase ice cream online"
              techStack="NextJs, Typescript, Tailwind, MongoDB"
              ghLink="https://github.com/ronaldokwan/Ice-Cream"
              // demoLink="https://new-next-gray.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie Finder"
              description="A mobile based social media app that allows users search nearby restaurant using google map api and post photos and description of restaurants they visited."
              techStack="React Native, MongoDB, Express, Redis, Jest, Expo"
              ghLink="https://github.com/ronaldokwan/Foodie-Finder"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMediaMobile}
              isBlog={false}
              title="Social media Mobile"
              description="A mobile based social media app that allows users to upload photos and videos, follow other users, and like and comment on posts."
              techStack="React Native, Expo, GraphQL, MongoDB, Redis"
              ghLink="https://github.com/ronaldokwan/Youtube-Mobile"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taking App"
              description="A note-taking web application that allows users to create, edit, and manage their notes in a digital format, accessible through a web browser."
              techStack="React, Redux, Bootstrap, Express, Sequelize, PostgreSQL, "
              ghLink="https://github.com/ronaldokwan/Note-Taking-App"
            />
          </Col>{" "}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
