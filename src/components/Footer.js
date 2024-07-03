import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  let date = new Date();
  let year = date.getFullYear();

  // console.log(location.pathname);
  return (
    location.pathname !== '/' && (
      <Container fluid className="footer">
        <Row className="justify-content-between">
          <Col md="4" className="footer-copywright justify-content-between">
            <h3>Designed and Developed by Vinay Poojary</h3>
          </Col>
          {/* <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} SB</h3>
          </Col> */}
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/vin51435"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/v3p51435/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinaypoojary__"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  );
}

export default Footer;
