import React from 'react'
import Unique from '../components/About/Unique'
import MeetOurStaff from '../components/About/MeetOurStaff'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    
    <div className="mx-auto" data-aos="fade-up"
    data-aos-duration="2000">
      <Unique />
      <MeetOurStaff />
    </div>
  )
}

export default About
