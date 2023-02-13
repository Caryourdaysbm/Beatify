import React, { Fragment } from "react";
import ServicesAbout from "../components/services/ServicesAbout";
import ServicesImgHero from "../components/services/ServicesImgHero";
import ServicesText from "../components/services/ServicesText";
import PurpleGradient from "../components/UI/PurpleGradient";

function Services() {
  return (
    <Fragment>
      <PurpleGradient>
        You’re on the right track towards accomplishing your next goal!
      </PurpleGradient>
      <ServicesImgHero />
      <ServicesText />
      <ServicesAbout />
    </Fragment>
  );
}

export default Services;
