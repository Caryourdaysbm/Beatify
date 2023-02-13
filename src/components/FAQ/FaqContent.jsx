import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FAQ from "../../assets/data/faq-data";

function FaqContent() {
  const content = FAQ.map((items) => {
    return (
      <hgroup className="bg-white  w-[20rem] relative max-w-[19rem] pt-10 px-7 z-20 space-y-2 shadow-xl">
        <p className="text-aboutText text-md   font-semibold">{items.title}</p>
        <p className="     text-sm">{items.content}</p>
        <p className="py-10 flex items-center gap-8 text-aboutText cursor-pointer font-medium">
          See more
          <span>
            <HiOutlineArrowNarrowRight className="text-3xl" />
          </span>
        </p>
      </hgroup>
    );
  });

  return (
    <section className="bg-grayBg px-10 py-16">
      <div className="faq-items">{content}</div>
      <div className="flex justify-center mt-24">
        <a
          href="#"
          className="bg-faqBtn py-3 rounded-md text-white px-6 font-bold"
        >
          View more questions
        </a>
      </div>
    </section>
  );
}

export default FaqContent;
