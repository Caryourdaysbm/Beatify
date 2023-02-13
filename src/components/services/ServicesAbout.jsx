import { AiFillCheckCircle } from "react-icons/ai";

function ServicesAbout() {
  return (
    <section className="bg-purple-800 mt-20 p-10">
      <div className="max-w-6xl flex m p-3 mx-auto flex-col text-white  gap-12">
        <article>
          <hgroup className="text-2xl w-[17rem] self-center justify-items-center">
            <h1>Learning made easier and realer.</h1>
          </hgroup>
          <div className="relative">
            <AiFillCheckCircle className="good-icon" />
            <p>
              We give our interns real-world tasks to complete. We also provide
              training so they can acquire the knowledge necessary to succeed in
              the real world.
            </p>
          </div>
          <div>
            <AiFillCheckCircle className="good-icon" />
            <p>
              We believe that learning is enjoyable while also earning money
              back, hence, for exemplary work performed, bonuses are given.
            </p>
          </div>
        </article>
        <article>
          <div>
            <AiFillCheckCircle className="good-icon" />
            <p>
              Our interns have been trained and over time, have improved on
              their digital skill set. No doubt, they’re the perfect fit for
              your next tech project.
            </p>
          </div>
          <div>
            <AiFillCheckCircle className="good-icon" />
            <p>
              Our interns have been trained and over time, have improved on
              their digital skill set. No doubt, they’re the perfect fit for
              your next tech project.
            </p>
          </div>
          <div>
            <AiFillCheckCircle className="good-icon" />
            <p>
              We give our interns real-world tasks to complete. We also provide
              training so they can acquire the knowledge necessary to succeed in
              the real world.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
export default ServicesAbout;
