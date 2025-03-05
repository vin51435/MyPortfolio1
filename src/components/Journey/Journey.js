import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaStar, FaSchool, FaGraduationCap } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const CareerLadder = ({ toggleLoading }) => {
  useEffect(() => {
    toggleLoading(false);
  }, []);

  const primaryColor = '#FFD60A';
  const secondaryColor = '#FF8B0E';
  const tertiaryColor = '#4F000B';

  return (
    <Container fluid className='journey-section' id='' >
      <VerticalTimeline lineColor={'#be50f4'}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="2018"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Completed School</h3>
          <h4 className="vertical-timeline-element-subtitle">SSC Board</h4>
          <p>Graduated from SSC Board</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="2018 - 2020"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Completed Higher Secondary Education</h3>
          <h4 className="vertical-timeline-element-subtitle">Elphinstone College</h4>
          <p>Graduated from HSC Board</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="2020 - 2023"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Completed Graduation</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai University</h4>
          <p>Graduated with BSc in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="November 2023 - February 2024"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Frontend Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">XIRCLS</h4>
          <p>Worked on various frontend projects, enhancing functionality and user experience</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="2024 - Present"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">Pursuing Master's</h3>
          <h4 className="vertical-timeline-element-subtitle">Master's in Computer Science</h4>
          <p>Currently pursuing a Master's in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: primaryColor, color: tertiaryColor }}
          contentArrowStyle={{ borderRight: `7px solid ${primaryColor}` }}
          date="November 2024 - Present"
          iconStyle={{ background: primaryColor, color: tertiaryColor }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Full-Stack Development Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Rthetapi (Remote)</h4>
          <p>Developing and maintaining scalable web applications using React, Next.js, NestJS, and PostgreSQL.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </Container>
  );
};

export default CareerLadder;
