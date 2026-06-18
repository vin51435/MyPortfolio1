import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/VINAY_POOJARY_RESUME.pdf";

// Set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const fadeUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function ResumeNew({ toggleLoading }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Standard A4 dimensions in points/pixels
  const pdfWidth = 595;
  const pdfHeight = 842;

  // Calculate maximum scaling factor to fit in the viewport
  // Height allocation: viewport height minus top navbar (80px), button (60px), and margins (60px) = 200px
  const availableHeight = dimensions.height - 200;
  const availableWidth = dimensions.width - 40;

  const scale = Math.max(
    0.4,
    Math.min(availableHeight / pdfHeight, availableWidth / pdfWidth),
  );

  return (
    <Container
      fluid
      className="resume-section d-flex flex-column align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "var(--bg-primary)",
        overflow: "hidden",
        // paddingTop: "90px",
        // paddingBottom: "20px",
      }}
    >
      <motion.div
        variants={fadeUpVariants}
        initial="initial"
        animate="animate"
        className="w-100 d-flex flex-column align-items-center"
      >
        {/* Single Top Download Button */}
        <Row className="justify-content-center mb-3 w-100">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
            className="d-flex align-items-center justify-content-center gap-2"
          >
            <AiOutlineDownload /> Download Resume
          </Button>
        </Row>

        {/* PDF Document Viewer (Sized to fit Viewport) */}
        <Row className="resume justify-content-center w-100 m-0 overflow-hidden d-flex align-items-center">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>
      </motion.div>
    </Container>
  );
}

export default ResumeNew;
