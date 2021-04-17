import React from "react";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Services from "../Services/Services";

import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <About></About>
      <Testimonials></Testimonials>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
