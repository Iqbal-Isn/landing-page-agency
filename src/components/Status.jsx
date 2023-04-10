import React from "react";
import Container from "@mui/material/Container";
import Banner from "../assets/img/hero.png";

const Status = () => {
  const stat = [
    { count: "1.2K+", title: "Happy Clients" },
    { count: "1.1K+", title: "WorldWide Clients" },
    { count: "6+", title: "Years of Experience" },
    { count: "12+", title: "Award Winners" },
  ];
  return (
    <>
      <Container>
        <div className="status">
          <div className="status-content">
            <img src={Banner} alt={Banner} className="banner" />
            <ul className="stat-list">
              {stat.map((item) => {
                return (
                  <li key={item.title}>
                    <h4>{item.count}</h4> <p>{item.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Status;
