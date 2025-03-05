import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import useViewportAndFooterHeight from '@src/components/Hooks/useViewportAndFooterHeight';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "@src/Assets/VINAY_POOJARY_RESUME.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function ResumeNew({ toggleLoading }) {
  const { viewportHeight, footerHeight } = useViewportAndFooterHeight('.footer');

  useEffect(() => {
    toggleLoading(false);
  }, []);

  return (
    <Container fluid className="resume-section" style={{ minHeight: `${viewportHeight - footerHeight}px` }}>
      <Row className="justify-content-center mt-3">
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}        >
          <AiOutlineDownload />
          &nbsp;Download Resume
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
          &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
