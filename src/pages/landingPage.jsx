import twoMen from "../assets/mobile/image-hero.jpg";
import arrowRight from "../assets/icon-arrow-right.svg";
import secondImage from "../assets/mobile/image-grid-1.jpg";
import chairImage from "../assets/mobile/image-grid-2.jpg";
import lastImage from "../assets/mobile/image-grid-3.jpg";
import fbIcon from "../assets/icon-facebook.svg";
import instaIcon from "../assets/icon-instagram.svg";
import twitIcon from "../assets/icon-twitter.svg";
import logoWhite from "../assets/logo-light.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const goToLocationHandler = () => {
    navigate("/location");
  };
  return (
    <div>
      <section className="mb-[120px]">
        <img src={twoMen} className="mb-[32px]" />
        <div className="flex flex-col px-[16px]">
          <h1 className="font-black text-[60px] mb-[32px] leading-[55px]">
            MODERN ART GALLERY
          </h1>
          <p className="font-[outfit] text-[18px] mb-[32px]">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <button
            onClick={goToLocationHandler}
            className="w-[260px] h-[72px] bg-[#000] flex justify-between"
          >
            <p className="font-bold text-[20px] text-white tracking-[3.5px] pt-[20px] pl-[32px]">
              OUR LOCATION
            </p>
            <span className="bg-[#D5966C] w-[56px] h-[72px] flex items-center justify-center">
              <img src={arrowRight} alt="" />
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-col px-[16px]">
        <img src={secondImage} className="mb-[32px]" />
        <div className="flex flex-col">
          <h2 className="font-black text-[50px] mb-[32px] leading-[45px] uppercase">
            Your Day at the Gallery
          </h2>
          <p className="font-[outfit] text-[18px] mb-[32px]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section className="mb-[120px]">
        <img src={chairImage} className="px-[16px] mb-[16px]" />
        <div className="px-[16px]">
          <img src={lastImage} className="mb-[16px]" />
          <div className="bg-[#000] h-[293px] text-[#fff] px-[24px] py-[47px] box-border">
            <h3 className="font-black text-[50px] leading-[45px] mb-[24px]">
              COME & BE INSPIRED
            </h3>
            <p className="font-[outfit] text-[18px] ">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#000] text-white box-border px-[32px] py-[48px] flex flex-col">
        <img src={logoWhite} className="mb-[38px] h-[40px] w-[110px]" />
        <p className="font-[outfit] mb-[38px] leading-7 tracking-">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className="flex ">
          <img src={fbIcon} alt="" />
          <img src={instaIcon} className="mx-[20px]" />
          <img src={twitIcon} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
