/* eslint-disable react/no-unknown-property */
import React from "react";
import "./Boxes.css";
import { BiLaptop, BiCar, BiUserCheck } from "react-icons/bi";

const Boxes = () => {
  return (
    <section className="p-5 boxes-container">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center g-4"> {/* Updated row class */}
          <div className="col-md">
            <div className="card bg-dark text-light text-center card1">
              <div className="card-header"><BiLaptop size={40}/></div>
              <div className="card-body">
                <h3 className="card-title">Virtual</h3>
                <p className="card-text">
                Explore the virtual world of banking with UBank, where
                convenience meets innovation. Access your accounts anytime,
                anywhere, and enjoy seamless transactions. Experience banking
                re-imagined with our cutting-edge virtual services.
                </p>
                <a href="#" className="btn btn-primary">
                  Connect to U-account
                </a>
              </div>
              <div className="card-footer text-light">2 days ago</div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light text-center card2">
              <div className="card-header"><BiCar size={40}/></div>
              <div className="card-body">
                <h3 className="card-title">Auto</h3>
                <p className="card-text">
                Dive into the world of automotive financing with UBank.
                Gain access to flexible loan options tailored to your needs.
                Whether you're buying a new car or refinancing an existing one,
                we're here to provide you with seamless and convenient financing solutions.
                </p>
                <a href="#" className="btn btn-primary">
                  Connect to U-auto
                </a>
              </div>
              <div className="card-footer text-light">2 days ago</div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-dark text-light text-center card3">
              <div className="card-header"><BiUserCheck size={40}/></div>
              <div className="card-body">
                <h3 className="card-title">In Person</h3>
                <p className="card-text">
                Discover the world of personalized banking with UBank, where traditional values
                meet modern convenience. Access your accounts anytime, anywhere, while enjoying
                the personalized service and support of our dedicated team. 
                </p>
                <a href="#" className="btn btn-primary">
                  Connect to U-account
                </a>
              </div>
              <div className="card-footer text-light">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
    </section>
  );
};

export default Boxes;
