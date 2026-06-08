import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  const { ref, inView } = useInView();

  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ overflow: "hidden" }}
    >
      <Container>
        <Row>
          <h1
            style={{ fontSize: "2.6em" }}
            className={`home-about-description ${
              inView ? "animate__animated animate__fadeInDown" : ""
            }`}
            ref={ref}
          >
            LET ME <span className="purple">INTRODUCE</span> MYSELF
          </h1>

          <Col
            md={8}
            className={`home-about-description ${
              inView ? "animate__animated animate__fadeInLeft" : ""
            }`}
            ref={ref}
          >
            <p className="home-about-body">
              I am a passionate{" "}
              <i>
                <b className="purple">Full Stack Web Developer</b>
              </i>{" "}
              with a desire to learn and grow in the field of computer science.
              <br />
              <br />
              Proficient in{" "}
              <i>
                <b className="purple">
                  JavaScript, TypeScript, Python, C, and C++
                </b>
              </i>
              , I thrive on crafting robust web applications using{" "}
              <b className="purple">Node.js</b> and modern{" "}
              <i>
                <b className="purple">JavaScript libraries and frameworks</b>
              </i>{" "}
              such as{" "}
              <i>
                <b className="purple">
                  React.js, Next.js, Express, and Sequelize
                </b>
              </i>
              .
            </p>
          </Col>
          <Col
            md={4}
            className={`myAvatar ${
              inView ? "animate__animated animate__fadeInRight" : ""
            }`}
            ref={ref}
          >
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className={`home-about-social ${
              inView ? "animate__animated animate__fadeIn animate__slow" : ""
            }`}
            ref={ref}
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
