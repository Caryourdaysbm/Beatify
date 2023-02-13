import React from "react";
import ContForm from "../components/ContactForm/ContForm";

function Contact() {
  return (
    <div>
      <h2 className=" mx-6 font-serif font-black md:ml-40 lg:ml-96">
        Get in <span className="text-fuchsia-400">Touch</span>
      </h2>

      <ContForm />
    </div>
  );
}

export default Contact;
