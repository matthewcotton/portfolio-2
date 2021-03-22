import React from "react";
import Helmet from "react-helmet";
import { Intro, About, Projects } from "../Components";
import "../App.css";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Matt Cotton - Intro</title>
      </Helmet>
      <Intro />
      <About />
      <Projects />
    </>
  );
};
