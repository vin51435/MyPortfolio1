import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className='about-para' style={{ textAlign: "start" }}>
            <span>
              Hi Everyone, I am <span className="yellow">Vinay Poojary</span> from
              <span className="yellow"> Mumbai, India.</span>
            </span>
            <br />
            <span>
              I am currently pursuing a Master's in Computer Science.
            </span>
            <br />
            <span>
              I have completed my graduation with a BSc in Computer Science.
            </span>
            <br />
            <br />
            <span>
              Apart from coding, some other activities that I love to do!
            </span>
          </p>
          <ul className="ml-1" style={{ listStylePosition: 'outside' }}>
            <li className="about-activity">
              Playing Games
            </li>
            <li className="about-activity">
              Sketching
            </li>
            <li className="about-activity">
              Traveling
            </li>
          </ul>

          <p style={{ color: "#d9b400" }}>
            "Pursue your passions and create something extraordinary every day!"
          </p>
          <footer className="blockquote-footer">Vinay</footer>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
