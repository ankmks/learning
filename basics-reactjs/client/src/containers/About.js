import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
        <Header />
       <div className="container col-md-5">
          <h3>Hello</h3>
          <p className="title text-justify mt-4 mb-4">
              We are the best restaurant.
          </p>
          <h4 className="text-success">
            from Healthy Cafe
          </h4>
       </div>
        <Footer  name="Chai" email="Yo@gmail.com" />
    </div>
  )
}


export default About;