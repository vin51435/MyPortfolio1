import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/journey", label: "Journey" },
  { path: "/resume", label: "Resume" },
];

function PageNavigator({ toggleLoading }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const currentIndex = PAGES.findIndex((p) => p.path === currentPath);

  let prevPage = null;
  let nextPage = null;

  if (currentPath === "/project") {
    prevPage = PAGES.find((p) => p.path === "/projects");
    nextPage = PAGES.find((p) => p.path === "/journey");
  } else if (currentIndex !== -1) {
    if (currentIndex > 0) {
      prevPage = PAGES[currentIndex - 1];
    }
    if (currentIndex < PAGES.length - 1) {
      nextPage = PAGES[currentIndex + 1];
    }
  }

  // Scroll position state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediately hide on pathname change (except for resume page) to prevent transition flash
    if (location.pathname === "/resume") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const toggleVisibility = () => {
      if (location.pathname === "/resume") {
        setIsVisible(true);
        return;
      }

      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const isMobileViewport = window.innerWidth <= 768;

      if (isMobileViewport) {
        if (totalScrollHeight <= 0) {
          setIsVisible(true);
          return;
        }
        // Mobile: show only when scrolled past 90%
        const scrollPercent = (window.scrollY / totalScrollHeight) * 100;
        if (scrollPercent >= 80) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Desktop: show if scrolled past 200px
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Listen to resize events as viewport width shifts could change mobile/desktop classification
    window.addEventListener("resize", toggleVisibility);

    // Defer the mount check to allow ScrollToTop to reset window scroll coordinates first
    const checkTimeout = setTimeout(() => {
      toggleVisibility();
    }, 50);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
      clearTimeout(checkTimeout);
    };
  }, [location.pathname]);

  // If no navigation is possible, render nothing
  if (!prevPage && !nextPage) return null;

  const handleNavigation = (path) => {
    if (toggleLoading) {
      toggleLoading(false);
    }
    navigate(path);
  };

  return (
    <>
      {prevPage && (
        <button
          className={`page-navigation-fixed prev ${isVisible ? "visible" : ""}`}
          onClick={() => handleNavigation(prevPage.path)}
          aria-label={`Go to previous page: ${prevPage.label}`}
        >
          <FiArrowLeft className="nav-arrow-icon" />
          <span className="nav-label-text">{prevPage.label}</span>
        </button>
      )}

      {nextPage && (
        <button
          className={`page-navigation-fixed next ${isVisible ? "visible" : ""}`}
          onClick={() => handleNavigation(nextPage.path)}
          aria-label={`Go to next page: ${nextPage.label}`}
        >
          <span className="nav-label-text">{nextPage.label}</span>
          <FiArrowRight className="nav-arrow-icon" />
        </button>
      )}
    </>
  );
}

export default PageNavigator;
