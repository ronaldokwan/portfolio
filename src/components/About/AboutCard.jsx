import "animate.css";
import Card from "react-bootstrap/Card";
import { CgGym } from "react-icons/cg";
import { FaBookOpen, FaGamepad, FaMusic } from "react-icons/fa";
import { SiFedora } from "react-icons/si";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";

function AboutCard() {
  const { ref, inView } = useInView();

  return (
    <Card className="quote-card-view">
      <Card.Body
        className={`${inView ? "animate__animated animate__fadeInLeft" : ""}`}
        ref={ref}
      >
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I&apos;m <span className="purple">Ronaldo Kwan</span>,
            a passionate <span className="purple">Full Stack Developer</span> and
            currently a student at{" "}
            <span className="purple">University of Technology Sydney (UTS)</span>.
            I&apos;m excited to continue growing in the{" "}
            <span className="purple">tech industry</span>.
          </p>

          <p style={{ textAlign: "justify" }}>
            While coding is my true calling, I believe in nurturing a{" "}
            <span className="purple">well-rounded lifestyle</span>. When
            I&apos;m not immersed in code, you&apos;ll find me:
          </p>

          <ul className="about-activity-list">
            <li className="about-activity">
              <VscDebugBreakpointLog className="purple" /> Playing{" "}
              <span className="purple">Video Games</span> <FaGamepad />
            </li>

            <li className="about-activity">
              <VscDebugBreakpointLog className="purple" /> Exploring{" "}
              <span className="purple">Linux</span>, currently Fedora{" "}
              <SiFedora />
            </li>

            <li className="about-activity">
              <VscDebugBreakpointLog className="purple" /> Learning{" "}
              <span className="purple">Philosophy</span> <FaBookOpen />
            </li>

            <li className="about-activity">
              <VscDebugBreakpointLog className="purple" /> Playing{" "}
              <span className="purple">Piano</span> <FaMusic />
            </li>

            <li className="about-activity">
              <VscDebugBreakpointLog className="purple" /> Exercising{" "}
              <span className="purple">Physical Activity</span> <CgGym />
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;