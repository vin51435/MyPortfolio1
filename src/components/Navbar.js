import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import logo from "@src/Assets/logo.png";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar({ toggleLoading, load }) {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const [windowLoaded, setWindowLoaded] = useState(false);
  const location = useLocation();
  const oldScroll = useRef(0);

  const activePage = location.pathname;

  useEffect(() => {
    // Function to handle URL change
    const handleUrlChange = () => {
      updateExpanded(false); // Set expand to false on URL change
    };

    // Function to handle scrolling of .app element
    const handleScroll = () => {
      console.log('handle scroll triggered');
      const appElement = document.querySelector('.App');
      if (appElement && oldScroll.current !== appElement.scrollTop) {
        updateExpanded(false);
        oldScroll.current = appElement.scrollTop;
      }
    };

    // Event listeners for URL change and scrolling .app element
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('scroll', handleScroll);

    // Cleanup functions to remove event listeners
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const perfEntries = performance.getEntriesByType('navigation');
    if (perfEntries.length > 0) {
      const navEntry = perfEntries[0];
      const isPageReloaded = navEntry.type === 'reload';

      if (isPageReloaded && (activePage !== '/')) {
        setWindowLoaded(true);
      }
    }
  }, [activePage]);

  const parallaxElement = document.querySelector('.animatio');
  function scrollHandler() {
    const parallaxScroll = parallaxElement ? parallaxElement?.scrollTop : 0;
    const windowScroll = window.scrollY;

    if ((parallaxScroll && parallaxScroll >= 20) || windowScroll >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function throttle(fn, wait) {
    let time = Date.now();
    return function () {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    };
  }

  const throttledScrollHandler = throttle(scrollHandler, 100);

  if (parallaxElement) {
    parallaxElement.addEventListener('scroll', throttledScrollHandler);
  }

  window.addEventListener("scroll", throttledScrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <>
        <Navbar.Brand href="/" className="d-flex">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className={activePage === '/' && 'activeNav'}>
              <Nav.Link as={Link} to="/" onClick={() => {
                updateExpanded(false);
                if (windowLoaded) {
                  toggleLoading(true);
                  setWindowLoaded(false);
                } else { toggleLoading(false); }
              }}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={activePage === '/about' && 'activeNav'}>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={activePage === '/project' && 'activeNav'}>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={activePage === '/journey' && 'activeNav'}>
              <Nav.Link
                as={Link}
                to="/journey"
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <AiOutlineCalendar
                  style={{ marginBottom: "2px" }}
                />{" "}
                Journey
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={activePage === '/resume' && 'activeNav'}>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/vin51435/MyPortfolio1"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em", color: 'white' }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", color: 'white' }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

export default NavBar;
