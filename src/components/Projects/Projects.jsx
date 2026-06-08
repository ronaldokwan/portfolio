import { Container } from "react-bootstrap";
import foodie from "../../Assets/Projects/foodie.png";
import iceCream from "../../Assets/Projects/ice-cream.png";
import note from "../../Assets/Projects/note.png";
import socialMediaMobile from "../../Assets/Projects/social-media-mobile.png";
import {
  fadeDown,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../animations";
import { Reveal } from "../motion";
import { MotionCol, MotionRow } from "../motionComponents";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Reveal variants={fadeDown}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </Reveal>
        <MotionRow
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={iceCream}
              isBlog={false}
              title="Ice Cream Shop"
              description="An e-commerce shop that allows customers to browse and purchase ice cream online"
              techStack="NextJs, Typescript, Tailwind, MongoDB"
              ghLink="https://github.com/ronaldokwan/Ice-Cream"
              // demoLink="https://new-next-gray.vercel.app/"
            />
          </MotionCol>
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie Finder"
              description="A mobile based restaurant finder that helps users discover nearby restaurants using the Google Maps API, with AI-powered recommendations via the ChatGPT API."
              techStack="React Native, MongoDB, Express, Redis, Jest, Expo"
              ghLink="https://github.com/ronaldokwan/Foodie-Finder"
            />
          </MotionCol>
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={socialMediaMobile}
              isBlog={false}
              title="Social media Mobile"
              description="A YouTube-themed mobile social media app that allows users to upload photos and videos, follow other users, and like and comment on posts."
              techStack="React Native, Expo, GraphQL, MongoDB, Redis"
              ghLink="https://github.com/ronaldokwan/Youtube-Mobile"
            />
          </MotionCol>
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taking App"
              description="A note-taking web application to create, edit, and manage notes, integrated with the Midtrans payment API, Google login API, and RapidAPI."
              techStack="React, Redux, Bootstrap, Express, Sequelize, PostgreSQL"
              ghLink="https://github.com/ronaldokwan/Note-Taking-App"
            />
          </MotionCol>{" "}
        </MotionRow>
      </Container>
    </Container>
  );
}

export default Projects;
