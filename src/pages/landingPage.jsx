import { useNavigate } from "react-router-dom";
import fbIcon from "../assets/icon-facebook.svg";
import instaIcon from "../assets/icon-instagram.svg";
import twitIcon from "../assets/icon-twitter.svg";
import logoWhite from "../assets/logo-light.svg";
import arrowRight from "../assets/icon-arrow-right.svg";

import secondImage from "../assets/mobile/image-grid-1.jpg";
import chairImage from "../assets/mobile/image-grid-2.jpg";
import lastImage from "../assets/mobile/image-grid-3.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const goToLocationHandler = () => {
    navigate("/location");
  };
  return (
    <div>
      <section className="mb-[120px] relative xl:flex">
        <div className="w-[540px] h-[800px] bg-black hidden md:hidden xl:block "></div>
        <div className="mixx  top-[116px] left-[256px] font-black text-[96px] w-[520px] hidden md:hidden xl:block absolute z-40">
          <p className="text-white font-black text-[96px]  ">MODERN</p>
          <p className="text-white font-black text-[96px] absolute ">ART GALLERY</p>
        </div>
        <picture>
          <source
            media="(min-width: 1400px)"
            srcSet={process.env.PUBLIC_URL + "../assets/desktop/image-hero.jpg"}
          />
          <source
            media="(min-width: 760px)"
            srcSet={process.env.PUBLIC_URL + "../assets/tablet/image-hero.jpg"}
          />

          <img
            src={process.env.PUBLIC_URL + "../assets/mobile/image-hero.jpg"}
            className="mb-[32px]"
          />
        </picture>

        <div className="flex flex-col px-[16px] md:w-[340px] md:absolute md:top-[145px] md:right-[40px] xl:absolute xl:top-[200px] xl:right-[100px]">
          <h1 className="font-black text-[60px] mb-[32px] leading-[55px] md:mb-[48px] xl:hidden">
            MODERN ART GALLERY
          </h1>
          <p className="font-[outfit] text-[18px] mb-[32px]  md:mb-[48px] xl:text-[22px]">
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
      <section className="flex flex-col px-[16px] md:flex-row-reverse md:px-[40px] md:justify-between xl:px-[165px]">
        <picture>
          <source
            media="(min-width: 1400px)"
            srcSet={
              process.env.PUBLIC_URL + "../assets/desktop/image-grid-1.jpg"
            }
          />
          <source
            media="(min-width: 760px)"
            srcSet={
              process.env.PUBLIC_URL + "../assets/tablet/image-grid-1.jpg"
            }
          />

          <img
            src={process.env.PUBLIC_URL + "../assets/mobile/image-grid-1.jpg"}
            className="mb-[32px]"
          />
        </picture>
        <div className="flex flex-col md:w-[223px] md:mt-[40px]">
          <h2 className="font-black text-[50px] mb-[32px] leading-[45px] uppercase">
            Your Day at the Gallery
          </h2>
          <p className="font-[outfit] text-[18px] mb-[32px] font-light text-[#444444]">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>
      <section className="mb-[120px] md:px-[40px] md:flex xl:px-[165px]">
        <picture>
          <source
            media="(min-width: 1400px)"
            srcSet={
              process.env.PUBLIC_URL + "../assets/desktop/image-grid-2.jpg"
            }
          />
          <source
            media="(min-width: 760px)"
            srcSet={
              process.env.PUBLIC_URL + "../assets/tablet/image-grid-2.jpg"
            }
          />

          <img
            src={process.env.PUBLIC_URL + "../assets/mobile/image-grid-2.jpg"}
            className="px-[16px] mb-[16px] md:px-0"
          />
        </picture>
        <div className="px-[16px] xl:pr-0">
          <picture>
            <source
              media="(min-width: 1400px)"
              srcSet={
                process.env.PUBLIC_URL + "../assets/desktop/image-grid-3.jpg"
              }
            />
            <source
              media="(min-width: 760px)"
              srcSet={
                process.env.PUBLIC_URL + "../assets/tablet/image-grid-3.jpg"
              }
            />

            <img
              src={process.env.PUBLIC_URL + "../assets/mobile/image-grid-3.jpg"}
              className="mb-[16px]"
            />
          </picture>
          <div className="bg-[#000] h-[293px] text-[#fff] px-[24px] py-[47px] box-border md:px-0 md:w-[280px] md:pl-[30px] md:h-[351px] xl:w-[448px] xl:h-[388px] ">
            <h3 className="font-black text-[50px] leading-[45px] mb-[24px] xl:text-[60px] xl:leading-[60px]">
              COME & BE INSPIRED
            </h3>
            <p className="font-[outfit] text-[18px] font-light xl:w-[350px]">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#000] text-white box-border px-[32px] py-[48px] flex flex-col md:flex-row md:px-[40px] md:justify-between xl:px-[165px] xl:pt-[80px]">
        <img src={logoWhite} className="mb-[38px] h-[40px] w-[110px]" />
        <p className="font-[outfit] mb-[38px] leading-7 font-light md:w-[281px] md:mb-0 xl:w-[430px]">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className="flex h-[20px]">
          <img src={fbIcon} alt="" />
          <img src={instaIcon} className="mx-[20px]" />
          <img src={twitIcon} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
