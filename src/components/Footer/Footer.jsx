import React from "react";
import logo from "../../assets/beatify-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[#CCBEE7] text-[#000405] w-full px-10 py-8 ">
      <div className="space-y-2 lg:flex lg:flex-col lg:justify-between lg:items-center mb-8">
        <p className="font-semibold">
          Subscribe to our Newsletter for more updates
        </p>
        <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-4 md:space-y-0">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-1.5 border-[#563198] border-2 rounded-md focus:outline-none"
          />
          <button className="bg-[#563198] text-white px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto flex-col space-y-9 lg:space-y-0 lg:flex-row lg:items-start lg:justify-between">
        {/* Logo */}
        <div>
          <img src={logo} className="w-16" />
        </div>

        {/* Beatify is for */}
        <div className="space-y-4 ">
          <h3 className="text-xl font-semibold">Beatify is for</h3>
          <div>
            <ul>
              <li>Startups</li>
              <li>People seeking to develop Tech skills</li>
              <li>Tech companies</li>
              <li>People seeking internship roles</li>
              <li>Brands and organizations</li>
            </ul>
          </div>
        </div>
        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold capitalize">Support</h3>
          <div className="">
            <ul>
              <li>Contact Support</li>
              <li>Documentation</li>
              <li>Report Spam</li>
            </ul>
          </div>
        </div>
        {/* Community */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold capitalize">Community</h3>
          <div>
            <ul>
              <li>Partners</li>
              <li>Blog</li>
              <li>Events</li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
        {/* Socials Icon */}
        <div>
          <div className="flex space-x-6 lg:flex-col lg:space-x-0 lg:space-y-9">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-16 max-w-6xl mx-auto">
        <div className="border border-[#241F2A]"></div>
        <p className="pt-8 text-center">Beatify © 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
