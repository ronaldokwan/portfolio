import "animate.css";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  // user in view
  const { ref, inView } = useInView();

  // scroll to home2
  const home2Ref = useRef(null);
  const scrollToHome2 = (event) => {
    event.preventDefault();
    home2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // to hide the overflow from the animation
    <section style={{ overflow: "hidden" }}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className={`home-header ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
              ref={ref}
            >
              <h1 style={{ paddingBottom: 15 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I&apos;M <strong className="main-name"> RONALDO KWAN</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col
              md={5}
              style={{ paddingBottom: 20 }}
              className={`${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
              ref={ref}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div ref={ref}>
        <a href="#" onClick={scrollToHome2}>
          <IoIosArrowDown
            size={40}
            className={`arrow-icon ${
              inView ? "animate__animated animate__bounceInDown" : ""
            }`}
          />
        </a>
      </div>
      <div ref={home2Ref}>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
