import { Fragment } from "react";
import FaqContent from "../components/FAQ/FaqContent";
import PurpleGradient from "../components/UI/PurpleGradient";

function Faq() {
  return (
    <section className="bg-grayBg">
      <PurpleGradient>
        <h1 className="mb-6">FAQ</h1>
        <p className="text-xl">Frequently Asked Questions</p>
      </PurpleGradient>
      <FaqContent />
    </section>
  );
}

export default Faq;
