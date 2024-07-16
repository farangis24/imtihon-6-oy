import React from "react";
import { Truck } from "../../icons/truck";
import { HomeIcon } from "../../icons/home";
import { Button } from "../../button";
import { ButtonIcon } from "../../icons/button-icon";
import { Facebook } from "../../icons/facebook";
import { Twitter } from "../../icons/twitter";
import { Pinterest } from "../../icons/pinterest";
import { FooterIcon } from "../../icons/footer-icon";
import { Choose } from "../../icons/choose";
import { Clock } from "../../icons/clock";
import { Pay } from "../../icons/pay";
import { Fresh } from "../../icons/fresh";

export const About = () => {
  return (
    <>
      <section
        className="w-[1519px] h-[450px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(../about/about-banner.png)" }}
      >
        <h1 className="text-primary text-center text-3xl py-[135px] font-bold">
          About Us
        </h1>
      </section>
      <section>
        <div className="container py-[140px] flex">
          <ul className="flex gap-[50px]">
            <li>
              <img src="../about/about1.png" alt="" />
            </li>
            <li className="w-[650px]">
              <i className="text-secondary text-center text-base font-serif">
                About Us
              </i>
              <h1 className="  text-3xl text-primary font-bold font-sans">
                We do Creative Things for Success
              </h1>
              <p className="text-fourth pb-[30px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <p className="text-fourth pb-[50px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="flex pb-[50px] gap-[30px] ">
                <li className="flex gap-[10px] ">
                  <span className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[10px]">
                    <Truck />
                  </span>
                  <h2 className="w-[220px] text-primary font-bold text-sm">
                    Modern Agriculture Equipment
                  </h2>
                </li>
                <li className="flex gap-[10px] ">
                  <span className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-[10px]">
                    <HomeIcon />
                  </span>
                  <h2 className="w-[220px] text-primary font-bold text-sm">
                    No growth hormones are used{" "}
                  </h2>
                </li>
              </div>
              <Button
                variant="secondary"
                className=" 
            flex transition-transform transform hover:scale-105 hover:shadow-lg "
                endIcon={<ButtonIcon />}
                type="submit"
              >
                Load More
              </Button>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-[#F9F8F8] py-[150px]">
        <div className="container">
          <ul className="flex gap-[50px] pb-[70px] ">
            <li className="text-left w-[600px]">
              <i className="text-secondary text-center text-base font-serif">
                Why Choose us?
              </i>
              <p className=" text-3xl text-primary font-bold font-sans pb-[25px]">
                We do not buy from the open market & traders.
              </p>
              <p className="text-fourth text-[16px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
              <div className="pt-[30px]">
                {" "}
                <button className="mb-[15px] py-[15px] pl-[25px] pr-[90px] rounded-[30px] bg-[#ECECEC] text-[15px] text-primary font-semibold">
                  100% Natural Product
                </button>
                <p className="text-fourth pb-[30px] pl-[30px] w-[444px]">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
                <button className="mb-[15px] py-[15px] pl-[25px] pr-[90px] rounded-[30px] bg-[#ECECEC] text-[15px] text-primary font-semibold">
                  Increases resistance{" "}
                </button>
                <p className="text-fourth pl-[30px] w-[444px]">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
              </div>
            </li>
            <li>
              {" "}
              <img
                className="rounded-[20px]"
                src="../about/about-b.jpg"
                alt=""
              />
            </li>
          </ul>
          <ul className="flex px-[140px] pt-[30px] gap-[30px]">
            <li className=" transition-transform transform hover:scale-105 hover:shadow-lg text-center w-[250px] pb-[20px] pt-[50px] px-[35px] rounded-[20px] bg-[#fff]">
              <div className="pl-[40px] pb-[15px]">
                {" "}
                <Choose />
              </div>
              <h1 className="text-sm text-primary font-bold pb-[10px]">
                Return Policy
              </h1>
              <p className="text-fourth">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className=" transition-transform transform hover:scale-105 hover:shadow-lg text-center w-[250px] pb-[20px] pt-[50px] px-[35px] rounded-[20px] bg-[#fff]">
              <div className="pl-[40px] pb-[15px]">
                {" "}
                <Fresh />
              </div>
              <h1 className="text-sm text-primary font-bold pb-[10px]">
                100% Fresh{" "}
              </h1>
              <p className="text-fourth">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className=" transition-transform transform hover:scale-105 hover:shadow-lg text-center w-[250px] pb-[20px] pt-[50px] px-[35px] rounded-[20px] bg-[#fff]">
              <div className="pl-[40px] pb-[15px]">
                {" "}
                <Clock />
              </div>
              <h1 className="text-sm text-primary font-bold pb-[10px]">
                Support 24/7{" "}
              </h1>
              <p className="text-fourth">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
            <li className=" transition-transform transform hover:scale-105 hover:shadow-lg text-center w-[250px] pb-[20px] pt-[50px] px-[35px] rounded-[20px] bg-[#fff]">
              <div className="pl-[40px] pb-[15px]">
                {" "}
                <Pay />
              </div>
              <h1 className="text-sm text-primary font-bold pb-[10px]">
                Secured Payment
              </h1>
              <p className="text-fourth">
                Simply dummy text of the printintypesetting industry.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[170px]">
        <div className="container">
          <div className="container text-center w-[850px] pb-[40px]">
            <i className="text-secondary text-center text-base font-serif">
              Team
            </i>
            <p className=" text-2xl text-primary font-bold">
              Our Organic Experts
            </p>
            <p className="text-fourth">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <ul className="flex text justify-around">
            <li className="transition-transform rounded-[20px] w-[350px] h-[500px] transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-[350px]"
                src="../about/about-tm.png"
                alt="img"
              />
              <div className="flex ">
                <div className="pt-[25px] ml-[30px] bg-#F9F8F8 rounded-r-lg  ">
                  {" "}
                  <p className="text-primary text-base font-bold">
                    Giovani Bacardo
                  </p>
                  <i className="text-secondary  text-sm font-serif">Farmer</i>
                </div>
                <div className="flex pl-[0px] pt-[55px] ">
                  <Facebook />
                  <Pinterest />
                </div>
              </div>
            </li>
            <li className="transition-transform rounded-[20px] w-[350px] h-[500px] transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-[350px]"
                src="../about/about-tm2.png"
                alt="img"
              />
              <div className="flex ">
                <div className="pt-[25px] ml-[30px] bg-#F9F8F8 rounded-r-lg  ">
                  {" "}
                  <p className="text-primary text-base font-bold">
                    Giovani Bacardo
                  </p>
                  <i className="text-secondary  text-sm font-serif">Farmer</i>
                </div>
                <div className="flex pl-[0px] pt-[55px] ">
                  <Facebook />
                  <Twitter />
                </div>
              </div>
            </li>
            <li className="transition-transform rounded-[20px] w-[350px] h-[500px] transform hover:scale-105 hover:shadow-lg">
              <img
                className="w-[350px]"
                src="../about/about-tm3.png"
                alt="img"
              />
              <div className="flex ">
                <div className="pt-[25px] ml-[30px] bg-#F9F8F8 rounded-r-lg  ">
                  {" "}
                  <p className="text-primary text-base font-bold">
                    Giovani Bacardo
                  </p>
                  <i className="text-secondary  text-sm font-serif">Farmer</i>
                </div>
                <div className="flex pl-[0px] pt-[55px] ">
                  <FooterIcon />
                  <Twitter />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-primary py-[180px]">
        <div className=" container text-center">
          <i className="text-secondary text-center text-base font-serif">
            About Us
          </i>
          <p className=" text-2xl text-white font-bold font-sans">
            What We Offer for You
          </p>
          <ul className="flex gap-[30px] pt-[50px]">
            <li className="">
              {" "}
              <img
                className="rounded-[20px] w-[300px] h-[280px] mb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg"
                src="../about/about2.jpg"
                alt=""
              />
              <p className="text-white text-sm font-medium">Spicy</p>
            </li>
            <li className="">
              {" "}
              <img
                className="rounded-[20px] w-[300px] h-[280px] mb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg"
                src="../about/about3.jpg"
                alt=""
              />
              <p className="text-white text-sm font-medium">Nuts & Feesd</p>
            </li>
            <li className="">
              {" "}
              <img
                className="rounded-[20px] w-[300px] h-[280px] mb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg"
                src="../about/about4.jpg"
                alt=""
              />
              <p className="text-white text-sm font-medium">Fruits</p>
            </li>
            <li className="">
              {" "}
              <img
                className="rounded-[20px] w-[300px] h-[280px] mb-[20px] transition-transform transform hover:scale-105 hover:shadow-lg"
                src="../about/about5.png"
                alt=""
              />
              <p className="text-white text-sm font-medium">Vegetable</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
