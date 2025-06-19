import React from "react";
import Banner from "../Bannner/Banner";
import Category from "../Category/Category";
import MidSection from "../MidSection/MidSection";
import Trending from "../Trending/Trending";
import CTA from "../CTA/CTA";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Brush & Soul | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <MidSection />
      <Trending />
      <CTA />
    </div>
  );
};

export default Home;
