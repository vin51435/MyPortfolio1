import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "@src/Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid="sm" className="home-about-section" id="about">
      <div>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h2 className="home-about-header">
              LET ME <span className="yellow">INTRODUCE</span> MYSELF
            </h2>
            <div className="home-about-body mt-4">
              <p className="mb-4">
                I'm a software engineer focused on building robust, high-performance{" "}
                <i className="yellow">
                  <b>backend systems</b>
                </i>{" "}
                and distributed architectures.
              </p>
              <p className="mb-4">
                My primary toolkit includes{" "}
                <i className="yellow">
                  <b>Java, Spring Boot, NestJS, Node.js, and PostgreSQL</b>
                </i>
                , though I believe in choosing the right tool for the problem.
              </p>
              <p className="mb-4">
                I'm particularly interested in designing{" "}
                <i className="yellow">
                  <b>scalable microservices</b>
                </i>
                , optimizing database queries, and orchestrating background workloads with tools like{" "}
                <i className="yellow">
                  <b>Redis and BullMQ</b>
                </i>
                .
              </p>
              <p>
                From designing clean REST APIs to streamlining CI/CD pipelines, I build applications with a focus on execution speed, security, and long-term maintainability.
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar text-center d-none d-md-flex">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={1500}
            >
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONNECT WITH ME</h2>
            <p className="text-secondary">
              Let's build something remarkable together. Feel free to reach out.
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "1.05rem",
                marginTop: "-10px",
                marginBottom: "20px",
              }}
            >
              Email:{" "}
              <a
                href="mailto:v3p51435@gmail.com"
                className="yellow"
                style={{ textDecoration: "none" }}
              >
                v3p51435@gmail.com
              </a>{" "}
              | Phone: <span className="yellow">+91 9136285805</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vin51435"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/v3p51435/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
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
