import React from "react";
import { Button } from "../../../button";
// icons
import { FooterIcon } from "../../../icons/footer-icon";
import { Facebook } from "../../../icons/facebook";
import { Twitter } from "../../../icons/twitter";
import { Pinterest } from "../../../icons/pinterest";
export const Footer = () => {
  return (
    <>
      <footer className="pt-[140px] pb-[115px]">
        <div
          className="container w-full h-[300px] rounded-[20px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(../public/footer.png)" }}
        >
          <div className="flex justify-between">
            <h1 className="text-white w-[375px] py-[80px] text-3xl font-bold">
              Subscribe to our Newsletter
            </h1>
            <ul className="py-[80px] gap-[6px] flex">
              <li>
                <input
                  type="text"
                  placeholder=" your email address"
                  className="font-serif w-[300px] h-[62px] rounded-[10px] bg-white border-none"
                />
              </li>
              <li>
                <Button
                  variant="secondary"
                  className="font-semibold flex transition-transform transform hover:scale-105 hover:shadow-lg "
                  type="submit"
                >
                  Subscribe
                </Button>
              </li>
            </ul>
          </div>
          <ul className="flex gap-[50px] py-[100px]">
            <li className="text-right ml-[100px]">
              <h1 className="text-primary font-bold text-base pb-[10px] ">
                Contact Us
              </h1>
              <h3 className="text-primary font-semibold">Email</h3>
              <p className="text-fourth text-[15px] pb-[20px]">
                needhelp@Organia.com
              </p>
              <h3 className="text-primary font-semibold">Phone</h3>
              <p className="text-fourth text-[15px] pb-[20px]">666 888 888</p>
              <h3 className="text-primary font-semibold">Address</h3>
              <p className="text-fourth text-[15px]">
                88 road, borklyn street, USA
              </p>
            </li>
            <li className="ml-[100px] text-center w-[500px]">
              <img className="pl-[140px]" src="../public/logo.svg" alt="" />
              <p className=" text-fourth text-[15px] pt-[20px] pb-[30px] ">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
              <div className="flex ml-[100px] gap-[20px]">
                {" "}
                <FooterIcon />
                <Facebook />
                <Twitter />
                <Pinterest />
              </div>
            </li>
            <li className="ml-[100px]">
              <h1 className="text-primary font-bold text-base pb-[10px]">
                Utility Pages
              </h1>
              <p className="text-fourth text-[15px] pb-[10px]">Style Guide</p>
              <p className="text-fourth text-[15px] pb-[10px]">404 Not Found</p>
              <p className="text-fourth text-[15px] pb-[10px]">
                Password Protected
              </p>
              <p className="text-fourth text-[15px] pb-[10px]">Licences</p>
              <p className="text-fourth text-[15px] pb-[10px]">Changelog</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
