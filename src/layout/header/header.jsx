import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../../../icons/search";
import { Carts } from "../../../icons/carts";
export const Header = () => {
  return (
    <>
      <section className="   px-[50px] py-[50px] bg-white">
        <div>
          <ul className="flex">
            <li className="pt-[10px] h-[50px] w-[197px">
              <img className="]" src="logo.svg" alt="" />
            </li>
            <nav
              className="pt-[10px] text-primary
            font-semibold  pl-[150px] text-[20px] pr-[130px] gap-[30px] flex"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="">
                <Link>Pages</Link>
              </li>
              <li className="">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="">Project</li>
              <li className="">News</li>
            </nav>
            <li className=" pt-[2px]">
              <form
                className="flex 
              "
              >
                <input
                  type="text"
                  className="border border-gray-400 py-[11px] px-[70px] rounded-[25px] border-none"
                />
                <Search className="" />
              </form>
            </li>
            <li className="pl-[30px] ">
              <Carts />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
