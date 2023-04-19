import React from "react";
import { Container } from "@mui/material";
import CardReview from "./card/CardReview";
import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user3.png";

const Review = () => {
  return (
    <>
      <div className="review" id="Testimonial">
        <Container>
          <p className="title-secondary">Client Reviews</p>
          <h2 className="title-primary">What Our Happy Client Say About Us</h2>
          <div className="card-section">
            <CardReview
              title="Website My Hospital"
              review="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
              img={user1}
              name="Katty Clock"
              as="CEO My Hospital"
            />
            <CardReview
              title="Logo F&B Corp"
              review="Really the best service we've ever gotten, really looking forward to the next project"
              img={user2}
              name="John Robert"
              as="CEO My Hospital"
            />
            <CardReview
              title="Supermarket Mobile Apps"
              review="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
              img={user3}
              name="Katty Clock"
              as="CEO My Hospital"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Review;
