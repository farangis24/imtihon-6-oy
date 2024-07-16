import React from "react";
import { shopSingle } from "../data/shop-single";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "../../button";
import { OurProduct } from "./our-product";
import { offer } from "../data/offer";
import { ButtonIcon } from "../../icons/button-icon";
export const ShopSingle = () => {
  const obj = useParams();
  const data = shopSingle.find((item) => item.id == obj.id);
  return (
    <>
      <section
        style={{ backgroundImage: "url(../shop-img/single-banner.png)" }}
        className="w-[1519px] h-[450px] bg-cover bg-center bg-no-repeat"
      >
        <h1 className="text-primary text-center text-3xl py-[135px] font-bold">
          Shop-Single
        </h1>
      </section>
      <section className="pt-[90px]  container">
        {" "}
        <div className=" flex px-[200px]  gap-[50px]">
          <div className="bg-white pt-[15px]  pl-[20px] pr-[20px]">
            <button className="bg-primary py-[10px] px-[20px] rounded-[10px]  text-white text-left">
              {data.category}
            </button>
            <img className="w-[500px]" src={data.image} alt="image" />
          </div>

          <div className="w-[650px]">
            {" "}
            <h1 className="text-primary text-xl font-semibold">
              {data.name}
            </h1>{" "}
            <div className="pb-[15px]">{data.rating}</div>
            <div className="price flex pb-[25px]">
              {" "}
              <del className="text-[15px] text-fourth pr-[10px] pt-[3px]">
                {data.firstPrice}
              </del>
              <p className="text-sm text-primary font-bold">
                {data.secondPrice}
              </p>
            </div>
            <h1 className="text-fourth text-">{data.description}</h1>
            <div className="pt-[50px]">
              <Button
                variant="secondary"
                className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
                type="submit"
                endIcon={<ButtonIcon />}
              >
                {data.button}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[90px]">
        <div className="container w-[1000px] text-center">
          <div className="flex gap-5 pb-[40px] justify-center pt-[90px]">
            <Button
              variant="secondary"
              className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
              type="submit"
            >
              Product Description{" "}
            </Button>
            <Button
              variant="thirdy"
              className="flex transition-transform transform hover:scale-105 hover:shadow-lg "
              type="submit"
            >
              Additional Info{" "}
            </Button>
          </div>
          <h1 className="text-fourth">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </h1>
        </div>
      </section>
      <section className="container">
        <div className="contanier text-center">
          <h1 className="text-primary text-center pb-[40px] text-2xl font-bold">
            Related Products
          </h1>
          <div className="flex flex-wrap gap-[25px]">
            {offer.map((data) => (
              <OurProduct key={data.id} {...data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
