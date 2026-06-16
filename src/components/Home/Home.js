import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Home1 from "./Home1";
import Home2 from "./Home2";

function Home({ toggleLoading }) {
  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  return (
    <div className="home-main-container">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Home1 />
        </Container>
      </Container>
      <div className="home-introduction">
        <Home2 />
      </div>
    </div>
  );
}

export default Home;
