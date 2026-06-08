import { motion } from "framer-motion";
import { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import homeLogo from "../../Assets/home-main.svg";
import { fadeLeft, fadeRight, viewportOnce } from "../animations";
import { MotionCol } from "../motionComponents";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
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
            <MotionCol
              md={7}
              className="home-header"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
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
            </MotionCol>
            <MotionCol
              md={5}
              style={{ paddingBottom: 20 }}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </MotionCol>
          </Row>
        </Container>
      </Container>
      <div>
        <a href="#" onClick={scrollToHome2}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <IoIosArrowDown size={40} className="arrow-icon" />
          </motion.span>
        </a>
      </div>
      <div ref={home2Ref}>
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
