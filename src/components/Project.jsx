import React from "react";
import Container from "@mui/material/Container";
import CardProject from "./card/CardProject";
import project1 from "../assets/img/project-1.png";
import project2 from "../assets/img/project-2.png";
import project3 from "../assets/img/project-3.png";

const Project = () => {
  return (
    <>
      <div className="project">
        <Container>
          <p className="title-secondary">Our Portofolio’s</p>
          <h2 className="title-primary">Recent Projects</h2>
          <div className="card-section">
            <CardProject
              img={project1}
              alt={project1}
              title="Website My Hospital"
              desc="Create a hospital website with patient, doctor, and drug logistics features that help hospital operations"
            />
            <CardProject
              img={project2}
              alt={project2}
              title="Food & Beverages Corp Logo"
              desc="Create a logo for a food & beverage company, with emphasis on aesthetics and user requests"
            />
            <CardProject
              img={project3}
              alt={project3}
              title="Supermarket Mobile Apps"
              desc="Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Project;
