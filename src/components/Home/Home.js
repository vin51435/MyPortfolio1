import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Home1 from "./Home1";
import Home2 from "./Home2";
import useSEO from "../Hooks/useSEO";

function Home({ toggleLoading }) {
  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  useSEO({
    title: "Vinay Poojary | Backend Developer & Full-Stack Engineer",
    description: "Personal portfolio of Vinay Poojary, a Backend Developer & Full-Stack Engineer specializing in building scalable high-performance backend systems with Java Spring Boot, NestJS, Node.js, and PostgreSQL.",
    keywords: "Vinay Poojary, Backend Developer, Full-Stack Engineer, Java Spring Boot, NestJS, Node.js, PostgreSQL, Portfolio, Software Developer"
  });

  return (
    <main className="home-main-container">
      <Container fluid as="section" className="home-section" id="home">
        <Container className="home-content">
          <Home1 />
        </Container>
      </Container>
      <section className="home-introduction">
        <Home2 />
      </section>
    </main>
  );
}

export default Home;
