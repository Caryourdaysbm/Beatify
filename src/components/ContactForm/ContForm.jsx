import React from "react";

export default function ContForm() {
  return (
    <div>
      <div className="block p-8 mx-4 mb-7 rounded-2xl shadow-lg bg-white max-w-md md:ml-40 lg:ml-96">
        <form className="pb-6">
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="email"
              className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your Email address"
            />
          </div>
    <div className="form-group mb-6">
            <textarea
              className="
      form-control
      block
      w-full
      px-3
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white 
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
       resize-none
      focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none
    "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
          <button
            type="submit"
            className="
    w-32
    px-2
    py-2
    block
    float-right
    bg-fuchsia-400
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-fuchsia-700 hover:shadow-lg
    focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-fuchsia-800 active:shadow-lg
    transition
    duration-150
    ease-in-out"
          >
            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
