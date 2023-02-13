import serviceHero from "../../assets/services-hero.png";

function ServicesImgHero() {
  return (
    <figure className="px-10">
      <img
        src={serviceHero}
        alt="What we Offer"
        className="z-40 w-full max-w-xl mx-auto -translate-y-36 "
      />
    </figure>
  );
}

export default ServicesImgHero;
