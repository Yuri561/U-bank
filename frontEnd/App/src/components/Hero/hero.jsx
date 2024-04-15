/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './hero.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo1 from "../../img/bank2.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <Container fluid className="p-5 container-img text-center h-100 w-100">
        <Row className="align-items-center">
          <Col xs={12} className="position-relative">

            <div className="card text-bg-dark h-50 w-auto">
              <Image src={logo1} className="card-img " alt="..."/>
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-4 text-white mt-3 mb-5">Hello Tech</h1>
                <figure className="card-text text-center text-light">
                  <blockquote className="blockquote">
                    <p>Empowering tomorrow's finances, today.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer text-success">
                    Yuri Vankor <cite title="Source Title">Impact Team</cite>
                  </figcaption>
                </figure>
                  <Link to={'/login'} className="btn btn-primary">Connect to U-Account</Link>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;