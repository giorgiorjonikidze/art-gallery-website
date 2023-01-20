import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
import fbIcon from "../assets/icon-facebook-dark.svg";
import instaIcon from "../assets/icon-instagram-dark.svg";
import twitIcon from "../assets/icon-twitter-dark.svg";
import logodark from "../assets/logo-dark.svg";

const Location = () => {
  const navigate = useNavigate();
  const gobackhandler = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <section>
        <button
          onClick={gobackhandler}
          className="w-[260px] h-[72px] bg-[#000] flex justify-between absolute md:left-[40px] xl:left-[160px]"
        >
          <span className="bg-[#D5966C] w-[56px] h-[72px] flex items-center justify-center">
            <img src={arrowLeft} alt="" />
          </span>
          <p className="font-bold text-[20px] text-white tracking-[3.5px] pt-[20px] pr-[32px]">
            BACK TO HOME
          </p>
        </button>
        <picture>
          <source
            media="(min-width: 1400px)"
            srcSet={process.env.PUBLIC_URL + "../assets/desktop/image-map.png"}
          />
          <source
            media="(min-width: 760px)"
            srcSet={"../assets/tablet/image-map.png"}
          />

          <img
            src={process.env.PUBLIC_URL + "../assets/mobile/image-map.png"}
            className="h-[540px] md:h-auto"
          />
        </picture>
      </section>

      <section className="bg-[#000] px-[16px] box-border pt-[48px] md:flex md:px-[40px] xl:px-[165px] xl:h-[548px] xl:pt-[104px]">
        <h1 className="font-black text-[50px] mb-[48px] text-[#fff] md:text-[55px] md:mr-[75px] xl:w-[250px] xl:text-[70px] xl:mr-[270px]">
          OUR LOCATION
        </h1>
        <div className="flex flex-col ">
          <h2 className="font-black text-[32px] text-[#D5966C] mb-[20px] xl:text-[36px]">
            99 King Street
          </h2>
          <p className="font-light text-[#fff] mb-[20px] font-[outfit] xl:text-[22px]">
            Newport <br /> RI 02840 <br /> United States of America
          </p>
          <p className="text-[#fff] font-light text-[18px] mb-[56px] font-[outfit] xl:w-[540px] xl:text-[22px]">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
      <section className="bg-[#D5966C] text-[#000] box-border px-[32px] py-[48px] flex flex-col md:flex-row md:px-[40px] md:justify-between xl:px-[165px]">
        <img src={logodark} className="mb-[38px] h-[40px] w-[110px] xl:w-[160px] xl:h-[60px]" />
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
    </Fragment>
  );
};

export default Location;
