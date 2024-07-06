import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "@src/Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid='sm' className="home-about-section" id="about">
      <div>
        <Row>
          <Col md={9} className="home-about-description">
            <h1 className="home-about-header">
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span>Programming has been my <i><b className="yellow">creative outlet</b></i>, transforming ideas into reality with code.</span>
              <br />
              <br />
              <span>
                I am fluent in classics like
                <i>
                  <b className="yellow"> JavaScript, NOSQL, and HTML. </b>
                </i>
              </span>
              <br />
              <br />
              <span>
                My fields of interest are
                <i>
                  <b className="yellow"> crafting engaging user interfaces </b> and
                  <b className="yellow">
                    &nbsp; optimizing web applications for performance and scalability.
                  </b>
                </i>
              </span>
              <br />
              <br />
              <span>
                Whenever possible, I apply my passion for developing robust applications with <b className="yellow">Node.js</b> and
                <i>
                  <b className="yellow">
                    {" "}
                    &nbsp; Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="yellow"> React.js and Express.js</b>
                </i>
              </span>
              <br />
              <br />
              <span>
                I enjoy creating solutions that make a difference and bring <i>
                  <b className="yellow">ideas to life.</b>
                </i>
              </span>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vin51435"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/v3p51435/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vinaypoojary__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Home2;
