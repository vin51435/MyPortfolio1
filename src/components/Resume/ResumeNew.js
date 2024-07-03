import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "@src/Assets/VINAY POOJARYJune5.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumeNew({ toggleLoading }) {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const element = document.querySelector('.footer'); // Replace with your actual selector
    if (element) {
      setFooterHeight(element.clientHeight);
    }

    toggleLoading(false);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container fluid className="resume-section" style={{ minHeight: `${viewportHeight - footerHeight}px` }}>
      <Row className="justify-content-center mt-3">
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1}
            scale={window.innerWidth > 786 ? 1.5 : 0.6}
          />
        </Document>
      </Row>

      <Row className="justify-content-center">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
