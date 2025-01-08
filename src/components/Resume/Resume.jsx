import React from "react";
import "./Resume.css";

const ResumeSection = ({ title, children }) => (
  <>
    <div className="row">
      <div className="left section-title">{title}</div>
      <div className="right"></div>
    </div>
    {children}
  </>
);

const ResumeItem = ({ title, children }) => (
  <div className="row">
    <div className="left">{title}</div>
    <div className="right">{children}</div>
  </div>
);

const Resume = () => (
  <div className="cv">
    <div className="resume">
      <ResumeSection title="Certifikat">
        <ResumeItem>
          <div className="content-item">
            <h3>Azure Fundamentals AZ-900</h3>
            <p>December 2024</p>
          </div>
        </ResumeItem>
      </ResumeSection>

      <ResumeSection title="Arbetslivserfarenhet">
        <ResumeItem>
          <div className="content-item">
            <h3>bet365</h3>
            <p>Esports Trader • April 2018 - Present</p>
          </div>
        </ResumeItem>
      </ResumeSection>

      <ResumeSection title="Studier">
        <ResumeItem>
          <div className="content-item">
            <h3>Nackademin</h3>
            <p>Javautvecklare • Augusti 2022 - Present</p>
          </div>
        </ResumeItem>
      </ResumeSection>
    </div>
  </div>
);

export default Resume;