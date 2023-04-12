import React from "react";
import Container from "@mui/material/Container";
import CardService from "./card/CardService";
import figma from "../assets/img/icon/FigmaLogo.svg";
import medium from "../assets/img/icon/ArticleMedium.svg";
import code from "../assets/img/icon/Code.svg";
import chart from "../assets/img/icon/PresentationChart.svg";
import camera from "../assets/img/icon/VideoCamera.svg";
import pen from "../assets/img/icon/PenNib.svg";
const Service = () => {
  return (
    <>
      <div className="service">
        <Container>
          <p className="title-secondary">Our Service</p>
          <h2 className="title-primary">We Provide What You Need</h2>
          <div className="card-section">
            <CardService
              img={figma}
              alt={figma}
              title="UI/UX Designer"
              description="We are ready to make your website more friendly and efficient in the eyes of users"
            />
            <CardService
              img={code}
              alt={code}
              title="Web Development"
              description="Want to create a website that has many features? We have the answer for you. "
            />
            <CardService
              img={medium}
              alt={medium}
              title="Content Writer"
              description="We provide interesting content and can attract customers for you"
            />
            <CardService
              img={chart}
              alt={chart}
              title="Branding"
              description="Create visual branding with amazing result, you just sit back and relax"
            />
            <CardService
              img={camera}
              alt={camera}
              title="Editing Video"
              description="Want to create a website that has many features? We have the answer for you. "
            />
            <CardService
              img={pen}
              alt={pen}
              title="Illustration"
              description="Create beauty illustrasion as you need, and make it interesting"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
