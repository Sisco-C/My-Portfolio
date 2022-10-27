import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sisco Cherono </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I am a junior developer with a keen eye on developing products to solve socio-cultural and economic problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Athletics
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing for my wistful blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that bring change!"{" "}
          </p>
          <footer className="blockquote-footer">Sisco</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
