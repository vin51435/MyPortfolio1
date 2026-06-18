import React from "react";
import Card from "react-bootstrap/Card";
import { FaAngleRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body className="p-0">
        <div className="about-para text-start">
          <p className="mb-3">
            Hi, my name is <span className="yellow">Vinay Poojary</span>, a
            developer based in <span className="yellow">Mumbai, India.</span>
          </p>
          <p className="mb-3">
            I am currently pursuing a{" "}
            <span className="yellow">
              Master of Science in Computer Science
            </span>{" "}
            (2024 - Present) at Mumbai University. Previously, I graduated from{" "}
            <span className="yellow">SIWS College, Wadala</span> with a Bachelor
            of Science in Computer Science in 2023.
          </p>
          <p className="mb-4">
            Outside of engineering code, here are a few things that keep me
            inspired:
          </p>
          <ul className="about-activity">
            <li className="about-activity-list">
              <FaAngleRight /> Playing Games
            </li>
            <li className="about-activity-list">
              <FaAngleRight /> Sketching
            </li>
            <li className="about-activity-list">
              <FaAngleRight /> Traveling &amp; Exploring
            </li>
          </ul>

          {/* <div className="mt-5 border-start border-2 border-warning ps-3 py-1">
            <p className="fst-italic text-secondary mb-1" style={{ fontSize: "1.05rem" }}>
              "Pursue your passions and create something extraordinary every day."
            </p>
            <footer className="blockquote-footer text-muted" style={{ fontSize: "0.85rem" }}>Vinay Poojary</footer>
          </div> */}
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
