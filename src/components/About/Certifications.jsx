import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import { staggerContainer, staggerItem, viewportOnce } from "../animations";
import { MotionCol, MotionRow } from "../motionComponents";

// TODO: replace the "#" placeholders with the real certificate URLs.
const certifications = [
  {
    title: "IELTS",
    issuer: "Overall Band 7.0",
    link: "#",
  },
  {
    title: "Web Design for Everybody",
    issuer: "University of Michigan",
    link: "#",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    link: "#",
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    link: "#",
  },
];

function Certifications() {
  return (
    <MotionRow
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {certifications.map((cert, index) => (
        <MotionCol
          md={3}
          xs={6}
          className="project-card"
          key={index}
          variants={staggerItem}
        >
          <Card className="project-card-view" style={{ textAlign: "center" }}>
            <Card.Body>
              <FaCertificate
                className="purple"
                style={{ fontSize: "2.5em", marginBottom: "12px" }}
              />
              <Card.Title style={{ fontSize: "1.1em" }}>
                {cert.title}
              </Card.Title>
              <Card.Subtitle
                className="purple mb-3"
                style={{ fontStyle: "italic" }}
              >
                {cert.issuer}
              </Card.Subtitle>
              <Button
                variant="primary"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;Certificate
              </Button>
            </Card.Body>
          </Card>
        </MotionCol>
      ))}
    </MotionRow>
  );
}

export default Certifications;
