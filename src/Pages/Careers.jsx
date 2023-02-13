import React from "react";
import CareerPath from "../components/Careers/CareerPath";
import Cards from "../components/Careers/Cards";
import SecondCards from "../components/Careers/SecondCards";

function Careers() {
  return (
    <div className="bg-lightGrey py-8">
      <CareerPath />
      <Cards />
      <SecondCards />
    </div>
  );
}

export default Careers;
