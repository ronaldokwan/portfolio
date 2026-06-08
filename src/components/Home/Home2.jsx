import { Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  viewportOnce,
} from "../animations";
import { MotionCol } from "../motionComponents";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ overflow: "hidden" }}
    >
      <Container>
        <Row>
          <MotionCol
            xs={12}
            className="home-about-description"
            variants={fadeDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
          </MotionCol>

          <MotionCol
            md={8}
            className="home-about-description"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="home-about-body">
              I am a passionate{" "}
              <i>
                <b className="purple">Full Stack Developer</b>
              </i>{" "}
              with a strong foundation in computer science and a passion for
              creating efficient, user-friendly applications.
              <br />
              <br />
              Proficient in{" "}
              <i>
                <b className="purple">
                  JavaScript, TypeScript, PHP, Python, C, and C++
                </b>
              </i>
              , I thrive on building{" "}
              <b className="purple">RESTful APIs</b> and crafting robust web
              applications using{" "}
              <i>
                <b className="purple">
                  React.js, Next.js, Node.js, Express, and Laravel
                </b>
              </i>
              , while integrating third-party services to bring ideas to life.
            </p>
          </MotionCol>
          <MotionCol
            md={4}
            className="myAvatar"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </MotionCol>
        </Row>
        <Row>
          <MotionCol
            md={12}
            className="home-about-social"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ronaldokwan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ronaldokwan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </MotionCol>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
