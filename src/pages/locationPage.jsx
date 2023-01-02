import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/icon-arrow-left.svg";
import fbIcon from "../assets/icon-facebook-dark.svg";
import instaIcon from "../assets/icon-instagram-dark.svg";
import twitIcon from "../assets/icon-twitter-dark.svg";
import logodark from "../assets/logo-dark.svg";
import mapImage from "../assets/mobile/image-map.png"


const Location = () => {
    const navigate = useNavigate()
    const gobackhandler =() => {
        navigate("/")
    }
  return (
    <Fragment>
      <section>
        <button onClick={gobackhandler} className="w-[260px] h-[72px] bg-[#000] flex justify-between absolute">
          <span className="bg-[#D5966C] w-[56px] h-[72px] flex items-center justify-center">
            <img src={arrowLeft} alt="" />
          </span>
          <p className="font-bold text-[20px] text-white tracking-[3.5px] pt-[20px] pr-[32px]">
            OUR LOCATION
          </p>
        </button>
        <img src={mapImage} className="h-[540px]" />
      </section>
        
      <section className="bg-[#000] px-[16px] box-border pt-[48px]">
        <h1 className="font-black text-[50px] mb-[48px] text-[#fff]">
          OUR LOCATION
        </h1>
        <div className="flex flex-col ">
          <h2 className="font-black text-[32px] text-[#D5966C] mb-[20px]">
            99 King Street
          </h2>
          <p className="font-light text-[#fff] mb-[20px] font-[outfit]">
            Newport <br /> RI 02840 <br /> United States of America
          </p>
          <p className="text-[#fff] font-light text-[18px] mb-[56px] font-[outfit]">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </section>
      <section className="bg-[#D5966C] text-[#000] box-border px-[32px] py-[48px] flex flex-col">
        <img src={logodark} className="mb-[38px] h-[40px] w-[110px]" />
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
    </Fragment>
  );
};

export default Location;
