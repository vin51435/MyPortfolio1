import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import Preloader from "@src/components/Pre";
import Navbar from "@src/components/Navbar";
import Home from "@src/components/Home/Home";
import About from "@src/components/About/About";
import Projects from "@src/components/Projects/Projects";
import Footer from "@src/components/Footer";
import Resume from "@src/components/Resume/ResumeNew";
import Journey from "@src/components/Journey/Journey";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "@src/components/ScrollToTop";
import "@src/style.css";
import "@src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectShow from "@src/components/Projects/ProjectShow.js";

function App() {
  const [load, setLoad] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 750 });

  useEffect(() => {
    if (isMobile) {
      setLoad(false);
    }
  }, [isMobile]);


  const toggleLoading = (loadingState) => {
    setLoad(loadingState);
  };


  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar toggleLoading={toggleLoading} load={load} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home load={load} toggleLoading={toggleLoading} isMobile={isMobile} />} />
          <Route path="/about" element={<About load={load} toggleLoading={toggleLoading} />} />
          <Route path="/projects" element={<Projects load={load} toggleLoading={toggleLoading} />} />
          <Route path="/resume" element={<Resume load={load} toggleLoading={toggleLoading} />} />
          <Route path="/journey" element={<Journey load={load} toggleLoading={toggleLoading} />} />
          <Route path="/project" element={<ProjectShow toggleLoading={toggleLoading} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>

  );
}

export default App;
