import React from "react";
import "./Resume.css";

const SectionColumn = ({ title, children }) => (
    <div className="section-column">
      <h2 className="section-title">{title}</h2>
      <div className="section-items">{children}</div>
    </div>
);

const ResumeItem = ({ title, children }) => (
  <div className="content-item">
    <h3>{title}</h3>
    {children}
  </div>
);

const Resume = () => (
  <div className="cv" id="cv">
    <div className="resume">

      <SectionColumn title="Arbetslivserfarenhet">
        <ResumeItem title="bet365">
            <p>Esports Trader • Gibraltar & Distans</p>
            <p>April 2018 - Present</p>
        </ResumeItem>
        <ResumeItem title="Digital Engine (Praktik)">
            <p>Systemutvecklare • Stockholm</p>
            <p>Oktober 2024 - April 2025</p>
        </ResumeItem>
        <ResumeItem title="bet365">
            <p>Senior Trading Assistant • Gibraltar</p>
            <p>Maj 2017 - Februari 2018</p>
        </ResumeItem>
        <ResumeItem title="bet365">
            <p>Trading Assistant • Gibraltar</p>
            <p>Juli 2016 - April 2017</p>
        </ResumeItem>
        <ResumeItem title="bet365">
            <p>Customer Advisor • Stoke-on-Trent</p>
            <p>Mars 2013 - Juli 2016</p>
        </ResumeItem>
      </SectionColumn>    

      <SectionColumn title="Studier">
        <ResumeItem title="Nackademin">
            <p>Javautvecklare • Distans</p>
            <p>Augusti 2023 - Maj 2025</p>
        </ResumeItem>
        <ResumeItem title="Linköpings universitet">
            <p>Civilekonomprogrammet • Linköping</p>
            <p>September 2009 - December 2012</p>
        </ResumeItem>
      </SectionColumn>

    <SectionColumn title="Certifikat">
        <ResumeItem title="Azure Fundamentals AZ-900">
            <p>December 2024</p>
        </ResumeItem>
        <ResumeItem title="Cisco CCNA 1 Networking">
            <p>April 2006</p>
        </ResumeItem>
      </SectionColumn>

    </div>
  </div>
);

export default Resume;
