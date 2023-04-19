import React from "react";
import { Container } from "@mui/material";
import pattern from "../assets/img/pattern.png";
import Button from "./Button";

const Contact = () => {
  return (
    <>
      <div className="contact" id="Contact Us">
        <Container>
          <img src={pattern} alt="" />
          <div className="contact-content">
            <h2>Have a project idea and want to make it come true?</h2>
            <p>
              Please contact us and we will discuss about your project, don't
              forget we are always here for you
            </p>
          </div>
          <Button text="Contact Us" />
        </Container>
      </div>
    </>
  );
};

export default Contact;
