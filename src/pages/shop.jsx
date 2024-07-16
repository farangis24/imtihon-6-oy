import React from "react";
import { Link } from "react-router-dom";
import { shopSingle } from "../data/shop-single";
export const Shop = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url(../shop-img/banner-shop.png)" }}
        className="w-[1519px] h-[450px] bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-primary text-center text-3xl py-[135px] font-bold">
          Shop
        </h1>
      </section>
      <section className="pt-[90px] container">
        <div className="flex flex-wrap gap-[25px]">
          {shopSingle.map((item) => (
            <Link
              className=""
              to={`/shop/shop-single/${item.id}`}
              key={item.id}
            >
              <div className="flex ">
                <div className="  w-[305px]  pt-[15px]  pl-[20px] pr-[20px] text-center rounded-[10px] transition-transform transform hover:scale-105 hover:shadow-lg ">
                  <div className="text-left">
                    {" "}
                    <button
                      className="bg-primary py-[10px] 
             px-[20px] rounded-[10px] mt-[30px] text-white text-left"
                    >
                      {item.category}
                    </button>
                  </div>
                  <img
                    className="w-[265px] h-[256px]"
                    src={item.image}
                    alt="image"
                  />
                  <p className="text-left pb-[10px] text-base text-primary font-bold">
                    {item.name}
                  </p>
                  <hr />
                  <span className="flex pt-[10px]">
                    <del className="text-[15px] text-fourth pr-[10px] pt-[3px]">
                      {item.firstPrice}
                    </del>
                    <p className="text-sm text-primary font-bold">
                      {item.secondPrice}
                    </p>
                    <p className="pl-[60px]">{item.rating}</p>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
