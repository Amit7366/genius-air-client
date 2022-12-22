import React from "react";
import Carousel from "react-bootstrap/Carousel";
import About from "./About";
import "./Home.css";
const Home = () => {
  return (
    <section className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 myImg"
            src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="First slide"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Tech Learing</h3>
            <p>Learn your Inner Knowledge</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 myImg"
            src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Second slide"
            style={{ height: "600px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Always on Top</h3>
            <p>Best Quality Teacher</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <About></About>
    </section>
  );
};

export default Home;
<h2>Home</h2>;
