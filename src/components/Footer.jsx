import React from "react";
import { Container } from "@mui/material";
import logo from "../assets/img/icon/Logo.svg";
import fb from "../assets/img/icon/facebook.svg";
import twitter from "../assets/img/icon/twitter.svg";
import ig from "../assets/img/icon/Instagram.svg";
import linkedin from "../assets/img/icon/Linkedin.svg";

const Footer = () => {
  const pages = [
    "Home",
    "Our Service",
    "Portofolio",
    "Testimonial",
    "Contact Us",
  ];
  const explore = ["Resources", "Blog", "Documents"];
  const company = ["About Us", "Partners", "Customers", "Contact Us"];
  return (
    <>
      <div className="footer">
        <Container className="footer-wrapper">
          <div className="left-footer">
            <div className="title">
              <img src={logo} alt={logo} />
              <h2>Bubble Bash</h2>
            </div>
            <p>
              Introducing, We are Bubble Bash digital agency company with more
              than 6 years of experience. We are committed to serve with all our
              heart
            </p>
            <div className="social-media">
              <img src={fb} alt={fb} />
              <img src={twitter} alt={twitter} />
              <img src={ig} alt={ig} />
              <img src={linkedin} alt={linkedin} />
            </div>
          </div>
          <div className="right-footer">
            <div className="pages">
              <h3>Pages</h3>
              <ul>
                {pages.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
            <div className="explore">
              <h3>Explore</h3>
              <ul>
                {explore.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
            <div className="company">
              <h3>Company</h3>
              <ul>
                {company.map((data) => {
                  return <li key={data}>{data}</li>;
                })}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
