import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import CloudStack from "./CloudStack";
import DatabaseStack from "./DatabaseStack";
import FrameworkStack from "./FrameworkStack";
import LanguageStack from "./LanguageStack";
import ToolStack from "./ToolStack";
function About() {
  const { ref, inView } = useInView();
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();
  const { ref: ref4, inView: inView4 } = useInView();
  const { ref: ref5, inView: inView5 } = useInView();

  return (
    <Container fluid className="about-section" style={{ overflow: "hidden" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              className={`${
                inView ? "animate__animated animate__fadeInDown" : ""
              }`}
              ref={ref}
            >
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className={`about-img ${
              inView ? "animate__animated animate__fadeInRight" : ""
            }`}
            ref={ref}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <div
          className={`${
            inView1 ? "animate__animated animate__fadeInLeft" : ""
          }`}
          ref={ref1}
        >
          <h1 className="project-heading">
            <strong className="purple">Programming Languages</strong>
          </h1>

          <LanguageStack />
        </div>

        <div
          className={`${
            inView2 ? "animate__animated animate__fadeInRight" : ""
          }`}
          ref={ref2}
        >
          <h1 className="project-heading">
            <strong className="purple">Databases</strong>
          </h1>
          <DatabaseStack />
        </div>

        <div
          className={`${
            inView3 ? "animate__animated animate__fadeInLeft" : ""
          }`}
          ref={ref3}
        >
          <h1 className="project-heading">
            <strong className="purple">Libraries/Frameworks</strong>
          </h1>
          <FrameworkStack />
        </div>

        <div
          className={`${
            inView4 ? "animate__animated animate__fadeInRight" : ""
          }`}
          ref={ref4}
        >
          <h1 className="project-heading">
            <strong className="purple">Cloud Computing</strong>
          </h1>
          <CloudStack />
        </div>

        <div
          className={`${
            inView5 ? "animate__animated animate__fadeInLeft" : ""
          }`}
          ref={ref5}
        >
          <h1 className="project-heading">
            <strong className="purple">Tools</strong>
          </h1>
          <ToolStack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
