import React from "react";
import Banner from "../Bannner/Banner";
import Category from "../Category/Category";
import MidSection from "../MidSection/MidSection";
import Trending from "../Trending/Trending";
import CTA from "../CTA/CTA";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <MidSection />
      <Trending />
      <CTA />
    </div>
  );
};

export default Home;
