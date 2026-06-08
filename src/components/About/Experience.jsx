import Card from "react-bootstrap/Card";
import { staggerContainer, staggerItem, viewportOnce } from "../animations";
import { MotionCol, MotionRow } from "../motionComponents";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "PT Dana Purna Investama",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    period: "June 2024 – January 2025",
    points: [
      "Developed and maintained web apps using JavaScript/jQuery (front-end) and PHP (Laravel/CodeIgniter) (back-end).",
      "Integrated OAuth 2.0 for secure authentication and data exchange.",
      "Upgraded deprecated Google APIs for improved performance and compatibility.",
      "Debugged and optimized web apps, enhancing stability and user experience.",
    ],
  },
  {
    role: "Housekeeper",
    company: "Meriton",
    location: "Chatswood, Sydney, NSW, Australia",
    type: "Part-time",
    period: "June 2025 – Present",
    points: [
      "Cleaned and maintained guest rooms to ensure hygiene, comfort, and presentation.",
    ],
  },
];

function Experience() {
  return (
    <MotionRow
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {experiences.map((exp, index) => (
        <MotionCol
          md={6}
          className="project-card"
          key={index}
          variants={staggerItem}
        >
          <Card className="project-card-view">
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title style={{ fontSize: "1.4em" }}>
                {exp.role}{" "}
                <span className="purple">@ {exp.company}</span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2"
                style={{ color: "#c8a2e0", fontStyle: "italic" }}
              >
                {exp.type} · {exp.location}
                <br />
                {exp.period}
              </Card.Subtitle>
              <ul style={{ textAlign: "justify", paddingLeft: "1.2em" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </MotionCol>
      ))}
    </MotionRow>
  );
}

export default Experience;
