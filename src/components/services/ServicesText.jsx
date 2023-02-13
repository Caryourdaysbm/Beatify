import img1 from "../../assets/service-img-1.png";
import img2 from "../../assets/service-img-2.png";
import img3 from "../../assets/service-img-3.png";

function ServicesText() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col px-10 h-fit   md:pb-16 justify-between gap-24 items-center md:flex-row">
      <hgroup className="space-y-6 md:w-1/2 max-w-[25rem]">
        <h1 className="text-5xl font-semibold">
          What makes us <span className="text-servicesSpan">unique?</span>
        </h1>
        <p className="font-medium mb-5">
          The development of our Nigerian techies is important to us at Beatify.
          We are like training institutions where we create a pathway for
          earning while learning.
        </p>
        <div>
          <a href="#" className="px-4 py-2 bg-purple-800 rounded-lg text-white">
            Join us
          </a>
        </div>
      </hgroup>
      <figure className="max-w-full relative py-20">
        <img
          src={img1}
          alt=""
          className="max-w-xs absolute top-10 object-cover -left-20"
        />
        <img src={img2} alt="" className="max-w-xs -mt-20 object-cover" />
        <img
          src={img3}
          alt=""
          className="max-w-xs  object-cover absolute top-24  left-20"
        />
      </figure>
    </section>
  );
}
export default ServicesText;
