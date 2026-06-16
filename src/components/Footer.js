import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  let date = new Date();
  let year = date.getFullYear();

  // Exclude footer from home page as home page has its own social footer section.
  if (location.pathname === '/') {
    return null;
  }

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="6" className="footer-copywright text-center text-md-start">
          <h3>Designed & Developed by Vinay Poojary &copy; {year}</h3>
        </Col>
        <Col md="6" className="footer-body d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
          <ul className="footer-icons d-flex align-items-center">
            <li className="social-icons">
              <a
                href="https://github.com/vin51435"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/v3p51435/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
